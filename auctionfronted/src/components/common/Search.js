import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
// import { useThemeContext } from 'Components/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    border: '1px solid #00000075',

    borderRadius: 20,
    // paddingInline: theme.spacing(2),
    // backgroundColor: (props) =>
    //   props.themeMode
    //     ? theme.mode['dark'][1]
    //     : theme.mode['light'][1],
    minHeight: '2em',
    // '& h6, h4':{
    //   lign
    // },

    '& svg': {
      width: '0.7em',
      height: '0.7em',
      // marginInline: theme.spacing(1),
      marginLeft: 12,
      marginRight: 6,
      color: theme.palette.grey[600],
    },
  },
  input: {
    fontSize: '0.8rem',
    letterSpacing: 0.8,
    // color: (props) => (props.themeMode ? '#FFF' : '#000'),
    marginLeft: theme.spacing(1),
    // paddingInline: '4px 14px',
  },
  divider: {
    height: 20,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  // const themeMode = useThemeContext();
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <SearchIcon />
      {/* <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'
      >
      </IconButton> */}
      <Divider className={classes.divider} orientation='vertical' />
      <InputBase
        className={classes.input}
        placeholder='Search Files'
        inputProps={{ 'aria-label': 'search files' }}
      />
    </Paper>
  );
}
