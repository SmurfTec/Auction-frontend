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
  IconButton,
} from '@material-ui/core';
import React, { useEffect, useContext } from 'react';

import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import useManyInputs from 'hooks/useManyInputs';
import { getMuiDateFormat } from 'utils/common';
import { Link, useNavigate } from 'react-router-dom';
import styles from 'styles/AccountStyles';
import { AuthContext } from 'contexts/AuthContext';
import { makeReq, handleCatch, API_BASE_URL } from 'utils/makeReq';
import InstagramLogin from 'react-instagram-oauth';
import { useGaTracker } from 'hooks';
import { toast } from 'react-toastify';
import { AccountCircle, CameraAlt } from '@material-ui/icons';
import axios from 'axios';

const Profile = () => {
  useGaTracker();
  const classes = styles();
  const { user, updateMe, logoutUser, token } = useContext(AuthContext);
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    about: '',
    dateofBirth: getMuiDateFormat('12/20/1990'),
    phoneNumber: '',
    paymentDetails: {
      cardNumber: '',
      cvc: '',
    },
    instagramProfile: {
      userId: '',
      username: '',
      displayName: '',
      email: '',
    },
  };

  const [inputState, handleTxtChange, , changeInput, , setInputstate] =
    useManyInputs(initialState);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    } else {
      setInputstate((st) => ({
        ...st,
        ...user,
        dateofBirth: getMuiDateFormat(user.dateofBirth),
      }));
    }
  }, [user, navigate]);

  const handleChangeCardDetails = (e) => {
    changeInput('paymentDetails', {
      ...inputState.paymentDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddForm = (e) => {
    e.preventDefault();
    updateMe({ phoneNumber: inputState.phoneNumber });
    // console.log(`inputState`, inputState);
  };

  const handleProfileSave = (e) => {
    e.preventDefault();
    updateMe({
      firstName: inputState.firstName,
      lastName: inputState.lastName,
      email: inputState.email,
      dateofBirth: new Date(inputState.dateofBirth),
    });
    // console.log(`inputState`, inputState);
  };
  const updateAbout = (e) => {
    e.preventDefault();
    updateMe({
      about: inputState.about,
    });
    // console.log(`inputState`, inputState);
  };

  const handleSaveCard = (e) => {
    e.preventDefault();
    updateMe({
      paymentDetails: inputState.paymentDetails,
    });
    // console.log(`inputState`, inputState);
  };

  const handleTwitterClick = async () => {
    if (user?.twitterProfile) {
      return window.open(`https://twitter.com/${user.twitterProfile.username}`);
    }
    window.open(`${API_BASE_URL}/social/twitter?token=${token}`, '_self');

    // try {
    //   const res = await makeReq(`/social/twitter`);
    // } catch (err) {
    //   handleCatch(err);
    // } finally {
    // }
  };

  const handleInstagramClick = async () => {
    window.open(`${API_BASE_URL}/social/instagram`, '_self');

    // try {
    //   const res = await makeReq(`/social/instagram`);
    // } catch (err) {
    //   handleCatch(err);
    // } finally {
    // }
  };

  const handleInstagramForm = (e) => {
    e.preventDefault();
    updateMe({
      instagramProfile: inputState.instagramProfile,
    });
  };

  const handleInstaCallback = (err, data) => {
    console.log(`err`, err);
    console.log(`data`, data);
  };

  const handleConnectAccount = async () => {
    if (!user.isVerified)
      return toast.error('Only verified users can attach account');

    const resData = await makeReq(`/users/account-onboard`);
    window.open(resData.url.url, '_self');
  };

  const viewStripeDashboard = async () => {
    const resData = await makeReq(`/users/account-dashboard`);
    window.open(resData.url);
  };

  const handleImage = async (e, options, toggleFunc, cb) => {
    toggleFunc();
    const selectedFile = e.target.files[0];

    // * whoever calls the func, give us options in 2nd param,
    // *
    const { fileType } = options;
    try {
      if (selectedFile && selectedFile.type.includes(fileType)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = async (e) => {
          //console.log(`result onLoadEnd`, e.target.result);
          const file = e.target.result;

          // TODO  Delete Image from cloudinary if it exists on this user

          // // * 1 Upload Image on Cloudinary
          const formData = new FormData();
          formData.append('file', file);
          formData.append('folder', 'auction-app');
          formData.append(
            'upload_preset',
            process.env.REACT_APP_CLOUDINARY_PRESET
          );

          const res = await axios.post(
            `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/auto/upload`,
            formData
          );
          const uploadedImage = res.data.secure_url;

          cb(uploadedImage);
        };
      } else {
        toast.error(
          `Only ${fileType?.[0].split('/')[0]} files are acceptable !`
        );
      }
    } catch (err) {
      toast(
        err?.response?.data?.message || err.message || 'Something Went Wrong'
      );
      // console.log(`err`, err);
    } finally {
      toggleFunc();
    }
  };

  return (
    <>
      <div className={classes.root}>
        <Card
          className={`${classes.card} ${classes.showOverflow} ${classes.defaultCard}`}
        >
          <CardContent>
            <label
              htmlFor='photo'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                marginTop: '-3rem',
              }}
            >
              <div>
                <Avatar
                  alt='User'
                  variant='rounded'
                  size='large'
                  className={classes.large}
                  src={inputState.photo && inputState.photo}
                >
                  {!inputState.photo && (
                    <AccountCircle className={classes.large} />
                  )}
                </Avatar>
              </div>

              <div>
                <CameraAlt />
              </div>
            </label>
            <input
              id='photo'
              type='file'
              onChange={(e) => {
                handleImage(
                  e,
                  {
                    fileType: ['image/'],
                  },
                  () => {},
                  (img) => {
                    changeInput('photo', img);
                    updateMe({
                      photo: img,
                    });
                  }
                );
              }}
              style={{ display: 'none' }}
            />

            <div className={classes.content}>
              <Typography variant='h5'>{`${inputState.firstName} ${inputState.lastName}`}</Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                {user?.email}
                <Chip label='verified' className={classes.verfIcon} />
              </Typography>
              <Box
                mt={1}
                className={classes.displayFlex}
                sx={{ columnGap: 10 }}
              >
                {/* <Chip
                  label={0}
                  icon={<TwitterIcon />}
                  className={classes.twtIcon}
                />
                <Chip
                  label={0}
                  icon={<InstagramIcon />}
                  className={classes.insIcon}
                /> */}
              </Box>
            </div>
            <Box my={3}>
              <Divider />
            </Box>

            <form onSubmit={updateAbout}>
              <TextField
                name='about'
                value={inputState.about}
                label='Tap to add your bio'
                onChange={handleTxtChange}
                fullWidth
              />
            </form>
          </CardContent>
        </Card>
        <Card className={`${classes.card} ${classes.accountsCard} `}>
          <CardHeader title='My Twitter Account' avatar={<TwitterIcon />} />
          <CardContent className={`${classes.accountsCard}`}>
            <Box
              sx={{
                textAlign: 'center',
                maxWidth: 300,
                margin: '0 auto',
              }}
            >
              <Typography variant='subtitle2' align='center'>
                Use the button below to verify and pair your twitter account
              </Typography>
              <Box mt={2}>
                <Button
                  variant='contained'
                  className={`${classes.twtIcon} ${classes.twitterHover}`}
                  onClick={handleTwitterClick}
                >
                  {user?.twitterProfile?.username || 'Connect Twitter Account'}
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
                Enter Your Instagram Username
              </Typography>
              <form onSubmit={handleInstagramForm} id='instagram'>
                <TextField
                  name='instagramProfile'
                  value={inputState.instagramProfile.username}
                  label='Username'
                  onChange={(e) =>
                    setInputstate((st) => ({
                      ...st,
                      instagramProfile: {
                        ...st.instagramProfile,
                        username: e.target.value,
                      },
                    }))
                  }
                  fullWidth
                  required
                  type='string'
                />
              </form>{' '}
              {/* <Box mt={2}>
                <Button
                  variant='contained'
                  className={`${classes.insIcon} ${classes.instaHover}`}
                  onClick={handleInstagramClick}
                >
                  Connect Instagram Account
                </Button>
                <InstagramLogin
                  authCallback={handleInstaCallback}
                  appId='1561091957582156'
                  appSecret='69c5334dbef99fe12f59b66c3505798e'
                  redirectUri='https://auction-api1.herokuapp.com/api/social/instagram/callback/'
                />
              </Box> */}
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
                  <form onSubmit={handleAddForm} id='phoneform'>
                    <TextField
                      name='phoneNumber'
                      value={inputState.phoneNumber}
                      label='Phone'
                      onChange={handleTxtChange}
                      fullWidth
                      required
                      type='number'
                    />
                  </form>{' '}
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
                    <Button
                      type='submit'
                      form='phoneform'
                      variant='contained'
                      color='secondary'
                    >
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
            <form id='profileform' onSubmit={handleProfileSave}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name='firstName'
                    value={inputState.firstName}
                    label='First Name'
                    onChange={handleTxtChange}
                    fullWidth
                    required
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
                    name='dateofBirth'
                    label='Date of birth'
                    type='date'
                    format='mm/dd/yyyy'
                    value={inputState.dateofBirth}
                    onChange={handleTxtChange}
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
                    required
                    fullWidth
                    type='email'
                  />
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Box mt={2} sx={{ textAlign: 'right' }}>
                    <Button type='submit' variant='contained' color='secondary'>
                      Save
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
        <Card className={`${classes.card} ${classes.defaultCard}`}>
          <CardHeader title='My Payment Settings' avatar />
          <CardContent
            className={`${classes.defaultCard}`}
            style={{ textAlign: 'center' }}
          >
            {/* <Box sx={{ textAlign: 'center', maxWidth: 300, margin: '0 auto' }}> */}
            {!user.stripeAccount?.id ? (
              <Button
                onClick={handleConnectAccount}
                variant='contained'
                className={`${classes.twtIcon} ${classes.twitterHover}`}
                color='secondary'
              >
                Connect Stripe
              </Button>
            ) : (
              <Button
                onClick={viewStripeDashboard}
                variant='contained'
                className={`${classes.twtIcon} ${classes.twitterHover}`}
                color='secondary'
              >
                Stripe Dashboard
              </Button>
            )}
            {/* <Typography variant='subtitle2'>Credit or Debit Card</Typography> */}
            <Box mt={2}>
              {/* <form onSubmit={handleSaveCard} id='cardform'>
                <Grid container spacing={2}>
                  <Grid item xs={10} sm={5}>
                    <TextField
                      name='cardNumber'
                      value={inputState.paymentDetails.cardNumber}
                      label='Card Number'
                      onChange={handleChangeCardDetails}
                      fullWidth
                      size='small'
                      type='number'
                      variant='outlined'
                      required
                    />
                  </Grid>
                  <Grid item xs={2} sm={2}>
                    <TextField
                      name='cvc'
                      value={inputState.paymentDetails.cvc}
                      label='CVC'
                      onChange={handleChangeCardDetails}
                      fullWidth
                      variant='outlined'
                      type='number'
                      size='small'
                      required
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
                      <Button
                        type='submit'
                        variant='contained'
                        color='secondary'
                      >
                        Save Card
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form> */}
            </Box>
            {/* </Box> */}
          </CardContent>
        </Card>
        <Link to='#' mt={3} onClick={logoutUser}>
          <Typography style={{ marginTop: '1rem' }} variant='subtitle2'>
            Log out
          </Typography>
        </Link>
      </div>
    </>
  );
};

export default Profile;
