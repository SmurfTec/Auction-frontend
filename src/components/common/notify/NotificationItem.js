import PropTypes from 'prop-types';
import { noCase } from 'change-case';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
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
  Button,
  Icon,
  ListItem,
} from '@material-ui/core';
import { AccessTime, FlightTakeoff } from '@material-ui/icons';

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
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    navigate(notification.link);
  };

  return (
    <ListItem
      component={Button}
      onClick={handleNotificationClick}
      // href={notification.link}
      disableGutters
      sx={{
        py: 1.5,
        px: 2.5,
        mt: '1px',
        ...(!notification.isRead && {
          bgcolor: 'action.selected',
        }),
      }}
    >
      <ListItemAvatar style={{ marginLeft: '1rem' }}>
        <Avatar
          // className={classes.}
          style={{ bgcolor: 'aliceblue' }}
        >
          <FlightTakeoff style={{ color: theme.palette.primary.main }} />
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
              component={Icon}
              icon={AccessTime}
              sx={{ mr: 0.5, width: 16, height: 16 }}
            />
            {formatDistanceToNow(new Date(notification.createdAt))}
          </Typography>
        }
      />
    </ListItem>
  );
};

NotificationItem.propTypes = {
  notification: PropTypes.object.isRequired,
};

export default NotificationItem;
