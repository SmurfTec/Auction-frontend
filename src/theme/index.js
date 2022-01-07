/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyles from 'theme/GlobalStyles';
import breakpoints from './breakpoints';
import typography from 'theme/typography';

const hoverStyles = {
  cursor: 'pointer',
  transition: 'all 0.2s ease 0s',
  boxShadow: 'rgba(4, 17, 29, 0.25) 0px 0px 8px 0px',
  backgroundColor: 'rgb(251, 253, 255)',
};

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
};
const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
};

const Theme = ({ children }) => {
  const themeOptions = useMemo(() => {
    return {
      palette: {
        primary: {
          main: '#2081E2',
        },

        secondary: { main: '#f50057' },
        success: { ...SUCCESS },
        warning: { ...WARNING },
        error: { ...ERROR },

        // info: {
        //   main: '#0C53B7',
        //   dark: '#04297A',
        // },
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
        down: '#eb5757',
        up: '#34c77b',
      },
      overrides: {
        MuiOutlinedInput: {
          root: {
            borderRadius: 10,
          },
        },
        MuiButton: {
          root: {
            borderRadius: 10,
            fontWeight: 600,
            padding: '8px 16px',
          },
        },
        MuiPagination: {
          ul: {
            justifyContent: 'center',
          },
        },
        MuiAccordion: {
          rounded: {
            '&:first-child': {
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            },
            '&:last-child': {
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12,
            },
          },
        },
        MuiPopover: {
          paper: {
            maxHeight: 300,
            borderRadius: 12,
          },
        },
        MuiList: {
          root: {
            maxHeight: 300,
          },
        },
        MuiMenuItem: {
          root: {
            paddingTop: 12,
            paddingBottom: 12,
          },
        },
        MuiListItem: {
          root: {
            '&#cat': {
              borderBottom: '1px solid #0000001f',
            },
            '&#logout': {
              columnGap: 10,
            },
            '&.Mui-selected': {
              backgroundColor: 'unset',
              '&:hover': {
                ...hoverStyles,
              },
            },
            '&:hover': {
              ...hoverStyles,
            },
          },
          button: {
            '&:hover': {
              backgroundColor: 'rgb(251, 253, 255)',
            },
          },
        },
        // .MuiListItem-root.Mui-selected
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
