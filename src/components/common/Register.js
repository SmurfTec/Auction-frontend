import React, { useState, useContext, useEffect } from 'react';
import {
  Button,
  Grid,
  Typography,
  CircularProgress,
  TextField,
  Checkbox,
} from '@material-ui/core';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { Alert } from 'components/common/Alert';
import useManyInputs from 'hooks/useManyInputs';
import globalStyles from 'styles/commonStyles';
import { useStyles as formStyles } from 'styles/FormLayoutStyles';
import { AuthContext } from 'contexts/AuthContext';
import { API_BASE_URL, handleCatch } from 'utils/makeReq';
import axios from 'axios';
import { useGaTracker } from 'hooks';
import { toast } from 'react-toastify';

const Register = () => {
  useGaTracker();
  const { isLoggedIn, signInUser } = useContext(AuthContext);
  const classes = globalStyles();
  const formClasses = formStyles();

  const navigate = useNavigate();
  const location = useLocation();

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    privacy: false,
  };

  const [
    inputState,
    handleTxtChange,
    handleToggleChange,
    changeInput,
    resetState,
    setInputstate,
  ] = useManyInputs(initialState);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (isLoggedIn) {
      navigate(redirect);
    }
  }, [isLoggedIn, navigate, redirect]);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (inputState.password !== inputState.passwordConfirm) {
        return setError('Passwords do not match');
      } else {
        const res = await axios.post(`${API_BASE_URL}/auth/signup`, {
          ...inputState,
        });
        // console.log(`res`, res);

        toast.success(res.data.message);
        // signInUser(res.data.token, res.data.user);
        // resetState();
      }
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
          <Typography variant='subtitle1'>LOGIN</Typography>
        </NavLink>
        <NavLink to='/register'>
          <Typography variant='subtitle1'>JOIN</Typography>
        </NavLink>
      </div>
      <div className={formClasses.formContent}>
        <Typography
          vaiant='subtitle2'
          sx={{ color: 'textSecondary' }}
          gutterBottom
          align='center'
        >
          Become a member
        </Typography>
        <form onSubmit={onFormSubmit}>
          <Grid container spacing={3}>
            {error !== null && (
              <Grid item xs={12}>
                <Alert severity='error'>{error}</Alert>
              </Grid>
            )}

            <Grid item xs={12} sm={6}>
              <TextField
                name='firstName'
                value={inputState.firstName}
                label='First Name'
                onChange={handleTxtChange}
                variant='outlined'
                fullWidth
                size='small'
                InputProps={{ required: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name='lastName'
                value={inputState.lastName}
                label='Last Name'
                onChange={handleTxtChange}
                variant='outlined'
                fullWidth
                InputProps={{ required: true }}
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='email'
                value={inputState.email}
                label='Email'
                type='email'
                onChange={handleTxtChange}
                variant='outlined'
                size='small'
                InputProps={{ required: true }}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name='password'
                value={inputState.password}
                label='Password'
                type='password'
                onChange={handleTxtChange}
                variant='outlined'
                fullWidth
                size='small'
                InputProps={{ required: true }}
                inputProps={{ min: 8 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='passwordConfirm'
                value={inputState.passwordConfirm}
                label='Confirm Password'
                type='password'
                onChange={handleTxtChange}
                variant='outlined'
                fullWidth
                size='small'
                InputProps={{ required: true }}
                inputProps={{ min: 8 }}
              />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.textWithlink}>
                <Checkbox
                  color='primary'
                  name='privacy'
                  checked={inputState.privacy}
                  onChange={(e) => handleToggleChange(e)}
                  required
                />
                <Typography variant='subtitle2'>
                  Agree to the {` `}
                  <Link to='/tos'>terms of service</Link>
                  {` `} and {` `}
                  <Link to='/privacy'>privacy</Link> {` `}
                </Typography>
              </div>
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
                  'Sign Up'
                )}
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Box
                className={classes.textWithlink}
                sx={{
                  columnGap: 4,
                  height: '100%',
                }}
              >
                <Typography variant='body2'>
                  already have account?{` `}
                  <Link to='/login'>Login</Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Register;
