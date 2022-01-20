import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink, Outlet } from 'react-router-dom';
import { Box } from '@material-ui/core';
import SideMenu from './SideMenu';
import MHidden from './MHidden';
import SpeakerNotesOffIcon from '@material-ui/icons/SpeakerNotesOff';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import useStyles from 'styles/DrawerStyles';
import { HourglassEmpty, Pause, Public } from '@material-ui/icons';
import { useGaTracker } from 'hooks';

const drawerList = [
  {
    id: 12,
    title: 'Watch List',
    link: 'watchlist',
    icon: <SpeakerNotesOffIcon />,
  },
  {
    id: 13125,
    title: 'Published ',
    link: 'published',
    icon: <Public />,
  },
  {
    id: 123125,
    title: 'Unpublished ',
    link: 'unpublished',
    icon: <Pause />,
  },
  {
    id: 1123,
    title: 'Unclaimed Bid',
    link: 'unclaimed',
    icon: <HourglassEmpty />,
  },
  {
    id: 12314,
    title: 'Completed auctions ',
    link: 'completed',
    icon: <AssignmentTurnedInIcon />,
  },
];

const DrawerLayout = () => {
  useGaTracker();
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
          <React.Fragment key={item.id}>
            <NavLink to={`/myauctions/${item.link}`}>
              <ListItem button key={item.id}>
                <ListItemIcon style={{ minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            </NavLink>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </>
  );

  return (
    <>
      <div className={classes.root}>
        <MHidden width='xsDown'>
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
        <MHidden width='smUp'>
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
    </>
  );
};

export default DrawerLayout;
