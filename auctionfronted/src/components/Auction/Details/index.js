import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Avatar,
  Chip,
  Pagination,
} from '@material-ui/core';
import Navbar from 'components/common/NavBar';
import React, { useEffect, useState } from 'react';
import styles from 'styles/commonStyles';
import AuctionStepper from './DetailsAucStepper';
// import AuctionStepper from '../AuctionStepperM';
import Card from './DetailCard';
import { auctions } from 'data';
import Footer from 'components/common/Footer';
import { useParams } from 'react-router';
import ScrollToTop from 'utils/ScrollToTop';
import { bidddingInfo } from 'data';
import tableStyles from 'styles/TableStyles';

const useStyles = makeStyles((theme) => ({
  contentCont: {
    boxShadow: 'rgb(4 17 29 / 25%) 0px 0px 10px 0px',
    borderRadius: 12,
    padding: 15,
    backgroundColor: '#fff',
    height: 'fit-content',
  },
  histCard: {
    display: 'flex',
    justifyContent: 'end',
    columnGap: '2em',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      rowGap: '2em',
    },
  },
}));

const AuctionDetails = () => {
  const globalClasses = styles();
  const customClasses = useStyles();
  const tableClasses = tableStyles();
  const { id } = useParams();
  const [auction, setAuction] = useState(null);

  useEffect(() => {
    const a = auctions.filter((e) => e.id === id * 1);

    // ^ Validate if a is empty or not ,, currently not sure..
    if (a) setAuction(...a);
  }, [id]);

  const handleSubmit = () => {};

  return (
    <>
      <Navbar user='user' />

      <ScrollToTop />
      <Container>
        <section className={globalClasses.containerMargin}>
          <Typography variant='h4' align='center' fullWidth>
            Auction Details
          </Typography>
        </section>
        {auction ? (
          <section className={globalClasses.containerMargin}>
            <div className={`${globalClasses.flexJustDisp}`}>
              <div
                className={`${globalClasses.customStyledBox} ${globalClasses.flexJustDisp}`}
              >
                <AuctionStepper auction={auction} />
                <div className={globalClasses.content}>
                  <Card {...auction} />
                </div>
              </div>
            </div>
            {/* <div className={`${custom.auctDetailCont}`}>
              <AuctionStepper auction={auction} />
              <div className={globalClasses.content}>
                <Card {...auction} />
              </div>
            </div> */}

            <Box mt={5} className={`${customClasses.histCard}`}>
              <Box
                sx={{ flexBasis: '60%' }}
                className={`${customClasses.contentCont}`}
              >
                <Typography variant='h5'>Bidding Info</Typography>
                <Box mt={2} sx={{ maxHeight: 550, overflowY: 'auto' }}>
                  <TableContainer className={`${tableClasses.tableContainer}`}>
                    <Table stickyHeader>
                      <TableHead className={tableClasses.tableCont}>
                        <TableRow>
                          <TableCell style={{ minWidth: 300 }}>User</TableCell>
                          <TableCell align='right'>Bid</TableCell>
                          <TableCell>Date</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {bidddingInfo.map((auc, ind) => (
                          <TableRow
                            hover
                            key={auc.id}
                            className={tableClasses.hoverRow}
                          >
                            <TableCell
                              component='th'
                              scope='row'
                              style={{ minWidth: 300 }}
                            >
                              <div
                                className={`${globalClasses.flexAlignDisp} ${tableClasses.aucItem}`}
                              >
                                <Typography variant='subtitle2'>
                                  {ind + 1}
                                </Typography>
                                <Avatar
                                  src={auc.user.avatarUrl}
                                  alt={auc.user.name}
                                  // className={tableClasses.large}
                                />
                                <Typography variant='subtitle2'>
                                  {auc.user.name}
                                </Typography>
                              </div>
                            </TableCell>

                            <TableCell align='right'>
                              <Typography variant='body2'>
                                {auc.price}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant='body2'>
                                {auc.createdAt}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  {/* <Box mt={2}>
                    <Pagination
                      color='secondary'
                      count={Math.ceil(auctions.length / rowsPerPage)}
                      page={page}
                      onChange={handleChangePage}
                      className={tableClasses.pagination}
                    />
                  </Box> */}
                </Box>
              </Box>
              <Box
                sx={{ flexBasis: '40%' }}
                className={`${customClasses.contentCont}`}
              >
                <Typography variant='h5'>Bid Now</Typography>

                <Box mt={2}>
                  <Typography variant='subtitle2'>
                    Bid Amount : Minimum Bid {auction.price}
                  </Typography>
                </Box>
                <Box
                  mt={2}
                  className={`${globalClasses.flexAlignDisp}`}
                  justifyContent='space-between'
                  sx={{ columnGap: 15 }}
                >
                  <TextField
                    name='biddingAmount'
                    placeholder='Amount'
                    color='primary'
                    type='number'
                    // size='small'
                  />
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleSubmit}
                  >
                    Place BID
                  </Button>
                </Box>
              </Box>
            </Box>
            {/* <Box
              display='flex'
              mt={3}
              sx={{
                columnGap: '2em',
                alignItems: 'center',
                justifyContent: 'end',
              }}
            >
              <Typography variant='subtitle1'>
                Interested ? Place a bid
              </Typography>
              <TextField
                name='biddingAmount'
                placeholder='Amount'
                color='primary'
                type='number'
                size='small'
              />
            </Box> */}
            {/* <Box mt={3} mb={7} sx={{ textAlign: 'right' }}>
              <Button
                variant='contained'
                color='primary'
                onClick={handleSubmit}
              >
                BID
              </Button>
            </Box> */}
          </section>
        ) : (
          <Typography variant='subtitle1'>Auction Not Found</Typography>
        )}
      </Container>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default AuctionDetails;
