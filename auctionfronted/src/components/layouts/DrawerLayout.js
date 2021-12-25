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
import { Box } from '@material-ui/core';

const drawerWidth = 200;

const drawerList = [
  {
    id: 122,
    title: 'Watch List',
    link: '',
  },
  {
    id: 123,
    title: 'Unclaimed Bid',
    link: 'unclaimed',
  },
  {
    id: 124,
    title: 'Previous completed auctions ',
    link: 'previous',
  },
  {
    id: 125,
    title: 'Unpublished ',
    link: 'unpublished',
  },
];

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
    height: '100vh',
  },
  drawerPaper: {
    width: drawerWidth,
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
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
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
        color: 'red',
      },
    },
  },
}));

const DrawerLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {/* <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider /> */}
          <List className={classes.list}>
            {drawerList.map((item) => (
              <ListItem button key={item.id}>
                <NavLink to={`/myauctions/${item.link}`}>
                  <ListItemText primary={item.title} />
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Drawer>
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
    </>
  );
};

export default DrawerLayout;
