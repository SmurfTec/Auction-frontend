import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import {
  DialogActions,
  DialogContent,
  Typography,
} from '@material-ui/core';
import { useGaTracker } from 'hooks';
const useStyles = makeStyles({
  root: {
    '& .MuiDialogContent-root': {
      paddingTop: 20,
      minWidth: 400,
    },
  },
});

export default function PublishAuction(props) {
  useGaTracker();
  const { open, success, toggleDialog } = props;
  const classes = useStyles();

  return (
    <Dialog
      aria-labelledby='simple-dialog-title'
      open={open}
      className={classes.root}
      onClose={toggleDialog}
    >
      <DialogTitle id='simple-dialog-title' className={classes.Title}>
        Publish Auction
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant='body1'>
          Do you want to Publish your auction for biddings ?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant='contained'
          color='primary'
          onClick={() => success('published')}
          size='small'
        >
          Yes
        </Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => success('inProgress')}
          size='small'
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}
