import React, { useContext, useEffect, useState } from 'react';
import {
  Button,
  Grid,
  Typography,
  CircularProgress,
  TextField,
} from '@material-ui/core';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import useManyInputs from 'hooks/useManyInputs';
import globalStyles from 'styles/commonStyles';
import { useStyles as formStyles } from 'styles/FormLayoutStyles';
import { AuthContext } from 'contexts/AuthContext';
import { API_BASE_URL, handleCatch } from 'utils/makeReq';
import axios from 'axios';
import { useGaTracker } from 'hooks';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  useGaTracker();
  const { isLoggedIn, signInUser } = useContext(AuthContext);
  const classes = globalStyles();
  const formClasses = formStyles();

  const navigate = useNavigate();
  const location = useLocation();

  const initialState = {
    email: '',
    password: '',
  };

  const [
    inputState,
    handleTxtChange,
    ,
    ,
    resetState,
    // setInputstate,
  ] = useManyInputs(initialState);

  const [loading, setLoading] = useState(false);

  let redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (isLoggedIn) {
      // console.log(`userr`, isLoggedIn);
      navigate(redirect || '/');
    }
  }, [isLoggedIn, navigate, redirect]);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${API_BASE_URL}/auth//forgot-password`, {
        ...inputState,
      });
      // console.log(`res`, res);

      toast.success(res.data.message);
      resetState();
    } catch (error) {
      handleCatch(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={formClasses.mainContainer}>
      <div className={formClasses.formSelection}>
        <NavLink to='/login'>
          <Typography variant='subtitle1' color='textPrimary'>
            LOGIN
          </Typography>
        </NavLink>
        <NavLink to='/register'>
          <Typography variant='subtitle1' color='textPrimary'>
            JOIN
          </Typography>
        </NavLink>
      </div>
      <div className={formClasses.formContent}>
        <Typography
          vaiant='subtitle2'
          sx={{ color: 'textSecondary' }}
          gutterBottom
          align='center'
        >
          Welcome Back
        </Typography>
        <form onSubmit={onFormSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                name='email'
                value={inputState.email}
                label='Email'
                type='email'
                onChange={handleTxtChange}
                variant='outlined'
                fullWidth
                size='small'
                InputProps={{ required: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={20} color='inherit' />
                ) : (
                  'Reset Password'
                )}
              </Button>
            </Grid>
          </Grid>
        </form>

        <Grid item xs={6} sm={12}>
          <Box
            mt={2}
            className={classes.textWithlink}
            sx={{
              columnGap: 4,
              height: '100%',
              justifyContent: 'center',
            }}
          >
            <Typography variant='body1'>
              Not a member?{` `}
              <Link to='/register'>Join </Link>
            </Typography>
          </Box>
        </Grid>
      </div>
    </div>
  );
};

export default ForgotPassword;
