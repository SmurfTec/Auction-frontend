import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Navbar from 'components/common/NavBar';
import { Box, Hidden } from '@material-ui/core';
import Footer from 'components/common/Footer';
import SideMenu from './SideMenu';
import MHidden from './MHidden';
import ViewListIcon from '@material-ui/icons/ViewList';
import SpeakerNotesOffIcon from '@material-ui/icons/SpeakerNotesOff';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CancelIcon from '@material-ui/icons/Cancel';

const drawerWidth = 200;

const drawerList = [
  {
    id: 122,
    title: 'Watch List',
    link: 'watchlist',
    icon: '',
  },
  {
    id: 123,
    title: 'Unclaimed Bid',
    link: 'unclaimed',
  },
  {
    id: 124,
    title: 'Completed auctions ',
    link: 'completed',
  },
  {
    id: 125,
    title: 'Unpublished ',
    link: 'unpublished',
  },
];

const getIcon = (name) => {
  switch (name) {
    case 'unclaimed':
      return <SpeakerNotesOffIcon />;
    case 'unpublished':
      return <CancelIcon />;
    case 'completed':
      return <AssignmentTurnedInIcon />;
    default:
      return <ViewListIcon />;
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& .MuiDrawer-paper': {
      position: 'static',
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    // height: '100vh',
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
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
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
        '& svg': {
          color: theme.palette.primary.main,
        },
      },
    },
  },
}));

const DrawerLayout = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const toggleSideBar = () => {
    setOpen((prev) => !prev);
  };

  const drawerContent = (
    <>
      <List className={classes.list}>
        {drawerList.map((item) => (
          <>
            <NavLink to={`/myauctions/${item.link}`}>
              <ListItem button key={item.id}>
                <ListItemIcon style={{ minWidth: 40 }}>
                  {getIcon(item.link)}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            </NavLink>
            <Divider />
          </>
        ))}
      </List>
    </>
  );

  return (
    <>
      <Navbar user='user' />
      <div className={classes.root}>
        <MHidden width='smDown'>
          <Drawer
            className={classes.drawer}
            variant='persistent'
            onClose={toggleSideBar}
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawerContent}
          </Drawer>
        </MHidden>
        <MHidden width='mdUp'>
          <SideMenu onOpenSidebar={toggleSideBar} open={open} />
          <Drawer
            className={classes.drawer}
            onClose={toggleSideBar}
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            {drawerContent}
          </Drawer>
        </MHidden>

        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <Box mt={2} mb={3}>
            <Typography variant='h5'>My Auctions</Typography>
          </Box>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default DrawerLayout;
