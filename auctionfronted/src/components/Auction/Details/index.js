import {
  Box,
  Button,
  Container,
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
  CircularProgress,
} from '@material-ui/core';
import React, { useContext } from 'react';
import styles from 'styles/commonStyles';
import AuctionStepper from './DetailsAucStepper';
// import AuctionStepper from '../AuctionStepperM';
import Card from './DetailCard';
import { useParams } from 'react-router';
import ScrollToTop from 'utils/ScrollToTop';
import tableStyles from 'styles/TableStyles';
import { useFetch, useTextInput, useToggleInput } from 'hooks';
import { toast } from 'react-toastify';
import Loading from 'components/common/Loading';
import { API_BASE_URL, handleCatch, makeReq } from 'utils/makeReq';
import { AuthContext } from 'contexts/AuthContext';
import { Navigate } from 'react-router-dom';

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
  const { token } = useContext(AuthContext);
  const globalClasses = styles();

  const customClasses = useStyles();
  const tableClasses = tableStyles();
  const { id } = useParams();

  let {
    value: auction,
    loading,
    error,
    setValue: setAuction,
  } = useFetch(
    `${API_BASE_URL}/auctions/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
    [id],
    'auction'
  );

  // * Fetch Bid from api
  const [biddingAmount, handleAmountChange, resetAmount] = useTextInput(0);
  const [isMakingBid, toggleMakingBid] = useToggleInput(false);

  // * Bid
  const createBid = async (amount, auctionId) => {
    toggleMakingBid();

    try {
      const resData = await makeReq(
        `/auctions/${auctionId}/bid`,
        {
          body: { biddingPrice: amount },
        },
        'PATCH'
      );
      console.log(`resData`, resData);

      setAuction(resData.auction);
      toast.success('Success');
      resetAmount();
    } catch (err) {
      handleCatch(err);
    } finally {
      toggleMakingBid();
    }
  };

  const handleAddBid = (e) => {
    e.preventDefault();
    createBid(biddingAmount, auction._id);
  };

  const handleBookmark = async (e) => {
    try {
      const resData = await makeReq(`/auctions/${id}/watchlist`, {}, 'POST');
      toast.success('Added to watchlist successfully!');
    } catch (err) {
      handleCatch(err);
    } finally {
    }
  };

  // * Sometimes loading becomes false , but auction is still undefined
  // * for small amount of time , so in that case !auction is put here
  if (loading || !auction) return <Loading noTitle />;

  if (error) return <Navigate to='/' />;

  return (
    <>
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
                  <Card auction={auction} handleBookmark={handleBookmark} />
                </div>
              </div>
            </div>
            {/* <div className={`${custom.auctDetailCont}`}>
              <AuctionStepper auction={auction} />
              <div className={globalClasses.content}>
                <Card auction={auction} />
              </div>
            </div> */}

            <Box mt={5} className={`${customClasses.histCard}`}>
              <Box
                sx={{ flexBasis: '60%' }}
                className={`${customClasses.contentCont}`}
              >
                <Typography variant='h5'>Bidding Info</Typography>
                {auction.bids?.length === 0 ? (
                  <Typography variant='body1' align='center'>
                    Be the first one to make bid
                  </Typography>
                ) : (
                  <Box mt={2} sx={{ maxHeight: 550, overflowY: 'auto' }}>
                    <TableContainer
                      className={`${tableClasses.tableContainer}`}
                    >
                      <Table stickyHeader>
                        <TableHead className={tableClasses.tableCont}>
                          <TableRow>
                            <TableCell style={{ minWidth: 300 }}>
                              User
                            </TableCell>
                            <TableCell align='right'>Bid</TableCell>
                            <TableCell>Date</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {auction.bids?.map((bid, ind) => (
                            <TableRow
                              hover
                              key={bid._id}
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
                                    src={bid.user.avatarUrl}
                                    alt={bid.user.name}
                                    // className={tableClasses.large}
                                  />
                                  <Typography variant='subtitle2'>
                                    {bid.user.name}
                                  </Typography>
                                </div>
                              </TableCell>

                              <TableCell align='right'>
                                <Typography variant='body2'>
                                  {bid.biddingPrice}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Typography variant='body2'>
                                  {new Date(bid.createdAt).toLocaleDateString()}
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
                )}
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
                <form onSubmit={handleAddBid}>
                  <Box
                    mt={2}
                    className={`${globalClasses.flexAlignDisp}`}
                    justifyContent='space-between'
                    sx={{ columnGap: 15 }}
                  >
                    <TextField
                      name='biddingPrice'
                      placeholder='Amount'
                      color='primary'
                      type='number'
                      required
                      value={biddingAmount}
                      onChange={handleAmountChange}
                      inputProps={{
                        min: auction.startingPrice,
                      }}
                      // size='small'
                    />
                    <Button
                      disabled={isMakingBid}
                      variant='contained'
                      color='primary'
                      type='submit'
                    >
                      Place BID
                      {isMakingBid && <CircularProgress size={25} />}
                    </Button>
                  </Box>
                </form>
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
    </>
  );
};

export default AuctionDetails;
