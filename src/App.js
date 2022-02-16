import React from 'react';
import ThemeConfig from 'theme';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ScrollToTop from 'utils/ScrollToTop';
import Router from './router';

import './app.css';

function App() {
  return (
    <>
      <ThemeConfig>
        <ScrollToTop />
        <Router />
      </ThemeConfig>{' '}
    </>
  );
}

export default App;
