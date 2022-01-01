import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  Box,
  Container,
  Chip,
  Avatar,
  Divider,
} from '@material-ui/core';
import styles from 'styles/commonStyles';
import Navbar from 'components/common/NavBar';
import Footer from 'components/common/Footer';
import useManyInputs from 'hooks/useManyInputs';
import { auctions, allcategories, location } from 'data';
import { Pagination } from '@material-ui/lab';
import useStyles from 'styles/TableStyles';

const LeaderBoard = () => {
  const globalClasses = styles();
  const customClasses = useStyles();

  const initialState = {
    timeline: 7,
    categories: allcategories[1].replace(/\s/g, ''),
    price: false,
  };

  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const [
    inputState,
    handleTxtChange,
    handleToggleChange,
    changeInput,
    resetState,
    setInputstate,
  ] = useManyInputs(initialState);

  const handleTimeline = (e) => {
    changeInput('timeline', e.target.value);
  };

  const handleCat = (e) => {
    console.log(`e.target.value`, e.target.value);
    changeInput('categories', e.target.value);
  };

  return (
    <>
      <Navbar user='user' />
      {/* <section
        className={`${globalClasses.containerMargin} ${globalClasses.paddingRoot}`}
      >
        
      </section> */}

      <Container className={globalClasses.topSection}>
        <Typography variant='h4' align='center' gutterBottom>
          LeaderBoard
        </Typography>
        <Typography variant='subtitle2' align='center' color='textSecondary'>
          Top auctions ranked by starting price and other statistics
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
              value={inputState.timeline}
              onChange={handleTimeline}
              label='TimeLine'
              fullWidth
            >
              <MenuItem value={7}>Last 7 days</MenuItem>
              <Divider />
              <MenuItem value={14}>Last 14 days</MenuItem>
              <Divider />
              <MenuItem value={21}>Last 21 days</MenuItem>
              <Divider />
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
              label='Categories'
              fullWidth
              // name='categories'
            >
              {allcategories &&
                allcategories.map((cat, ind) => {
                  return (
                    <MenuItem value={inputState.categories}>{cat}</MenuItem>
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
              <MenuItem value={true}>Price (Low - High)</MenuItem>
              <Divider />
              <MenuItem value={false}>Price (High - Low)</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div
          className={`${globalClasses.containerMargin} ${customClasses.wrapper}`}
        >
          <TableContainer className={`${customClasses.tableContainer}`}>
            <Table stickyHeader>
              <TableHead className={customClasses.tableCont}>
                <TableRow>
                  <TableCell style={{ minWidth: 300 }}>Auction Item</TableCell>
                  <TableCell style={{ minWidth: 180 }}>Category</TableCell>
                  <TableCell align='right'>Starting Price</TableCell>
                  <TableCell align='right'>Final Price</TableCell>
                  <TableCell align='right'>Total Bids</TableCell>
                  <TableCell>Created At</TableCell>
                  {/* no item cat starting_price final_price total bids created at */}
                </TableRow>
              </TableHead>
              <TableBody>
                {auctions
                  .slice(
                    (page - 1) * rowsPerPage,
                    (page - 1) * rowsPerPage + rowsPerPage
                  )
                  .map((auc, ind) => {
                    return (
                      <TableRow
                        hover
                        key={auc.id}
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
                              src={auc.img[0]}
                              alt={auc.title}
                              className={customClasses.large}
                            />
                            <Typography variant='subtitle2'>
                              {auc.title}
                            </Typography>
                          </div>
                        </TableCell>

                        <TableCell style={{ minWidth: 180 }}>
                          {auc.categories.map((a, ind) => (
                            <Chip
                              size='small'
                              label={a}
                              color={
                                ind === 0
                                  ? 'default'
                                  : ind === 1
                                  ? 'primary'
                                  : 'secondary'
                              }
                              style={{ marginRight: 10, marginBottom: 10 }}
                            />
                          ))}
                        </TableCell>
                        <TableCell align='right'>
                          <Typography
                            variant='body2'
                            className={globalClasses.downColor}
                          >
                            {auc.price}
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography
                            variant='body2'
                            className={globalClasses.upColor}
                          >
                            {auc.finalPrice}
                          </Typography>
                        </TableCell>
                        <TableCell align='right'>
                          <Typography variant='body2'>
                            {auc.totalBids}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant='body2'>
                            {auc.createdAt}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <Box mt={2}>
            <Pagination
              color='secondary'
              count={Math.ceil(auctions.length / rowsPerPage)}
              page={page}
              onChange={handleChangePage}
              className={customClasses.pagination}
            />
          </Box>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default LeaderBoard;
