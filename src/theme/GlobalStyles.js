import { withStyles } from '@material-ui/styles';

const GlobalStyles = withStyles((theme) => ({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },

    html: {
      width: '100%',
      height: '100%',
      '-ms-text-size-adjust': '100%',
      '-webkit-overflow-scrolling': 'touch',
    },
    body: {
      width: '100%',
      height: '100%',
      backgroundColor: '#1a1d1e',
    },
    '#root': {
      width: '100%',
      height: '100%',
      // overflowY: 'auto',
      backgroundColor: '#17191A',
    },
    button: {
      '& .MuiCircularProgress-root': {
        marginLeft: 10,
      },
    },
    input: {
      '&[type=number]': {
        MozAppearance: 'textfield',
        '&::-webkit-outer-spin-button': {
          margin: 0,
          WebkitAppearance: 'none',
        },
        '&::-webkit-inner-spin-button': {
          margin: 0,
          WebkitAppearance: 'none',
        },
      },
    },
    textarea: {
      '&::-webkit-input-placeholder': {
        color: theme.palette.text.disabled,
      },
      '&::-moz-placeholder': {
        opacity: 1,
        color: theme.palette.text.disabled,
      },
      '&:-ms-input-placeholder': {
        color: theme.palette.text.disabled,
      },
      '&::placeholder': { color: theme.palette.text.disabled },
    },
    a: {
      color: theme.palette.primary.dark,
      textDecoration: 'none',
      verticalAlign: '-webkit-baseline-middle',
    },
    '#logo': {
      textAlign: 'center',
      color: '#000',

      display: 'flex',
      alignItems: 'center',
      color: '#fff',

      '& img': {
        marginRight: '0.5rem',
      },

      '& a': {
        display: 'flex',
        alignItems: 'center',
        width: 'max-content',
        textDecoration: 'none',
        '&:hover': {
          border: 'none',
        },
      },
    },
    img: { display: 'inline-block', maxWidth: '100%' },
    video: {
      objectFit: 'cover',
    },
  },
}))(() => null);

export default GlobalStyles;
