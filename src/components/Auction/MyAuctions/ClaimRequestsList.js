import { Box, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Card from 'components/Auction/Card';
import AuctionStepper from '../AuctionStepper';
// import AuctionStepper from '../Details/AuctionStepper';
import ShareIcon from '@material-ui/icons/Share';
import styles from 'styles/commonStyles';
import { Skeleton, Pagination } from '@material-ui/lab';
import { useGaTracker } from 'hooks';
import ShareAuction from 'components/common/ShareAuction';
import ClaimRequestCreater from './ClaimRequestCard';
import RequestCard from './RequestCard';
import { handleCatch, makeReq } from 'utils/makeReq';
const useStyles = makeStyles((theme) => ({
  auctDetailCont: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',

    '& .MuiCard-root': {
      marginBottom: 0,
    },

    [theme.breakpoints.up('md')]: {
      minWidth: 650,
    },
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
    },

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
}));

const ClaimRequestsList = ({ requests, filter, setFilter, loading }) => {
  useGaTracker();
  const globalClasses = styles();

  // * Pagination Stuff
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  //* ---- //

  if (loading || !requests)
    return Array(10)
      .fill()
      .map((_, idx) => (
        <Skeleton
          style={{
            marginBlock: '1rem',
            marginInline: 'auto',
          }}
          variant='rect'
          height={200}
          width='90%'
          key={idx}
        />
      ));
  // * making index as key is high discouraged, but in this case skeletons are
  // * only showing and are NOT getting updated, so we can use index as key here
  const handleReject = async (e) => {
    const { id } = e.currentTarget.dataset;
    console.log('id', id);
    const resData = await makeReq(`/claim-requests/${id}/rejected`);
    console.log('resData', resData);
  };
  const handleAccept = async (e) => {
    const { id } = e.currentTarget.dataset;
    console.log('id', id);
    const resData = await makeReq(
      `/claim-requests/${id}/accepted`,
      {},
      'PATCH'
    );
    console.log('resData', resData);
    window.open(resData.url);
  };
  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        sx={{ flexWrap: 'nowrap' }}
        justifyContent='space-between'
        minHeight='80%'
      >
        {requests.length > 0 ? (
          <>
            {requests
              ?.slice(
                (page - 1) * rowsPerPage,
                (page - 1) * rowsPerPage + rowsPerPage
              )
              .map((request) => (
                <div
                  style={{
                    marginInline: 'auto',
                    // maxWidth: 600,
                  }}
                  key={request._id}
                  className={`${globalClasses.flexDisp} ${globalClasses.cardContainer}`}
                >
                  <div
                    className={`${globalClasses.flexJustDisp} ${globalClasses.customStyledWidth}`}
                  >
                    <div
                      className={`${globalClasses.customStyledBox} ${globalClasses.flexJustDisp} ${globalClasses.customStyledWidth}`}
                    >
                      <ClaimRequestCreater user={request.user} />
                      <div className={globalClasses.content}>
                        <RequestCard
                          request={request}
                          auctionId={request.auction?._id}
                          handleReject={handleReject}
                          handleAccept={handleAccept}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            <Pagination
              color='secondary'
              count={Math.ceil(requests.length / rowsPerPage)}
              page={page}
              onChange={handleChangePage}
            />
          </>
        ) : (
          <Box mt={4}>
            <Typography variant='subtitle1'>No Record found</Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default ClaimRequestsList;
