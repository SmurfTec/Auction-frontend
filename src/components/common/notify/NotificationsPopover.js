import { useContext, useEffect, useMemo, useRef, useState } from 'react';
// import { Icon } from '@iconify/react';
// import clockFill from '@iconify/icons-eva/clock-fill';
// import doneAllFill from '@iconify/icons-eva/done-all-fill';

// material
import { alpha } from '@material-ui/core/styles';
import {
  Box,
  List,
  Badge,
  Tooltip,
  Divider,
  IconButton,
  Typography,
  ListSubheader,
} from '@material-ui/core';
// utils
// components
import Scrollbar from './Scrollbar';
import MenuPopover from './MenuPopover';
// import { SocketContext } from 'Contexts/SocketContext';
// import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { makeStyles } from '@material-ui/styles';
import { AuthContext } from 'contexts/AuthContext';

import NotificationItem from './NotificationItem';

const useStyles = makeStyles((theme) => ({
  badge: {
    '& .MuiBadge-badge': {
      borderRadius: '50%',
      height: 20,
      width: 20,
      color: '#fff !important',
    },
  },
  root: {
    '& .MuiPopover-paper': {
      overflowY: 'hidden',
    },
  },
}));

const NotificationsPopover = () => {
  const classes = useStyles();

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { user, makeNotficationsAsRead } = useContext(AuthContext);
  const [localNotifications, setLocalNotifications] = useState([]);
  const totalUnRead = useMemo(() => {
    let unread = localNotifications.filter(
      (item) => item.isRead === false
    ).length;

    console.log(`unread`, unread);
    return unread;
  }, [localNotifications]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log(`user?.notifications`, user?.notifications);
    if (!user?.notifications) return;
    setLocalNotifications(user?.notifications);
  }, [user?.notifications]);

  const handleMarkAllAsRead = () => {
    setLocalNotifications(
      localNotifications.map((el) => ({
        ...el,
        isRead: true,
      }))
    );
    makeNotficationsAsRead();
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        size='large'
        color={open ? 'primary' : 'default'}
        onClick={handleOpen}
        sx={{
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        <Badge
          badgeContent={totalUnRead}
          className={classes.badge}
          color='primary'
        >
          {/* <Icon icon={bellFill} /> */}
          {/* <NotificationsIcon width={20} height={20} /> */}
          <NotificationsIcon fontSize='small' color='primary' />
        </Badge>
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 360 }}
        className={classes.root}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            py: 2,
            px: 2.5,
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant='subtitle1'>Notifications</Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              You have {totalUnRead} unread messages
            </Typography>
          </Box>

          {totalUnRead > 0 && (
            <Tooltip title=' Mark all as read'>
              <IconButton color='primary' onClick={handleMarkAllAsRead}>
                {/* <Icon icon={doneAllFill} width={20} height={20} /> */}
              </IconButton>
            </Tooltip>
          )}
        </Box>

        <Divider />

        <Scrollbar sx={{ height: { xs: 340, sm: 'auto' } }}>
          <List
            disablePadding
            subheader={
              <ListSubheader
                disableSticky
                sx={{ py: 1, px: 2.5, typography: 'overline' }}
              >
                New
              </ListSubheader>
            }
          >
            {localNotifications.map(
              (notification) =>
                notification.isRead === false && (
                  <NotificationItem
                    key={notification._id}
                    notification={notification}
                  />
                )
            )}
          </List>

          <List
            disablePadding
            subheader={
              <ListSubheader
                disableSticky
                sx={{ py: 1, px: 2.5, typography: 'overline' }}
              >
                Before that
              </ListSubheader>
            }
          >
            {localNotifications.map(
              (notification) =>
                notification.isRead === true && (
                  <NotificationItem
                    key={notification._id}
                    notification={notification}
                  />
                )
            )}
          </List>
        </Scrollbar>
      </MenuPopover>
    </>
  );
};

export default NotificationsPopover;
