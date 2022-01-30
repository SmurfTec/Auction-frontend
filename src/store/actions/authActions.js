import Axios from 'axios';
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  //
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  //
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  //
  USER_SIGNOUT,
  //
} from '../constants/authConstants';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

export const register = (state, history) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
    payload: state,
  });
  try {
    //success scenario
    const { data } = await Axios.post('/api/auth/signUp', state);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
    toast.success(' Account Created Successfully');
  } catch (error) {
    //fail
    // console.log('error', error.response.data);
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toast.error(
      error.response?.data.message || error.message || 'Something went wrong'
    );
  }
};

export const signin = (state) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: state,
  });
  try {
    //success scenario
    const { data } = await Axios.post('/api/auth/login', state);
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
    toast.success(' Login successfully');
  } catch (error) {
    //fail
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toast.error(error.response.data.message);
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_SIGNOUT });
  //document.location.location.href = '/signin';
};

export const detailsUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_DETAILS_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/users/me`, {
      //await because we want real data of Ajax request
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_DETAILS_FAIL, payload: message });
    toast.error(message);
  }
};

//* view single user
export const updateUserProfile = (user) => async (dispatch, getState) => {
  dispatch({ type: USER_UPDATE_PROFILE_REQUEST, payload: user });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.patch(`/api/users/me`, user, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
    //after updateing profile. we need to update profile signin. the username comes from signin
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
    toast.success('Profile updated successfully');
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_UPDATE_PROFILE_FAIL, payload: message });
    toast.error(message);
  }
};
