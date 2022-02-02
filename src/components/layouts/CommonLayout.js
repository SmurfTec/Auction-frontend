import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Footer from 'components/common/Footer';
import Navbar from 'components/common/NavBar';

const CommonLayout = () => {
  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        sx={{
          minHeight: '100vh',
        }}
      >
        <Navbar />
        {/* <Box my={4}> */}
        <Outlet />
        {/* </Box> */}
        <Footer />
      </Box>
    </>
  );
};

export default CommonLayout;
