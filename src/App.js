import React from 'react';
import ThemeConfig from 'theme';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ScrollToTop from 'utils/ScrollToTop';
import Router from './router';
import CookieConsent from 'react-cookie-consent';

import './app.css';

function App() {
  return (
    <>
      <ThemeConfig>
        <ScrollToTop />
        <Router />
        <CookieConsent
          location='bottom'
          buttonText='Sure man!!'
          cookieName={`${Math.random}`}
          style={{ background: '#2B373B', justifyContent: 'center' }}
          buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
          expires={150}
          contentClasses='cookitContent'
        >
          This website uses cookies to enhance the user experience.{' '}
        </CookieConsent>
      </ThemeConfig>{' '}
    </>
  );
}

export default App;
