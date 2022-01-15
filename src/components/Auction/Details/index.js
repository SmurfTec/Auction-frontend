import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useMemo } from 'react';
import styles from 'styles/commonStyles';
import AuctionStepper from './DetailsAucStepper';
// import AuctionStepper from '../AuctionStepperM';
import Card from './DetailCard';
import { useParams } from 'react-router';
import ScrollToTop from 'utils/ScrollToTop';
import tableStyles from 'styles/TableStyles';
import { useFetch, useToggleInput } from 'hooks';
import { toast } from 'react-toastify';
import Loading from './LoadingDetails';
import { API_BASE_URL, handleCatch, makeReq } from 'utils/makeReq';
import { AuthContext } from 'contexts/AuthContext';
import { AuctionsContext } from 'contexts/AuctionsContext';
import { Navigate } from 'react-router-dom';
import CreateBidForm from './CreateBidForm';
import BidTable from './BidTable';
import { SocketContext } from 'contexts/SocketContext';

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
  const { token, user } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const { addToWatchlist } = useContext(AuctionsContext);
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
  const [isMakingBid, toggleMakingBid] = useToggleInput(false);

  // * Bid
  const createBid = async (amount, auctionId, callBack) => {
    toggleMakingBid();

    try {
      const resData = await makeReq(
        `/auctions/${auctionId}/bid`,
        {
          body: { biddingPrice: amount },
        },
        'PATCH'
      );
      // console.log(`resData`, resData);

      setAuction(resData.auction);
      toast.success('Success');
      callBack?.();
    } catch (err) {
      handleCatch(err);
    } finally {
      toggleMakingBid();
    }
  };

  const handleBookmark = async (e) => {
    addToWatchlist(id);
  };

  useEffect(() => {
    if (!socket || !user) return;
    socket.on('newBid', ({ updatedAuction }) => {
      console.log(`new bid received`, updatedAuction);
      setAuction(updatedAuction);
    });
  }, [socket, user]);

  const minBidAmount = useMemo(() => {
    if (!auction) return 0;

    // * for 1st bid , min amount is auction's startingPricce
    if (!auction.bids.length) return auction.startingPrice + 1;

    // * as bids are sorted as latest first, so first bid's value should be highest
    return auction.bids[0].biddingPrice + 1;
  }, [auction]);

  const isAuctionOver = useMemo(
    () => new Date(auction?.timeLine) < new Date(),
    [auction]
  );

  const isMyAuction = useMemo(
    () => user && auction?.user?._id === user?._id[auction]
  );

  // * Sometimes loading becomes false , but auction is still undefined
  // * for small amount of time , so in that case !auction is put here
  if (loading || !auction) return <Loading />;

  if (error) return <Navigate to='/' />;

  return (
    <>
      <ScrollToTop />
      <Container>
        <section className={globalClasses.containerMargin}>
          <Typography variant='h4' align='center'>
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
                  <BidTable
                    globalClasses={globalClasses}
                    tableClasses={tableClasses}
                    bids={auction.bids}
                    // isAuctionOver={isAuctionOver}
                    // isMyAuction={isMyAuction}
                    isAuctionOver={true}
                    isMyAuction={true}
                  />
                )}
              </Box>
              <CreateBidForm
                createBid={createBid}
                isMakingBid={isMakingBid}
                customClasses={customClasses}
                globalClasses={globalClasses}
                auctionId={auction._id}
                startingPrice={minBidAmount}
              />
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
