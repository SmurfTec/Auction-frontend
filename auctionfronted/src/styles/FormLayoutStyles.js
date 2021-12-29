import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginLeft: 0,
    marginRight: 0,
    height: '100%',
    flexWrap: 'wrap',
    [theme.breakpoints.up('sm')]: {
      background: 'transparent',
    },
  },
  mainContainer: {
    marginBlock: '4rem',
    maxWidth: 500,
    width: '85%',
    textAlign: 'center',
    margin: '0 auto',
  },
  backImgContainer: {
    display: 'none',
    width: '100%',
    height: 'inherit',
    padding: 60,
    position: 'absolute',

    [theme.breakpoints.up('sm')]: {
      display: 'inline-block',
    },
  },
  backImg: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    textAlign: 'center',

    '& img': {
      maxWidth: 534,
    },
  },
  formContent: {
    // maxWidth: 350,
    backgroundColor: '#fff',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: 15,
    padding: 30,
    zIndex: 2,

    '& h4': {
      color: theme.palette.primary.main,
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      borderRadius: 10,
      boxShadow: '0 6px 15px rgb(0 0 0 / 16%)',
    },
  },
  formSelection: {
    display: 'flex',
    marginBottom: 20,
    border: `1px solid ${theme.palette.primary.main}`,
    '& a': {
      color: '#000',
      flex: 1,
      padding: 20,
      '&.active': {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
      },
    },
  },
}));
