import PropTypes from 'prop-types';
import { noCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
// import { Icon } from '@iconify/react';
// import clockFill from '@iconify/icons-eva/clock-fill';
// import doneAllFill from '@iconify/icons-eva/done-all-fill';

// material
import { useTheme } from '@material-ui/core/styles';
import {
  Box,
  Avatar,
  Typography,
  ListItemText,
  ListItemAvatar,
} from '@material-ui/core';
// utils
// components
// import { SocketContext } from 'Contexts/SocketContext';

const renderContent = (notification) => {
  const title = (
    <Typography variant='subtitle2'>
      {notification.title}
      <Typography
        component='span'
        variant='body2'
        sx={{ color: 'text.secondary' }}
      >
        &nbsp; {noCase(notification.description)}
      </Typography>
    </Typography>
  );

  if (notification.type === 'trip') {
    return {
      title,
    };
  }
  if (notification.type === 'order') {
    return {
      title,
    };
  }

  return {
    title,
  };
};

const NotificationItem = ({ notification }) => {
  const { title } = renderContent(notification);
  const theme = useTheme();

  return (
    <Box
      to={notification.link}
      disableGutters
      component={RouterLink}
      sx={{
        py: 1.5,
        px: 2.5,
        mt: '1px',
        ...(!notification.isRead && {
          bgcolor: 'action.selected',
        }),
      }}
    >
      <ListItemAvatar>
        <Avatar
          // className={classes.}
          sx={{ bgcolor: 'aliceblue' }}
        >
          {/* {notification.type === 'trip' ? (
            <FlightTakeoffIcon style={{ color: theme.palette.primary.main }} />
          ) : (
            <ShoppingBagOutlined
              style={{ color: theme.palette.primary.main }}
            />
          )} */}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant='caption'
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center',
              color: 'text.disabled',
            }}
          >
            <Box
              // component={Icon}
              // icon={clockFill}
              sx={{ mr: 0.5, width: 16, height: 16 }}
            />
            {formatDistanceToNow(new Date(notification.createdAt))}
          </Typography>
        }
      />
    </Box>
  );
};

NotificationItem.propTypes = {
  notification: PropTypes.object.isRequired,
};

export default NotificationItem;
