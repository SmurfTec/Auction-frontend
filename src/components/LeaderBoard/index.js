import React, { useMemo, useContext, useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Container,
  Chip,
  Avatar,
} from '@material-ui/core';
import styles from 'styles/commonStyles';
import useManyInputs from 'hooks/useManyInputs';
import { Pagination, Skeleton } from '@material-ui/lab';
import useStyles from 'styles/TableStyles';
import { AuctionsContext } from 'contexts/AuctionsContext';
import { daysBetween } from 'utils/dateFunctions';
import { CategoriesContext } from 'contexts/CategoriesContext';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useGaTracker } from 'hooks';

const LeaderBoard = () => {
  useGaTracker();
  const globalClasses = styles();
  const customClasses = useStyles();
  const { categories } = useContext(CategoriesContext);
  const { topAuctions, loading } = useContext(AuctionsContext);

  const [filteredAuctions, setFilteredAuctions] = useState([]);

  const initialState = {
    timeLine: 7,
    category: categories?.[0]?.name,
    price: false,
  };

  const [inputState, , handleToggleChange, changeInput, , ,] =
    useManyInputs(initialState);

  const [page, setPage] = React.useState(1);
  const [rowsPerPage] = React.useState(50);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // * Sync topAuctions with filtered topAuctions
  useEffect(() => {
    if (loading || !topAuctions) return;

    setFilteredAuctions(topAuctions);
  }, [topAuctions, loading]);

  // * Filter items when Category changes
  useEffect(() => {
    if (!inputState.category || !topAuctions) return;

    if (inputState.category === 'all') return setFilteredAuctions(topAuctions);

    setFilteredAuctions(
      topAuctions.filter((el) => {
        let matched = false;
        el.categories.every((cat) => {
          if (inputState.category === cat._id) {
            matched = true;

            // * return false is like break, it'll break and not continue next iterations
            return false;
          }

          // * in .every func , if we return true, it'll continue iterations
          return true;
        });

        return matched;
      })
    );
  }, [inputState.category, topAuctions]);

  // * Filter items when timeLine changes
  useEffect(() => {
    let newAuctions = [];
    switch (inputState.timeLine) {
      case 7:
        newAuctions = topAuctions.filter(
          (el) => daysBetween(new Date(), new Date(el.timeLine)) <= 7
        );
        break;
      case 14:
        newAuctions = topAuctions.filter(
          (el) => daysBetween(new Date(), new Date(el.timeLine)) <= 14
        );
        break;
      case 21:
        newAuctions = topAuctions.filter(
          (el) => daysBetween(new Date(), new Date(el.timeLine)) <= 21
        );
        break;

      default:
        newAuctions = topAuctions;
        break;
    }

    setFilteredAuctions(newAuctions);
  }, [inputState.timeLine, topAuctions]);

  // * Filter items when Price Filter changes
  useEffect(() => {
    if (!topAuctions) return;

    if (!inputState.price)
      setFilteredAuctions((st) =>
        st.sort((a, b) => a.winningPrice - b.winningPrice)
      );
    else
      setFilteredAuctions((st) =>
        st.sort((a, b) => b.winningPrice - a.winningPrice)
      );
  }, [inputState.price, topAuctions]);

  // * Filter by search

  const location = useLocation();

  const parsedQuery = useMemo(() => {
    return queryString.parse(location.search);
  }, [location.search]);

  useEffect(() => {
    if (!parsedQuery.search) return setFilteredAuctions(topAuctions || []);

    setFilteredAuctions(
      topAuctions?.filter((el) =>
        el.title.toLowerCase().includes(parsedQuery.search.toLowerCase())
      )
    );
  }, [parsedQuery, topAuctions]);

  const handleTimeline = (e) => {
    changeInput('timeLine', e.target.value);
  };

  const handleCat = (e) => {
    // console.log(`e.target.value`, e.target.value);
    changeInput('category', e.target.value);
  };

  return (
    <>
      {/* <section
        className={`${globalClasses.containerMargin} ${globalClasses.paddingRoot}`}
      >
        
      </section> */}

      <Container className={globalClasses.topSection}>
        <Typography variant='h4' align='center' gutterBottom>
          Leaderboard
        </Typography>
        <Typography variant='subtitle2' align='center' color='textSecondary'>
          Top Auctions ranked by starting price and other statistics
        </Typography>
        <div
          className={`${customClasses.tabFilters} ${globalClasses.containerMargin}`}
        >
          <FormControl
            variant='outlined'
            className={customClasses.selectControl}
            fulWidth
          >
            <InputLabel htmlFor='outlined-age-native-simple' fullWidth>
              TimeLine
            </InputLabel>
            <Select
              value={inputState.timeLine}
              onChange={handleTimeline}
              label='TimeLine'
              fullWidth
            >
              <MenuItem id='cat' value={7}>
                Last 7 days
              </MenuItem>
              <MenuItem id='cat' value={14}>
                Last 14 days
              </MenuItem>
              <MenuItem id='cat' value={21}>
                Last 21 days
              </MenuItem>
              <MenuItem value={0}>All Time</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant='outlined'
            className={customClasses.selectControl}
            fulWidth
          >
            <InputLabel htmlFor='outlined-age-native-simple' fullWidth>
              Categories
            </InputLabel>
            <Select
              value={inputState.categories}
              onChange={handleCat}
              label='Category'
              fullWidth
            >
              <MenuItem id='cat' value='all'>
                All
              </MenuItem>
              {categories?.map((cat) => {
                return (
                  <MenuItem id='cat' value={cat._id}>
                    {cat.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl
            variant='outlined'
            className={customClasses.selectControl}
            fulWidth
          >
            <InputLabel htmlFor='outlined-age-native-simple' fullWidth>
              Price
            </InputLabel>
            <Select
              name='price'
              value={inputState.price}
              onChange={(e) => handleToggleChange(e)}
              label='Price'
              fullWidth
            >
              <MenuItem id='cat' value={true}>
                Price (Low - High)
              </MenuItem>

              <MenuItem value={false}>Price (High - Low)</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div
          className={`${globalClasses.containerMargin} ${customClasses.wrapper}`}
        >
          <TableContainer>
            <Table stickyHeader>
              <TableHead>
                <TableRow className={customClasses.tableRow}>
                  <TableCell style={{ minWidth: 300 }}>Auction Item</TableCell>
                  <TableCell style={{ minWidth: 180 }}>Category</TableCell>
                  <TableCell align='center'>Starting Price</TableCell>
                  <TableCell align='center'>Final Price</TableCell>
                  <TableCell align='center'>Total Bids</TableCell>
                  <TableCell align='center'>Created At</TableCell>
                  {/* no item cat starting_price final_price total bids created at */}
                </TableRow>
              </TableHead>
              <TableBody>
                {loading
                  ? Array(10)
                      .fill()
                      .map((_, idx) => (
                        <TableRow>
                          {Array(6)
                            .fill()
                            .map(() => (
                              <TableCell>
                                <Skeleton />
                              </TableCell>
                            ))}
                        </TableRow>
                      ))
                  : filteredAuctions.length > 0
                  ? filteredAuctions
                      .slice(
                        (page - 1) * rowsPerPage,
                        (page - 1) * rowsPerPage + rowsPerPage
                      )
                      .map((auc, ind) => {
                        return (
                          <TableRow
                            hover
                            key={auc._id}
                            className={customClasses.hoverRow}
                          >
                            <TableCell
                              component='th'
                              scope='row'
                              style={{ minWidth: 300 }}
                            >
                              <div
                                className={`${globalClasses.flexAlignDisp} ${customClasses.aucItem}`}
                              >
                                <Typography variant='subtitle2'>
                                  {ind + 1}
                                </Typography>
                                <Avatar
                                  src={auc.images?.[0]}
                                  alt={auc.title}
                                  className={customClasses.large}
                                />
                                <Typography variant='subtitle2'>
                                  {auc.title}
                                </Typography>
                              </div>
                            </TableCell>

                            <TableCell
                              style={{ minWidth: 180 }}
                              className={customClasses.AuctionsCategories}
                            >
                              {auc.categories.map((a, ind) => (
                                <Chip
                                  size='small'
                                  label={a.name}
                                  color={
                                    ind === 0
                                      ? 'secondary'
                                      : ind === 1
                                      ? 'primary'
                                      : 'secondary'
                                  }
                                  style={{
                                    marginRight: 10,
                                    marginBottom: 10,
                                  }}
                                />
                              ))}
                            </TableCell>
                            <TableCell align='center'>
                              <Typography
                                variant='body2'
                                className={globalClasses.downColor}
                              >
                                {auc.startingPrice}
                              </Typography>
                            </TableCell>
                            <TableCell align='center'>
                              <Typography
                                variant='body2'
                                className={globalClasses.upColor}
                              >
                                {auc.winningPrice}
                              </Typography>
                            </TableCell>
                            <TableCell align='center'>
                              <Typography variant='body2'>
                                {auc.bids.length}
                              </Typography>
                            </TableCell>
                            <TableCell align='center'>
                              <Typography variant='body2'>
                                {new Date(auc.createdAt).toLocaleDateString()}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        );
                      })
                  : Array(3)
                      .fill()
                      .map((_, idx) => (
                        <TableRow>
                          {Array(6)
                            .fill()
                            .map(() => (
                              <TableCell></TableCell>
                            ))}
                        </TableRow>
                      ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box mt={2}>
            {topAuctions.length > rowsPerPage && (
              <Pagination
                color='primary'
                count={Math.ceil(topAuctions.length / rowsPerPage)}
                page={page}
                onChange={handleChangePage}
                className={customClasses.pagination}
              />
            )}
          </Box>
        </div>
      </Container>
    </>
  );
};

export default LeaderBoard;
