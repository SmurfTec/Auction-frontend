import { useContext, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { alpha } from '@material-ui/core/styles';
import {
  Box,
  Divider,
  Typography,
  Avatar,
  IconButton,
  makeStyles,
  MenuItem,
  ListItemIcon,
} from '@material-ui/core';
import MenuPopover from './MenuPopover';
import { toast } from 'react-toastify';
import { AuthContext } from 'contexts/AuthContext';
import userImg from 'assets/user.jpg';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const styles = makeStyles((theme) => ({
  iconButton: {
    '& .MuiIconButton-root': {
      padding: 0,
    },
  },
}));

export default function AccountPopover() {
  const classes = styles();
  const { user, logoutUser } = useContext(AuthContext);
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    setOpen(false);
    logoutUser();
  };
  return (
    <>
      <div className={classes.iconButton}>
        <IconButton
          ref={anchorRef}
          onClick={handleOpen}
          sx={{
            width: 44,
            height: 44,
            ...(open && {
              '&:before': {
                zIndex: 1,
                content: "''",
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
          }}
        >
          <Avatar src={user.photo || userImg} alt='User' />
        </IconButton>
      </div>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant='subtitle2' noWrap>
            {`${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}`}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <MenuItem>
          <NavLink to='/account' onClick={handleClose}>
            <Typography variant='body1' color='textPrimary' noWrap>
              Account
            </Typography>
          </NavLink>
        </MenuItem>

        <MenuItem id='logout' onClick={handleLogout}>
          <Typography variant='body1' color='textPrimary' noWrap>
            Logout
          </Typography>
          <ListItemIcon>
            <ExitToAppIcon fontSize='small' />
          </ListItemIcon>
        </MenuItem>
        {error !== null &&
          toast.error(error, {
            position: toast.POSITION.TOP_CENTER,
          })}
      </MenuPopover>
    </>
  );
}
