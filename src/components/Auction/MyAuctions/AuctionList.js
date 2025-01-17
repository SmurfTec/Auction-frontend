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

const AuctionList = ({ auctions = [], loading, isEdit }) => {
  useGaTracker();
  const globalClasses = styles();
  const customClasses = useStyles();

  const handleShare = (e) => {
    const { item } = e.currentTarget.dataset;
    // console.log(`item`, item);
  };

  // * Pagination Stuff
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  //* ---- //

  if (loading || !auctions)
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

  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        sx={{ flexWrap: 'nowrap' }}
        justifyContent='space-between'
        minHeight='80%'
      >
        {auctions.length > 0 ? (
          <>
            {auctions
              ?.slice(
                (page - 1) * rowsPerPage,
                (page - 1) * rowsPerPage + rowsPerPage
              )
              .map((auc) => (
                <div
                  key={auc._id}
                  className={`${globalClasses.flexDisp} ${globalClasses.cardContainer}`}
                >
                  <div
                    className={`${globalClasses.flexJustDisp} ${globalClasses.customStyledWidth}`}
                  >
                    <div
                      className={`${globalClasses.customStyledBox} ${globalClasses.flexJustDisp} ${globalClasses.customStyledWidth}`}
                    >
                      <AuctionStepper auction={auc} isEdit={isEdit} />
                      <div className={globalClasses.content}>
                        <Card auction={auc} isEdit={isEdit} />
                      </div>
                    </div>
                  </div>

                  <ShareAuction auctionId={auc._id} />
                </div>
              ))}

            {auctions.length > rowsPerPage && (
              <Pagination
                color='primary'
                count={Math.ceil(auctions.length / rowsPerPage)}
                page={page}
                onChange={handleChangePage}
              />
            )}
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

export default AuctionList;
