import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { makeReq, handleCatch } from 'utils/makeReq';

export const LOCALSTORAGE_TOKEN_KEY = 'auction-token';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  // let history = useHistory();
  let tokenLocal;

  try {
    tokenLocal = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  } catch (err) {
    tokenLocal = null;
  }

  const [token, setToken] = useState(tokenLocal);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getMe();
  }, []);

  const getMe = async () => {
    try {
      const res = await makeReq(`/users/me`, {}, 'GET');
      // console.log(`res`, res);

      setUser(res.user);
      setIsLoggedIn(true);
    } catch (err) {
      setToken(null);
      localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
      localStorage.removeItem('user');
      setIsLoggedIn(false);

      // if (history.location !== '/') history.push('/');
    }
  };

  const updateMe = async (newProfile, setState) => {
    try {
      const res = await makeReq(
        `/users/me`,
        { body: { ...newProfile } },
        'PATCH'
      );
      // console.log(`res`, res);

      setUser(res.user);
      toast.success('Profile Updated Successfully !');
    } catch (err) {
      handleCatch(err);
    }
  };

  const signInUser = (tk, us) => {
    // console.log(`tk`, tk);
    // console.log(`us`, us);

    window.localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, tk);

    setTimeout(() => {
      setToken(tk);
      setUser(us);
      setIsLoggedIn(true);
    }, 1000);
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
    setToken(null);
    setUser(null);

    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
  };

  // Update Staffer
  const changeMyPassword = async (updatedPassword) => {
    try {
      const resData = await makeReq(
        `/users/updatepassword/${user._id}`,
        { body: { ...updatedPassword } },
        'PATCH'
      );
      toast.success('Password Updated Successfully !');
      setUser(resData.user);
    } catch (err) {
      handleCatch(err);
    }
  };

  const makeNotficationsAsRead = async () => {
    try {
      await makeReq('/users/read-my-notifications', {}, 'PATCH');
    } catch (err) {
      handleCatch(err);
    }
    console.log('makenotificationRead');
  };

  return (
    <AuthContext.Provider
      displayName='Auth Context'
      value={{
        token,
        setToken,
        logoutUser,
        user,
        setUser,
        signInUser,
        updateMe,
        changeMyPassword,
        makeNotficationsAsRead,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
