import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '90%',
    padding: theme.spacing(3),
    borderRadius: 10,

    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
  },
  uploadFile: {
    '& input': {
      display: 'none',
    },
  },
  uploadFileBox: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      height: 100,
      width: 100,
      objectFit: 'cover',
    },
  },
  selectControl: {
    width: '100%',
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
  },
  uploadDiv: {
    border: `1px solid ${theme.palette.text.secondary}`,
    borderRadius: 10,
    minHeight: 250,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',

    '& span': {
      '& svg': {
        color: theme.palette.primary.main,
      },
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  },
  uploadBtn: {
    minWidth: 130,
    maxHeight: 40,
  },
  categories: {
    '& .MuiInputBase-root': {
      paddingRight: '0 !important',
    },
  },
}));

export default styles;
