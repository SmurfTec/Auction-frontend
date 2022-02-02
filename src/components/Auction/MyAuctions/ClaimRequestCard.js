import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Avatar, Paper, Typography } from '@material-ui/core';
import { UserSocialLinks } from './UserSocialLinks';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 350,
    flex: 2,
    backgroundColor: theme.custom.darkFore,
    borderRight: `1px solid ${theme.custom.borders}`,
    [theme.breakpoints.up('md')]: {
      maxWidth: 350,
    },
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    alignItems: 'center',
    padding: 20,
  },
  Avatar: {
    width: 80,
    height: 80,
  },
}));

const ClaimRequestCreater = ({ user }) => {
  const classes = useStyles();

  const theme = useTheme();
  //   const maxSteps = carousel.length;
  if (!user) return <></>;
  return (
    <Paper className={classes.root}>
      <Avatar src={user.photo} alt='user photo' className={classes.Avatar} />

      <UserSocialLinks
        instagramUserName={user.instagramProfile?.username}
        twitterUserName={user.twitterProfile?.username}
      />

      <Typography variant='h5' fontWeight='normal'>
        {user.name}
      </Typography>
    </Paper>
  );
};

export default ClaimRequestCreater;
