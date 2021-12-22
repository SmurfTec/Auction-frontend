import React from 'react';
import { AppBar, Toolbar, IconButton, MenuItem, Menu } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import useStyles from 'styles/NavBarStyles';
import { Box, Button, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import AccountPopover from './AccountPopover';
import Logo from './Logo';
// import { AuthContext } from 'contexts/AuthContext';
import { NavLink } from 'react-router-dom';
import Search from 'components/common/Search';
import { Add } from '@material-ui/icons';

const Navbar = (props) => {
  const classes = useStyles();
  //   const { user } = useContext(AuthContext);
  const user = props.user;

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSwitchUser = () => {};

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className={classes.MobileMenu}
    >
      {user ? (
        <>
          <MenuItem>
            <AccountPopover />
          </MenuItem>
          <MenuItem>{/* <Search /> */}</MenuItem>
          <MenuItem>
            <Typography variant='subtitle2' className={classes.NavItem}>
              <NavLink to='/auction/create'>Create Auction</NavLink>
            </Typography>
          </MenuItem>

          <MenuItem>
            <Typography variant='subtitle2' className={classes.NavItem}>
              <NavLink to='/myauctions'>My Auctions</NavLink>
            </Typography>
          </MenuItem>
        </>
      ) : (
        <MenuItem>
          <Button
            variant='contained'
            className={classes.RegisterBtn}
            onClick={() => navigate('/login')}
          >
            Login / Register
          </Button>
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <div className={`${classes.root}`}>
      <AppBar position='fixed' className={classes.Appbar}>
        <Toolbar>
          <Box display='flex' sx={{ alignItems: 'center', columnGap: 30 }}>
            <Logo variant={'h4'} color='textPrimary' />
            <Search />
          </Box>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginInline: 'auto',
            }}
            className={classes.SearchBar}
          />
          <div className={classes.sectionDesktop}>
            <Box
              display='flex'
              justifyContent='space-around'
              alignItems='center'
              sx={{ marginLeft: 'auto' }}
            >
              {user ? (
                <>
                  <Box
                    display='flex'
                    justifyContent='space-around'
                    sx={{
                      marginInline: 20,
                      columnGap: 25,
                      alignItems: 'end',
                    }}
                  >
                    <Typography variant='subtitle2' className={classes.NavItem}>
                      <NavLink to='/auction/create'>Create Auction</NavLink>
                    </Typography>
                    <Typography variant='subtitle2' className={classes.NavItem}>
                      <NavLink to='/myauctions'>My Auctions</NavLink>
                    </Typography>
                  </Box>
                  <AccountPopover />
                </>
              ) : (
                <>
                  <Box
                    display='flex'
                    justifyContent='space-around'
                    maxWidth='400px'
                    minWidth='200px'
                    gridColumnGap='20px'
                  >
                    <Button
                      variant='outlined'
                      style={{
                        minWidth: 100,
                      }}
                      onClick={() => navigate('/login')}
                    >
                      Login
                    </Button>
                    <Button
                      variant='contained'
                      className={classes.RegisterBtn}
                      style={{
                        minWidth: 100,
                      }}
                      onClick={() => navigate('/register')}
                    >
                      Register
                    </Button>
                  </Box>
                </>
              )}
            </Box>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              style={{
                marginLeft: 'auto',
                color: '#000',
              }}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <Box paddingTop={'64px'}> </Box>
    </div>
  );
};
export default Navbar;
