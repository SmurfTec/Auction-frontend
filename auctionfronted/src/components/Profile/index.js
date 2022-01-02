import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  TextField,
  Typography,
  CardContent,
  CardHeader,
  Card,
  Grid,
} from '@material-ui/core';
import React, { useEffect, useContext } from 'react';

import userImg from 'assets/user.jpg';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import useManyInputs from 'hooks/useManyInputs';
import { getMuiDateFormat } from 'utils/common';
import { Link, useNavigate } from 'react-router-dom';
import styles from 'styles/AccountStyles';
import { AuthContext } from 'contexts/AuthContext';

const Profile = () => {
  const classes = styles();
  const { user } = useContext(AuthContext);
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
    dateOfBirth: getMuiDateFormat('12/20/1990'),
    phone: '',
    cardNumber: '',
    cvc: '',
  };

  const [
    inputState,
    handleTxtChange,
    handleToggleChange,
    changeInput,
    resetState,
    setInputstate,
  ] = useManyInputs(initialState);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    } else {
      setInputstate((st) => ({ ...st, ...user }));
    }
  }, [user, navigate]);
  return (
    <>
      <div className={classes.root}>
        {/* <Paper className={classes.paper}>
          <div className={classes.profileImg}>
            <Avatar
              src={userImg}
              alt='User'
              size='large'
              className={classes.large}
            />
          </div>
          <div className={classes.content}>
            <Typography variant='h5'>{`${user.fname} ${user.lname}`}</Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              {user.email}
            </Typography>
            <Box mt={1} className={classes.displayFlex} sx={{ columnGap: 10 }}>
              <Chip
                label={0}
                icon={<TwitterIcon />}
                className={classes.twtIcon}
              />
              <Chip
                label={0}
                icon={<InstagramIcon />}
                className={classes.insIcon}
              />
            </Box>
          </div>

          <Box my={3}>
            <Divider />
          </Box>

          <TextField
            name='bio'
            value={inputState.bio}
            label='Tap to add your bio'
            onChange={handleTxtChange}
            fullWidth
          />
        </Paper> */}

        <Card
          className={`${classes.card} ${classes.showOverflow} ${classes.defaultCard}`}
        >
          <CardContent>
            <div className={classes.profileImg}>
              <Avatar
                src={userImg}
                alt='User'
                size='large'
                className={classes.large}
              />
            </div>

            <div className={classes.content}>
              <Typography variant='h5'>{`${inputState.firstName} ${inputState.lastName}`}</Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                {user.email}
                <Chip label='verified' className={classes.verfIcon} />
              </Typography>
              <Box
                mt={1}
                className={classes.displayFlex}
                sx={{ columnGap: 10 }}
              >
                <Chip
                  label={0}
                  icon={<TwitterIcon />}
                  className={classes.twtIcon}
                />
                <Chip
                  label={0}
                  icon={<InstagramIcon />}
                  className={classes.insIcon}
                />
              </Box>
            </div>
            <Box my={3}>
              <Divider />
            </Box>

            <TextField
              name='bio'
              value={inputState.bio}
              label='Tap to add your bio'
              onChange={handleTxtChange}
              fullWidth
            />
          </CardContent>
        </Card>
        <Card className={`${classes.card} ${classes.accountsCard} `}>
          <CardHeader title='My Twitter Account' avatar={<TwitterIcon />} />
          <CardContent className={`${classes.accountsCard}`}>
            <Box sx={{ textAlign: 'center', maxWidth: 300, margin: '0 auto' }}>
              <Typography variant='subtitle2' align='center'>
                Use the button below to verify and pair your twitter account
              </Typography>
              <Box mt={2}>
                <Button
                  variant='contained'
                  className={`${classes.twtIcon} ${classes.twitterHover}`}
                >
                  Connect Twitter Account
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card className={`${classes.card} ${classes.accountsCard}`}>
          <CardHeader title='My Instagram Account' avatar={<InstagramIcon />} />
          <CardContent className={`${classes.accountsCard}`}>
            <Box
              sx={{
                textAlign: 'center',
                maxWidth: 300,
                margin: '0 auto',
              }}
            >
              <Typography variant='subtitle2' align='center'>
                Use the button below to verify and pair your instagram account
              </Typography>
              <Box mt={2}>
                <Button
                  variant='contained'
                  className={`${classes.insIcon} ${classes.instaHover}`}
                >
                  Connect Instagram Account
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card className={`${classes.card} ${classes.defaultCard}`}>
          <CardHeader title='Phone Number' avatar />
          <CardContent className={`${classes.defaultCard}`}>
            {/* <Box sx={{ textAlign: 'center', maxWidth: 300, margin: '0 auto' }}> */}
            <Typography variant='subtitle2'>
              Add your phone number to receive various updates
            </Typography>
            <Box mt={2}>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name='phone'
                    value={inputState.phone}
                    label='Phone'
                    onChange={handleTxtChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    display='flex'
                    style={{
                      height: '100%',
                      justifyContent: 'end',
                      alignItems: 'end',
                    }}
                  >
                    <Button variant='contained' color='secondary'>
                      Add Phone
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            {/* </Box> */}
          </CardContent>
        </Card>
        <Card className={`${classes.card} ${classes.defaultCard}`}>
          <CardHeader title='My Personal Information' avatar />
          <CardContent className={`${classes.defaultCard}`}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='firstName'
                  value={inputState.firstName}
                  label='First Name'
                  onChange={handleTxtChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='lastName'
                  value={inputState.lastName}
                  label='Last Name'
                  onChange={handleTxtChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='dateOfBirth'
                  label='Date of birth'
                  type='date'
                  format='mm/dd/yyyy'
                  value={inputState.dateOfBirth}
                  className={classes.textField}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='email'
                  value={inputState.email}
                  label='Email'
                  onChange={handleTxtChange}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <Box mt={2} sx={{ textAlign: 'right' }}>
                  <Button variant='contained' color='secondary'>
                    Save
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card className={`${classes.card} ${classes.defaultCard}`}>
          <CardHeader title='My Payment Settings' avatar />
          <CardContent className={`${classes.defaultCard}`}>
            {/* <Box sx={{ textAlign: 'center', maxWidth: 300, margin: '0 auto' }}> */}
            <Typography variant='subtitle2'>Credit or Debit Card</Typography>
            <Box mt={2}>
              <Grid container spacing={2}>
                <Grid item xs={10} sm={5}>
                  <TextField
                    name='cardNumber'
                    value={inputState.cardNumber}
                    label='Card Number'
                    onChange={handleTxtChange}
                    fullWidth
                    size='small'
                    type='number'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={2} sm={2}>
                  <TextField
                    name='cvc'
                    value={inputState.cvc}
                    label='CVC'
                    onChange={handleTxtChange}
                    fullWidth
                    variant='outlined'
                    type='number'
                    size='small'
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Box
                    display='flex'
                    style={{
                      height: '100%',
                      justifyContent: 'end',
                      alignItems: 'end',
                    }}
                  >
                    <Button variant='contained' color='secondary'>
                      Save Card
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            {/* </Box> */}
          </CardContent>
        </Card>
        <Link to='/logout'>
          <Box mt={3}>
            <Typography variant='subtitle2'>Log out</Typography>
          </Box>
        </Link>
      </div>
    </>
  );
};

export default Profile;
