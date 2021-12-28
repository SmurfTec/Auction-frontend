/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyles from 'theme/GlobalStyles';
import breakpoints from './breakpoints';
import typography from 'theme/typography';

const Theme = ({ children }) => {
  const themeOptions = useMemo(() => {
    return {
      palette: {
        primary: {
          main: '#00a591',
        },
        info: {
          main: '#0C53B7',
          dark: '#04297A',
        },
        text: {
          primary: '#161C24',
          secondary: '#62646a',
          disabled: '#637381',
        },
      },
      breakpoints,
      typography,
      custom: {
        error: '#FF4842',
        success: '#49a64d',
      },
    };
  }, []);

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
