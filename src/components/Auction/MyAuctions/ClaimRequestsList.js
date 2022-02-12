import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useMemo } from 'react';
// import AuctionStepper from '../Details/AuctionStepper';
import styles from 'styles/commonStyles';
import { Skeleton, Pagination } from '@material-ui/lab';
import { useGaTracker } from 'hooks';
import ClaimRequestCreater from './ClaimRequestCard';
import RequestCard from './RequestCard';
import { makeReq } from 'utils/makeReq';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  ClaimRequestRoot: {
    marginInline: 'auto',
    // maxWidth: 600,
    width: '95%',
  },
  ClaimRequestDescription: {
    width: '100%',
  },
}));

const ClaimRequestsList = ({
  requests,
  filter,
  setFilter,
  loading,
  updateClaimRequestSentById,
  updateClaimRequestReceivedById,
}) => {
  useGaTracker();
  const globalClasses = styles();
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  // * Pagination Stuff
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  //* ---- //

  const parsedQuery = useMemo(() => {
    return queryString.parse(location.search);
  }, [location.search]);

  useEffect(() => {
    console.log('parsedQuery', parsedQuery);
    if (!parsedQuery.tab) return;

    if (!['sent', 'received'].includes(parsedQuery.tab)) return;

    setFilter(parsedQuery.tab);

    if (!parsedQuery.claimRequest) return;
    setTimeout(() => {
      // navigate(`${location.pathname.slice(0, -1)}#${parsedQuery.claimRequest}`);
      const targetCard = document.getElementById(parsedQuery.claimRequest);
      const root = document.getElementById('root');

      if (!root || !targetCard) return;

      root.scroll({
        top: targetCard.offsetHeight - targetCard.offsetTop,
        behavior: 'smooth',
      });
    }, 500);
  }, [parsedQuery.tab]);

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

  const handleSendPaymentReqeuest = async (e) => {
    const { id } = e.currentTarget.dataset;
    console.log('e.currentTarget.dataset', e.currentTarget.dataset);
    console.log('id', id);
    const resData = await makeReq(
      `/claim-requests/${id}/sendPaymentRequest`,
      {},
      'PATCH'
    );
    console.log('resData', resData);
    updateClaimRequestSentById(resData.claimRequest?._id, resData.claimRequest);
  };

  const handlePaymentReqeuest = async (e) => {
    const { status, id } = e.currentTarget.dataset;
    console.log('e.currentTarget.dataset', e.currentTarget.dataset);
    console.log('id', id);
    const resData = await makeReq(
      `/claim-requests/${id}/handlePaymentRequest`,
      {
        body: {
          status: status,
        },
      },
      'PATCH'
    );
    console.log('resData', resData);
    updateClaimRequestReceivedById(
      resData.claimRequest?._id,
      resData.claimRequest
    );
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
    window.open(resData.url, '_self');
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
                  id={request._id}
                  key={request._id}
                  className={`${classes.ClaimRequestRoot} ${globalClasses.flexDisp} ${globalClasses.cardContainer}`}
                >
                  <div
                    className={`${globalClasses.flexJustDisp} ${globalClasses.customStyledWidth}`}
                  >
                    <div
                      className={`${globalClasses.customStyledBox} ${globalClasses.flexJustDisp} ${globalClasses.customStyledWidth} ${classes.ClaimRequestDescription}`}
                    >
                      <ClaimRequestCreater user={request.user} />
                      <div
                        className={globalClasses.content}
                        style={{
                          maxWidth: 600,
                        }}
                      >
                        <RequestCard
                          filter={filter}
                          request={request}
                          auctionId={request.auction?._id}
                          handleReject={handleReject}
                          handleAccept={handleAccept}
                          handleSendPaymentReqeuest={handleSendPaymentReqeuest}
                          handlePaymentReqeuest={handlePaymentReqeuest}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            <Pagination
              color='primary'
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
