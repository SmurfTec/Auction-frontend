import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import bgImg from 'assets/contact_bg.jpg';
import useManyInputs from 'hooks/useManyInputs';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import axios from 'axios';
import { API_BASE_URL, handleCatch } from 'utils/makeReq';
import { toast } from 'react-toastify';

const styles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    backgroundImage: `url(${bgImg})`,
    marginBottom: '-2.4rem',
  },
  innerCont: {
    width: '100%',
    paddingInline: '3rem',
    paddingBlock: '4rem',
  },
  contactMain: {
    paddingBlock: '3rem',
    paddingInline: '2rem',

    position: 'relative',
  },

  formDiv: {
    backgroundColor: '#fff',
    padding: '2rem',
    margin: '0 auto',
    boxShadow: '0 0 25px rgb(0 0 0 / 10%)',
    WebkitBoxShadow: '0 0 25px rgb(0 0 0 / 10%)',
    borderRadius: 10,
    width: '100%',

    [theme.breakpoints.up('md')]: {
      // float: 'right',
      width: '90%',
      maxWidth: 1000,
      paddingLeft: '7rem',
    },
  },
}));

const ContactUs = () => {
  const classes = styles();

  const initialState = {
    name: '',
    email: '',
    message: '',
  };

  const [
    inputState,
    handleTxtChange,
    handleToggleChange,
    changeInput,
    resetState,
    setInputstate,
  ] = useManyInputs(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${API_BASE_URL}/users/contact`,
        { ...inputState },
        'POST'
      );
      toast.success('Your Response has been recorded!');
      resetState();
    } catch (err) {
      handleCatch(err);
    }
  };

  return (
    <>
      <section className={classes.container}>
        <div className={classes.innerCont}>
          <Box my={2}>
            <Typography variant='h4' align='center'>
              Contact Us
            </Typography>
          </Box>

          <div className={classes.contactMain}>
            <div className={classes.formDiv}>
              <Typography variant='h5' fullWidth>
                Get in Touch
              </Typography>
              <Box mb={3}>
                <Typography variant='body1' color='textSecondary' fullWidth>
                  Feel free to drop us a line below!
                </Typography>
              </Box>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name='name'
                      value={inputState.name}
                      label='Your Name'
                      onChange={handleTxtChange}
                      fullWidth
                      variant='outlined'
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name='email'
                      value={inputState.email}
                      label='Email Address'
                      onChange={handleTxtChange}
                      fullWidth
                      variant='outlined'
                      required
                      type='email'
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name='message'
                      multiline
                      rows={5}
                      variant='outlined'
                      value={inputState.message}
                      label='Your Message'
                      onChange={handleTxtChange}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Button
                      variant='contained'
                      color='primary'
                      type='submit'
                      endIcon={<ArrowRightAltIcon />}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
            {/* <Box width='100%'>
            <div className={classes.contactInfo}></div>
          </Box> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
