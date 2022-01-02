import { makeStyles } from '@material-ui/core';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& .MuiDrawer-paper': {
      position: 'static',
      paddingBlock: 30,
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    height: '100vh',
    borderBottom: '1px solid #0000001f',
    [theme.breakpoints.up('md')]: {
      width: drawerWidth + 50,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth + 50,
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
    minHeight: 600,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    '& h5': {
      textAlign: 'center',
    },
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  list: {
    '& a': {
      color: '#000',

      '&.active': {
        color: theme.palette.primary.main,
        '& .MuiListItem-button': {
          backgroundColor: `${theme.palette.primary.main}1a`,
          boxShadow: 'rgb(4 17 29 / 5%) 0px 0px 8px 0px',
        },
        '& svg': {
          color: theme.palette.primary.main,
        },
      },
    },
  },
}));

export default useStyles;
