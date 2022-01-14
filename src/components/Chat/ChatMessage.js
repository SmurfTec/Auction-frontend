import React from 'react';
import {
  Avatar,
  Box,
  Grid,
  ListItem,
  ListItemIcon,
  Typography,
  Button,
  ListItemText,
  Tooltip,
} from '@material-ui/core';
import clsx from 'clsx';

const ChatMessage = ({ classes, user, isMyMsg, message }) => {
  const msgTime = new Date(message.createdAt).toLocaleString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  let msgDate = new Date(message.createdAt).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
  });

  return (
    <ListItem component={Box} className={classes.messageBox}>
      {isMyMsg(message) === false && (
        <ListItemIcon>
          <Avatar
            alt={user?.fullName}
            src={`https://ui-avatars.com/api/?rounded=true&name=${message.sender.fullName
              ?.split(' ')
              .join('+')}`}
            style={{
              height: 35,
              width: 35,
            }}
          />
        </ListItemIcon>
      )}
      <Grid
        container
        className={clsx({
          // classes.drawer is applied always
          [classes.message]: !message.isOffer || message.isOffer === false, // classes.drawerOpen is applied always, bool = true
          [classes.agreementMessage]: message.isOffer === true, // classes.drawerOpen is applied always, bool = true
          [classes.myMessage]: isMyMsg(message) === true, // classes.drawerOpen is applied always, bool = true
          [classes.otherMessage]: isMyMsg(message) === false, // you can also use boolean variable
        })}
      >
        {isMyMsg(message) === true ? (
          message.isOffer && message.offer ? (
            <Grid item xs={12}>
              <Typography
              // style={{
              //   fontSize: 18,
              // }}
              >
                Here's your custom Offer
              </Typography>
              <Tooltip title={`${msgDate}, ${msgTime}`}>
                <Box className={classes.Agreement}>
                  <Box className={classes.AgreementHeader}>
                    <Typography variant='subtitle1' fontWeight='bold'>
                      {message.offer.description}
                    </Typography>
                    <Typography
                      variant='h3'
                      style={{
                        minWidth: 'fit-content',
                      }}
                    >
                      $ {message.offer.budget}
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: 10,
                    }}
                  >
                    <Typography
                      // variant='h6'
                      component='span'
                      style={{
                        color:
                          message.offer.status === 'pending'
                            ? 'orange'
                            : message.offer.status === 'accepted'
                            ? 'green'
                            : 'red',
                        textTransform: 'Capitalize',
                      }}
                    >
                      <b>{message.offer.status}</b>
                    </Typography>
                  </Box>
                </Box>
              </Tooltip>

              <div className={`${classes.messageTime} ${classes.myTime}`}>
                {/* <ListItemText secondary={`${msgDate}, ${msgTime}`} /> */}
                <ListItemText secondary={`${msgTime.split(' ')[0]}`} />
              </div>
            </Grid>
          ) : (
            <>
              <Grid item xs={12}>
                <Tooltip title={`${msgDate}, ${msgTime}`}>
                  <ListItemText align={'right'} primary={message.text} />
                </Tooltip>
              </Grid>
              <div className={`${classes.messageTime} ${classes.myTime}`}>
                {/* <ListItemText secondary={`${msgDate}, ${msgTime}`} /> */}
                <ListItemText secondary={`${msgTime.split(' ')[0]}`} />
              </div>
            </>
          )
        ) : (
          <>
            <Grid item xs={12}>
              <Tooltip title={`${msgDate}, ${msgTime}`}>
                <ListItemText align={'left'} primary={`${message.text}`} />
              </Tooltip>
            </Grid>
            <div className={`${classes.messageTime} ${classes.otherTime}`}>
              <ListItemText secondary={`${msgTime.split(' ')[0]}`} />
            </div>
          </>
        )}
      </Grid>
    </ListItem>
  );
};

export default ChatMessage;
