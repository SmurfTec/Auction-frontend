import React, { useContext, useMemo } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';
import { Box, Button, Typography } from '@material-ui/core';
import { useLocation, useNavigate } from 'react-router-dom';
import AccountPopover from './AccountPopover';
import Logo from './Logo';
import { AuthContext } from 'contexts/AuthContext';
import { NavLink } from 'react-router-dom';
import Search from 'components/common/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MHidden from 'components/layouts/DrawerLayout/MHidden';
import globalStyles from 'styles/commonStyles';
import drawerStyles from 'styles/DrawerStyles';
import useStyles from 'styles/NavBarStyles';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import ViewListIcon from '@material-ui/icons/ViewList';
import ListAltIcon from '@material-ui/icons/ListAlt';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockIcon from '@material-ui/icons/Lock';
import NotificationsPopover from './notify/NotificationsPopover';
import { Telegram } from '@material-ui/icons';

const Navbar = (props) => {
  const classes = useStyles();
  const classes_g = globalStyles();
  const classes_dr = drawerStyles();
  const { user } = useContext(AuthContext);
  // console.log(`user`, user);

  const location = useLocation();

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const toggleSideBar = () => {
    setOpen((prev) => !prev);
  };

  const showSearchBar = useMemo(() => {
    // * Either location is home, leaderboard or in myAuctions , then show searchBar
    return (
      ['/', '/leaderboard'].includes(location.pathname.toLowerCase()) ||
      location.pathname.toLowerCase().includes('myauctions')
    );
  }, [location.pathname]);

  const handleChatClick = () => {
    navigate('/chat');
  };

  return (
    <div className={`${classes.root}`}>
      <AppBar position='fixed' className={classes.Appbar}>
        <Toolbar>
          <div className={`${classes_g.flexAlignDisp} ${classes.navSearch}`}>
            <Box className={classes_g.flexAlignDisp} sx={{ columnGap: 5 }}>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label='show more'
                  // aria-controls={mobileMenuId}
                  aria-haspopup='true'
                  onClick={toggleSideBar}
                  style={{
                    marginLeft: 'auto',
                    color: '#000',
                  }}
                >
                  <MenuOpenIcon fontSize='small' />
                </IconButton>
              </div>
              <Logo w={35} h={35} />
            </Box>
            {showSearchBar && <Search />}
          </div>

          <div className={classes.sectionDesktop}>
            <Box
              display='flex'
              justifyContent='space-around'
              sx={{
                marginLeft: 'auto',
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              {user ? (
                <>
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    sx={{
                      marginLeft: 20,
                      columnGap: 15,
                      alignItems: 'center',
                    }}
                    className={classes_g.linkLabel}
                  >
                    <Typography variant='subtitle2'>
                      <NavLink to='/leaderboard'>Leaderboard</NavLink>
                    </Typography>
                    <Typography variant='subtitle2' noWrap>
                      <NavLink to='/createAuction'>Create Auction</NavLink>
                    </Typography>
                    <MHidden width='smDown'>
                      <Typography variant='subtitle2'>
                        <NavLink to='/myauctions/watchlist'>
                          My Auctions
                        </NavLink>
                      </Typography>
                    </MHidden>

                    <IconButton
                      onClick={handleChatClick}
                      style={{ marginInline: -15 }}
                    >
                      <Telegram fontSize='small' color='primary' />
                    </IconButton>
                    <NotificationsPopover />
                    {/* <IconButton aria-label='delete'>
                      <NotificationsIcon fontSize='small' color='primary' />
                    </IconButton> */}
                  </Box>
                  <AccountPopover />
                </>
              ) : (
                <>
                  <Box
                    display='flex'
                    // justifyContent='space-between'
                    maxWidth='400px'
                    minWidth='200px'
                    gridColumnGap='20px'
                    sx={{ columnGap: 10 }}
                    className={classes_g.linkLabel}
                  >
                    <Typography variant='subtitle2' noWrap>
                      <NavLink to='/leaderboard'>Leaderboard</NavLink>
                    </Typography>
                    <Button
                      variant='outlined'
                      color='primary'
                      size='small'
                      style={{
                        minWidth: 80,
                      }}
                      onClick={() => navigate('/login')}
                    >
                      LOGIN
                    </Button>
                    <Button
                      variant='contained'
                      color='primary'
                      // className={classes.RegisterBtn}
                      size='small'
                      style={{
                        minWidth: 80,
                      }}
                      onClick={() => navigate('/register')}
                    >
                      JOIN
                    </Button>
                  </Box>
                </>
              )}
            </Box>
          </div>
          <div className={classes.sectionMobile}>
            {user && (
              <>
                <IconButton aria-label='delete'>
                  <NotificationsIcon fontSize='small' />
                </IconButton>
                <AccountPopover />
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>

      <Box paddingTop={'64px'} />

      <Drawer
        anchor='left'
        className={classes.drawer}
        onClose={toggleSideBar}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes_dr.drawerHeader}>
          <Logo w={35} h={35} />

          <IconButton onClick={toggleSideBar}>
            <NavigateBeforeIcon />
          </IconButton>
        </div>

        <Box mt={4} />

        <List className={classes_dr.list}>
          <NavLink to='/'>
            <ListItem button>
              <ListItemIcon style={{ minWidth: 40 }}>
                <HomeIcon />
              </ListItemIcon>
              <Typography variant='subtitle1'>Home</Typography>
            </ListItem>
          </NavLink>
          <NavLink to='/leaderboard'>
            <ListItem>
              <ListItemIcon style={{ minWidth: 40 }}>
                <ListAltIcon />
              </ListItemIcon>
              <Typography variant='subtitle2'>Leaderboard</Typography>
            </ListItem>
          </NavLink>
          <NavLink to='/createauction'>
            <ListItem>
              <ListItemIcon style={{ minWidth: 40 }}>
                <NoteAddIcon />
              </ListItemIcon>
              <Typography variant='subtitle2'>Create Auction</Typography>
            </ListItem>
          </NavLink>
          {user && (
            <NavLink to='/myauctions/watchlist'>
              <ListItem>
                <ListItemIcon style={{ minWidth: 40 }}>
                  <ViewListIcon />
                </ListItemIcon>
                <Typography variant='subtitle2'>My Auctions</Typography>
              </ListItem>
            </NavLink>
          )}
        </List>

        <Box my={3}>
          <Divider />
        </Box>

        {!user && (
          <List className={classes.list}>
            <NavLink to='/login'>
              <ListItem>
                <ListItemIcon style={{ minWidth: 40 }}>
                  <ExitToAppIcon />
                </ListItemIcon>
                <Typography variant='subtitle2'>Login</Typography>
              </ListItem>
            </NavLink>
            <NavLink to='/register'>
              <ListItem>
                <ListItemIcon style={{ minWidth: 40 }}>
                  <LockIcon />
                </ListItemIcon>
                <Typography variant='subtitle2'>Join</Typography>
              </ListItem>
            </NavLink>
          </List>
        )}
      </Drawer>
    </div>
  );
};
export default Navbar;
