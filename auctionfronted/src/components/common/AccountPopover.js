import { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { alpha } from '@material-ui/core/styles';
import {
  Button,
  Box,
  Divider,
  Typography,
  Avatar,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import MenuPopover from './MenuPopover';
// import { useAuth } from 'Context/AuthContext';
import { toast } from 'react-toastify';
// import { AuthContext } from 'contexts/AuthContext';
import userImg from 'assets/user.jpg';

const styles = makeStyles((theme) => ({
  iconButton: {
    '& .MuiIconButton-root': {
      padding: 0,
    },
  },
}));

const user = {
  fullName: 'Ali Hamza',
  email: 'ali12@gmail.com',
  photo: userImg,
};

export default function AccountPopover() {
  const classes = styles();
  // const { user, logoutUser } = useContext(AuthContext);
  const anchorRef = useRef(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    // logoutUser();
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
          <Avatar src={user.photo} alt='User' />
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
            {user.email.toUpperCase()}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Link to='/profile'>
            <Typography variant='body1' color='textPrimary' noWrap>
              Account
            </Typography>
          </Link>
        </Box>
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Link to='/leaderboard'>
            <Typography variant='body1' color='textPrimary' noWrap>
              Leaderboard
            </Typography>
          </Link>
        </Box>

        <Box>
          <Button fullWidth color='primary' onClick={handleLogout}>
            Logout
          </Button>
        </Box>
        {error !== null &&
          toast.error(error, {
            position: toast.POSITION.TOP_CENTER,
          })}
      </MenuPopover>
    </>
  );
}
