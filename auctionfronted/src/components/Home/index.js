import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Menu,
  MenuItem,
  MenuList,
  Divider,
  FormControlLabel,
  Checkbox,
  Paper,
  IconButton,
} from '@material-ui/core';

import React from 'react';
import Navbar from 'components/common/NavBar';
import styles from 'styles/commonStyles';
import HeroCarousel from 'components/common/HeroCarousel';
import Footer from 'components/common/Footer';
import { auctions, categories, location } from 'data';
import Card from 'components/Auction/Card';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Pagination } from '@material-ui/lab';
import AuctionStepper from 'components/Auction/AuctionStepper';
import ShareIcon from '@material-ui/icons/Share';

// import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  filter: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    '& hr:last-child': {
      display: 'none',
    },
    '& p': {
      paddingLeft: theme.spacing(2),
    },

    '& .MuiFormControlLabel-root': {
      marginLeft: 0,
    },
  },
  pagination: {
    justifyContent: 'center',
    '& .MuiTablePagination-spacer': {
      flex: 0,
      display: 'none',
    },

    '& .MuiTablePagination-toolbar': {
      justifyContent: 'left',
    },

    '& .MuiTablePagination-input': {
      display: 'none',
    },
  },
}));

const HomePage = () => {
  const globalClasses = styles();
  const customClasses = useStyles();

  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);

  const initialState = {
    price: '',
    categories: [],
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleFilter = (e) => {
    const { filter } = e.currentTarget.dataset;
    // console.log(`e.`, filter);
  };

  const handleShare = (e) => {
    const { item } = e.currentTarget.dataset;
    // console.log(`item`, item);
  };

  return (
    <>
      <Navbar user='user' />
      <section>
        <HeroCarousel />
      </section>
      <section className={globalClasses.topSection} />
      {/* <Container> */}
      <section
        className={`${globalClasses.containerMargin} ${globalClasses.topSection} ${globalClasses.paddingRoot}`}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant='h5'>Filter By</Typography>
            <div className={customClasses.filter}>
              <Accordion>
                <AccordionDetails>
                  <Typography
                    variant='subtitle2'
                    className={globalClasses.heading}
                    style={{ cursor: 'pointer', marginTop: 5 }}
                    onClick={handleFilter}
                    data-filter='mostViewed'
                  >
                    Most Viewed
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography
                    variant='subtitle1'
                    className={globalClasses.heading}
                  >
                    Price
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={customClasses.content}>
                    <Typography
                      variant='body1'
                      style={{ cursor: 'pointer' }}
                      onClick={handleFilter}
                      data-filter='priceAsc'
                      fullWidth
                    >
                      Price (low-high)
                    </Typography>
                    <Divider />

                    <Typography
                      variant='body1'
                      style={{ cursor: 'pointer' }}
                      onClick={handleFilter}
                      data-filter='priceDesc'
                    >
                      Price (high-low)
                    </Typography>
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography
                    variant='subtitle2'
                    className={globalClasses.heading}
                  >
                    Location
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={customClasses.content}>
                    {location &&
                      location.map((loc) => (
                        <>
                          <Typography
                            variant='body1'
                            style={{ cursor: 'pointer' }}
                            onClick={handleFilter}
                            data-filter='priceDesc'
                          >
                            {loc}
                          </Typography>
                          <Divider />
                        </>
                      ))}
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography
                    variant='subtitle2'
                    className={globalClasses.heading}
                  >
                    Categories
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={customClasses.content}>
                    {categories &&
                      categories.map((cat) => (
                        <>
                          <FormControlLabel
                            value={cat.replace(/\s/g, '')}
                            control={<Checkbox color='primary' />}
                            label={cat}
                            labelPlacement='end'
                          />
                          <Divider />
                        </>
                      ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Typography variant='h5'>
              <Box mb={3}>Featured Auctions</Box>
            </Typography>

            {/* <TableContainer className={globalClasses.container}>
                <Table>
                  <TableBody>
                    {auctions
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((auc) => {
                        return (
                          <TableRow
                            // hover
                            // role='checkbox'
                            tabIndex={-1}
                            key={auc.id}
                          >
                            <Card {...auc} />
                            {/* <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell> */}
            {/* </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer> */}
            <div className={customClasses.pagination}>
              {auctions
                .slice(
                  (page - 1) * rowsPerPage,
                  (page - 1) * rowsPerPage + rowsPerPage
                )
                .map((auc, ind) => {
                  return (
                    <div
                      className={`${globalClasses.flexDisp} ${globalClasses.cardContainer}`}
                    >
                      <div
                        className={`${globalClasses.flexJustDisp} ${globalClasses.customStyledWidth}`}
                      >
                        <div
                          className={`${globalClasses.customStyledBox} ${globalClasses.flexJustDisp} ${globalClasses.customStyledWidth}`}
                        >
                          <AuctionStepper auction={auc} />
                          <div className={globalClasses.content}>
                            <Card {...auc} />
                          </div>
                        </div>
                      </div>
                      {/* <div className={globalClasses.auctDetailCont}>
                          <AuctionStepper auction={auc} />

                          <div className={globalClasses.content}>
                            <Card {...auc} />
                          </div>
                        </div> */}
                      <Box>
                        <IconButton
                          aria-label='Share'
                          aria-haspopup='true'
                          data-item={auc.id}
                          onClick={handleShare}
                          style={{
                            marginLeft: 'auto',
                            color: '#000',
                          }}
                        >
                          <ShareIcon />
                          {/* {ind + 1} */}
                        </IconButton>
                      </Box>
                    </div>
                  );
                })}

              <Pagination
                color='secondary'
                count={Math.ceil(auctions.length / rowsPerPage)}
                page={page}
                onChange={handleChangePage}
              />
            </div>
          </Grid>
        </Grid>
      </section>
      {/* </Container> */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default HomePage;
