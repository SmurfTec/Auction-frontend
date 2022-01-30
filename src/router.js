import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Loading from 'components/common/Loading';

import { SignUp, Login, Home, Dashboard } from 'pages';

const Router = () => {
  const { user, token } = { as: 'as' };
  if (token && !user) return <Loading />;

  return (
    <Routes>
      {/* Common Routes / Public Routes */}
      <Route path='/' element={<Home />} />

      {/* Protechted Routes */}
      {user ? (
        <>
          <Route path='/' element={<Dashboard />} />
        </>
      ) : (
        // * As login and other auth pages has redirect logic implemented,
        // * thats why they are inside common routes
        <>{/*  */}</>
      )}

      <Route path='/register' element={<SignUp />} />
      <Route path='/login' element={<Login />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default Router;
