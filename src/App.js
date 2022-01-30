import React, { useEffect } from 'react';
import ThemeConfig from 'theme';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ScrollToTop from 'utils/ScrollToTop';
import Router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';

import './app.css';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  return (
    <>
      <ThemeConfig>
        <ScrollToTop />
        <Router />
      </ThemeConfig>
    </>
  );
}

export default App;
