import React, { useState } from 'react';
import {
  Button,
  Grid,
  Typography,
  CircularProgress,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { Alert } from 'components/common/Alert';
// import FormLayout from 'components/layouts/formLayout';
import useManyInputs from 'hooks/useManyInputs';
import globalStyles from 'styles/commonStyles';
import { useStyles as formStyles } from 'styles/FormLayoutStyles';
// import { AuthContext } from 'contexts/AuthContext';
// import { API_BASE_URL, handleCatch } from 'utils/makeReq';
const Register = () => {
  //   const { token, user, signInUser } = useContext(AuthContext);
  const classes = globalStyles();
  const formClasses = formStyles();

  // const navigate = useNavigate();
  // const location = useLocation();

  const initialState = {
    fname: '',
    lname: '',
    email: '',
    password: '',
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

  //   let redirect = location.search ? location.search.split('=')[1] : '/';

  //   useEffect(() => {
  //     console.log(`redirect`, redirect);

  //     // if (user) {
  //     //   navigate(redirect);
  //     // }
  //   }, [user, navigate, redirect]);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      //   const res = await axios.post(`${API_BASE_URL}/auth/login/freelancer`, {
      //     ...inputState,
      //   });
      //   console.log(`res`, res);

      //   signInUser(res.data.token, res.data.user);

      resetState();
    } catch (error) {
      //   handleCatch(error);
    } finally {
      setLoading(false);
    }
  };

  const [tabState, setTabState] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabState(newValue);
    setInputstate((st) => ({
      ...st,
      form: newValue === 0 ? 'join' : 'login',
    }));
  };
  return (
    <div className={formClasses.mainContainer}>
      {/* <Tabs
        value={tabState}
        onChange={handleTabChange}
        indicatorColor=''
        textColor='primary'
        centered
        // className={classes.Tabs}
      >
        <Tab label='Buyer' />
        <Tab label='Seller' />
      </Tabs> */}
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
        <section className={classes.wrapper}>
          <form onSubmit={onFormSubmit}>
            <Grid container spacing={3}>
              {error !== null && (
                <Grid item xs={12}>
                  <Alert severity='error'>{error}</Alert>
                </Grid>
              )}

              <Grid item xs={12}>
                <TextField
                  name='fname'
                  value={inputState.fname}
                  label='First Name'
                  onChange={handleTxtChange}
                  variant='outlined'
                  fullWidth
                  size='small'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name='lname'
                  value={inputState.lname}
                  label='Last Name'
                  onChange={handleTxtChange}
                  variant='outlined'
                  fullWidth
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
                />
              </Grid>
              <Grid item xs={12}>
                <div className={classes.textWithlink}>
                  <Checkbox
                    color='primary'
                    name='privacy'
                    checked={inputState.privacy}
                    onChange={(e) => handleToggleChange(e)}
                  />
                  <Typography variant='subtitle2'>
                    Agree to the
                    <Link to='/'>terms of service</Link> and
                    <Link to='/'>privacy</Link>
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
                    'Sign In'
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
                  <Typography variant='subtitle2'>
                    already have account?
                    <Link to='/register'>Login </Link>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Register;
