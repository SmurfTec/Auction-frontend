import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, IconButton } from '@material-ui/core';
// import { useThemeContext } from 'Components/theme';

const DRAWER_WIDTH = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    top: 12,
    bottom: 12,
    left: -4,
    position: 'fixed',
    zIndex: 2001,
  },

  sideBarBtn: {
    padding: '5px 8px',
    marginTop: '-24px',
    left: ({ open }) => (open ? DRAWER_WIDTH + 4 : -5),
    top: ({ open }) => (open ? 18 : '10%'),
    position: 'absolute',
    backgroundColor: theme.palette.primary.main,

    borderRadius: '0px 24px 24px 0',
    boxShadow:
      'rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 12px 24px 0px',
    '& svg': {
      color: '#fff',
    },

    transition: 'all 0.25s ease-out',
    [theme.breakpoints.up('md')]: {
      left: ({ open }) => (open ? DRAWER_WIDTH + 50 + 4 : -5),
    },
  },
}));

export default function SideMenu({ onOpenSidebar, open }) {
  const classes = useStyles({ open });
  return (
    <div className={classes.root}>
      <div className={classes.sideBarBtn}>
        <IconButton
          onClick={onOpenSidebar}
          size='small'
          sx={{
            mr: 1,
          }}
        >
          {open ? <CloseIcon /> : <TuneIcon />}
        </IconButton>
      </div>
    </div>
  );
}
