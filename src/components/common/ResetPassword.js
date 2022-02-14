import React, { useState, useContext, useEffect } from 'react';
import {
  Button,
  Grid,
  Typography,
  CircularProgress,
  TextField,
  Checkbox,
} from '@material-ui/core';
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { Alert } from 'components/common/Alert';
import useManyInputs from 'hooks/useManyInputs';
import globalStyles from 'styles/commonStyles';
import { useStyles as formStyles } from 'styles/FormLayoutStyles';
import { AuthContext } from 'contexts/AuthContext';
import { API_BASE_URL, handleCatch } from 'utils/makeReq';
import axios from 'axios';
import { useGaTracker } from 'hooks';

const ResetPassword = () => {
  useGaTracker();
  const { isLoggedIn, signInUser } = useContext(AuthContext);
  const classes = globalStyles();
  const formClasses = formStyles();

  const { token } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const initialState = {
    password: '',
    passwordConfirm: '',
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
        const res = await axios.patch(
          `${API_BASE_URL}/auth/resetPassword/${token}`,
          {
            ...inputState,
          }
        );
        // console.log(`res`, res);

        signInUser(res.data.token, res.data.user);
        resetState();
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
          Reset Password
        </Typography>
        <form onSubmit={onFormSubmit}>
          <Grid container spacing={3}>
            {error !== null && (
              <Grid item xs={12}>
                <Alert severity='error'>{error}</Alert>
              </Grid>
            )}

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

export default ResetPassword;
