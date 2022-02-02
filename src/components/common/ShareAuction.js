import React from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  DialogActions,
  Button,
  makeStyles,
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,

  //
  RedditShareButton,
  LineShareButton,
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  RedditIcon,
  LineIcon,
} from 'react-share';

import { API_BASE_URL } from 'utils/makeReq';
import { useToggleInput } from 'hooks';

const styles = makeStyles((theme) => ({
  shareBtn: {
    marginLeft: 'auto',
    backgroundColor: theme.custom.darkFore,
    // color: theme.custom.svg,
    '&:hover': {
      backgroundColor: '#2a2c2d',
      boxShadow: `${theme.palette.primary.main}73 0px 0px 10px 0px`,
      // backgroundColor: theme.custom.svg,
    },
  },
}));

const ShareDialog = ({ open, toggleDialog, auctionId }) => {
  return (
    <Dialog open={open} onClose={toggleDialog}>
      <DialogTitle>Share Auction on Social Media</DialogTitle>
      <DialogContent
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 20,
        }}
      >
        <FacebookShareButton
          url={`${API_BASE_URL}/auctionDetails/${auctionId}`}
        >
          <FacebookIcon size={42} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={`${API_BASE_URL}/auctionDetails/${auctionId}`}>
          <TwitterIcon size={42} round={true} />
        </TwitterShareButton>
        <WhatsappShareButton
          url={`${API_BASE_URL}/auctionDetails/${auctionId}`}
        >
          <WhatsappIcon size={42} round={true} />
        </WhatsappShareButton>
        <RedditShareButton url={`${API_BASE_URL}/auctionDetails/${auctionId}`}>
          <RedditIcon size={42} round={true} />
        </RedditShareButton>
        <LineShareButton url={`${API_BASE_URL}/auctionDetails/${auctionId}`}>
          <LineIcon size={42} round={true} />
        </LineShareButton>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' color='secondary' onClick={toggleDialog}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const ShareAuction = ({ auctionId }) => {
  const [isDialogOpen, toggleDialogOpen] = useToggleInput(false);
  const classes = styles();
  return (
    <Box>
      <IconButton
        color='primary'
        aria-label='Share'
        aria-haspopup='true'
        className={classes.shareBtn}
        onClick={toggleDialogOpen}
      >
        <ShareIcon />
        {/* {ind + 1} */}
      </IconButton>
      <ShareDialog
        open={isDialogOpen}
        toggleDialog={toggleDialogOpen}
        auctionId={auctionId}
      />
    </Box>
  );
};

export default ShareAuction;
