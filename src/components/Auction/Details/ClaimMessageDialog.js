import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import {
  DialogActions,
  DialogContent,
  TextField,
  Typography,
} from '@material-ui/core';
import { useGaTracker, useTextInput } from 'hooks';
import { toast } from 'react-toastify';

const useStyles = makeStyles({
  root: {
    '& .MuiDialogContent-root': {
      paddingTop: 20,
      minWidth: 400,
    },
  },
});

export default function ClaimMessageDialog(props) {
  useGaTracker();
  const { open, success, toggleDialog } = props;
  const [message, handleMessage, reset] = useTextInput('');
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.length < 50)
      return toast.error('Message must NOT be less than 50 characters');
    toggleDialog();
    success(message);
    reset();
  };

  return (
    <Dialog
      aria-labelledby='simple-dialog-title'
      open={open}
      className={classes.root}
      onClose={toggleDialog}
    >
      <DialogTitle id='simple-dialog-title' className={classes.Title}>
        Claim Auction
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant='body1'>
          Write a proper message to clarify your Claim !
        </Typography>
        <form id='myform' onSubmit={handleSubmit}>
          <TextField
            value={message}
            onChange={handleMessage}
            label='Message'
            multiline
            fullWidth
            style={{ marginTop: '1rem' }}
            minRows={5}
            type='text'
            required
            variant='outlined'
            // helperText='50 Characters'
            // error={ message.length < 50}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          variant='contained'
          form='myform'
          color='primary'
          type='submit'
          size='small'
        >
          Confirm
        </Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={toggleDialog}
          size='small'
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
