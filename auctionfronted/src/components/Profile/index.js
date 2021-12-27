import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
  CardContent,
  CardHeader,
  Card,
  Grid,
} from '@material-ui/core';
import Navbar from 'components/common/NavBar';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import userImg from 'assets/user.jpg';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import useManyInputs from 'hooks/useManyInputs';
import { user } from 'data';
import { getMuiDateFormat } from 'utils/common';
import Footer from 'components/common/Footer';

const styles = makeStyles((theme) => ({
  profileImg: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-5rem',
    position: 'absolute',
    right: '50%',
    left: '50%',
    marginBottom: '2rem',
  },
  paper: {
    width: '90%',
    margin: '0 auto',
    marginTop: '6rem',
    padding: theme.spacing(5),
    borderRadius: 10,
    position: 'relative',

    [theme.breakpoints.up('sm')]: {
      width: '70%',
    },
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  content: {
    marginTop: '2rem',
    textAlign: 'center',
    '& .MuiChip-root': {
      paddingBlock: 5,
      paddingInline: 7,
      color: '#fff',

      '& svg': {
        color: '#fff',
      },
    },
  },
  displayFlex: {
    display: 'flex',
    justifyContent: 'center',
  },
  twtIcon: {
    backgroundColor: '#5da9dd',
    color: '#fff',
  },
  insIcon: {
    backgroundColor: '#ee653d',
    color: '#fff',
  },

  card: {
    padding: 0,
    marginTop: '3rem',
    margin: '0 auto',
    borderRadius: '15',
    '& .MuiCardContent-root': {
      paddingBottom: '2rem',
    },
    '& .MuiCardHeader-root': {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      '& .MuiTypography-displayBlock': {
        fontWeight: 600,
      },
    },
  },
}));

const Profile = () => {
  const classes = styles();
  const initialState = {
    fname: user.fname,
    lname: user.lname,
    email: user.email,
    bio: '',
    dateOfBirth: getMuiDateFormat('12/20/1990'),
    phone: user.phone,
  };

  const [
    inputState,
    handleTxtChange,
    handleToggleChange,
    changeInput,
    resetState,
    setInputstate,
  ] = useManyInputs(initialState);
  return (
    <>
      <Navbar user='user' />
      <Container>
        <Paper className={classes.paper}>
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
        </Paper>

        <Card className={`${classes.card} ${classes.paper}`}>
          <CardHeader title='My Twitter Account' />
          <CardContent>
            <Box sx={{ textAlign: 'center', maxWidth: 300, margin: '0 auto' }}>
              <Typography variant='subtitle2' align='center'>
                Use the button below to verify and pair your twitter account
              </Typography>
              <Box mt={2}>
                <Button variant='contained' className={classes.twtIcon}>
                  Connect Twitter Account
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card className={`${classes.card} ${classes.paper}`}>
          <CardHeader title='My Instagram Account' />
          <CardContent>
            <Box sx={{ textAlign: 'center', maxWidth: 300, margin: '0 auto' }}>
              <Typography variant='subtitle2' align='center'>
                Use the button below to verify and pair your instagram account
              </Typography>
              <Box mt={2}>
                <Button variant='contained' className={classes.insIcon}>
                  Connect Instagram Account
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card className={`${classes.card} ${classes.paper}`}>
          <CardHeader title='Phone Number' />
          <CardContent>
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
        <Card className={`${classes.card} ${classes.paper}`}>
          <CardHeader title='Personal Information' />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='fname'
                  value={inputState.fname}
                  label='First Name'
                  onChange={handleTxtChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='lname'
                  value={inputState.lname}
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
      </Container>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Profile;
