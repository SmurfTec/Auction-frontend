import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Avatar,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useGaTracker } from 'hooks';

const BidTable = ({
  tableClasses,
  bids,
  globalClasses,
  showClaim = false,
  handleSendClaim,
}) => {
  useGaTracker();
  return (
    <Box mt={2} sx={{ maxHeight: 550, overflowY: 'auto' }}>
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 300 }}>User</TableCell>
              <TableCell align='right'>Bid</TableCell>
              <TableCell>Date</TableCell>
              {showClaim && (
                <>
                  <TableCell align='center'>Claim</TableCell>
                  {/* <TableCell align='center'>Chat</TableCell> */}
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {bids?.map((bid, ind) => (
              <TableRow hover key={bid._id} className={tableClasses.hoverRow}>
                <TableCell component='th' scope='row' style={{ minWidth: 300 }}>
                  <div
                    className={`${globalClasses.flexAlignDisp} ${tableClasses.aucItem}`}
                  >
                    <Typography variant='subtitle2'>{ind + 1}</Typography>
                    <Avatar
                      src={bid.user.avatarUrl}
                      alt={bid.user.name}
                      // className={tableClasses.large}
                    />
                    <Typography variant='subtitle2'>{bid.user.name}</Typography>
                  </div>
                </TableCell>

                <TableCell align='right'>
                  <Typography variant='body2'>{bid.biddingPrice}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='body2'>
                    {new Date(bid.createdAt).toLocaleDateString()}
                  </Typography>
                </TableCell>
                {showClaim && (
                  <>
                    <TableCell align='right'>
                      <Button
                        data-bidid={bid._id}
                        onClick={handleSendClaim}
                        variant='contained'
                        color='primary'
                        size='small'
                      >
                        Send Claim
                      </Button>
                    </TableCell>
                    {/* <TableCell>
                      <Button
                        variant='contained'
                        color='secondary'
                        size='small'
                        component={Link}
                        to={`/chat?id=${bid.user._id}`}
                      >
                        Chat
                      </Button>
                    </TableCell> */}
                  </>
                )}
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
  );
};

export default BidTable;
