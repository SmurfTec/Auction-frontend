/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyles from 'theme/GlobalStyles';
import breakpoints from './breakpoints';
import typography from 'theme/typography';

const bordersColor = '#3a3a3a';
const hoverColor = '#232627';
const hoverStyles = {
  cursor: 'pointer',
  transition: 'all 0.2s ease 0s',
  boxShadow: 'rgba(4, 17, 29, 0.25) 0px 0px 8px 0px',
  // backgroundColor: 'rgb(251, 253, 255)',
  backgroundColor: hoverColor,
};

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#33841a',
  dark: '#229A16',
  darker: '#08660D',
};
const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#694f00',
  dark: '#B78103',
  darker: '#7A4F01',
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#a20500',
  dark: '#B72136',
  darker: '#7A0C2E',
};
const Theme = ({ children }) => {
  const themeOptions = useMemo(() => {
    return {
      palette: {
        type: 'dark',
        primary: {
          main: '#7d2ae8',
          // main: '#4B0082',
        },

        secondary: { main: '#a7003b' },
        success: { ...SUCCESS },
        warning: { ...WARNING },
        error: { ...ERROR },

        // info: {
        //   main: '#0C53B7',
        //   dark: '#04297A',
        // },
        // text: {
        //   primary: '#161C24',
        //   secondary: '#62646a',
        //   disabled: '#637381',
        // },
        text: {
          primary: '#fff',
          secondary: '#dcd9d4',
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

        // darkFore: '#1a1d1e',
        darkFore: '#212324',
        borders: bordersColor,
        svg: '#dcd9d4',
        hover: hoverColor,
      },
      overrides: {
        MuiPaper: {
          root: {
            backgroundColor: '#1a1d1e',
          },
        },
        MuiOutlinedInput: {
          root: {
            borderRadius: 10,
            // '& fieldset': {
            //   border: `1px solid ${hoverColor}`,
            // },
          },
        },
        MuiButton: {
          root: {
            borderRadius: 10,
            fontWeight: 600,
            padding: '8px 16px',
          },
        },
        MuiChip: {
          colorPrimary: {
            boxShadow: `#7d2ae873 0px 0px 10px 0px`,
          },
          colorSecondary: {
            boxShadow: `#f5005773 0px 0px 10px 0px`,
          },
        },
        MuiPagination: {
          ul: {
            justifyContent: 'center',
          },
        },
        // MuiInput: {
        //   underline: {
        //     '&:before': {
        //       borderBottom: `1px solid `,
        //     },
        //   },
        // },
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
              '& svg': {
                color: '#dcd9d4',
              },
            },
            '&.Mui-selected': {
              backgroundColor: hoverColor,
              '&:hover': {
                backgroundColor: hoverColor,
              },
            },
            '&:hover': {
              ...hoverStyles,
            },
          },
          button: {
            '&:hover': {
              backgroundColor: hoverColor,
            },
          },
        },
        // .MuiListItem-root.Mui-selected
      },
    };
  }, []);

  const theme = createTheme(themeOptions);

  theme.overrides.MuiAccordion.root = {
    '&.MuiAccordion-root': {
      boxShadow: 'rgb(4 17 29 / 25%) 0px 0px 5px 0px',
      '&:hover': {
        boxShadow: `${theme.palette.primary.main}73 0px 0px 10px 0px`,
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
