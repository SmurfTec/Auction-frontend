import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    width: '85%',
    maxWidth: 1024,
    padding: '30px 0',
    margin: '0 auto',
    marginTop: '3rem',
  },

  userImg: {
    marginBottom: '-50',
    zIndex: 2,
    position: 'relative',
  },

  profileImg: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-4rem',
    position: 'absolute',
    right: '50%',
    left: '50%',
    marginBottom: '2rem',
  },

  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    borderRadius: '50%',
  },
  content: {
    // borderRadius: 12,
    WebkitBackdropFilter: 'blur(10px)',
    // backdropFilter: 'blur(10px)',
    // backgroundColor: 'var(--theme-inner-content-bg)',
    overflow: 'hidden',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,

    // // marginTop: '2rem',
    // // textAlign: 'center',
    '& .MuiChip-root': {
      // paddingBlock: 5,
      paddingInline: 3,
      color: '#fff',

      '& svg': {
        color: '#fff',
      },
    },
  },
  displayFlex: {
    display: 'flex',
    justifyContent: 'center',
  },
  twtIcon: {
    backgroundColor: '#5da9dd',
    color: '#fff',
  },
  verfIcon: {
    marginLeft: 10,
    color: '#FFF',
    backgroundColor: theme.custom.success,
  },
  twitterHover: {
    '&:hover': {
      border: `1px solid #5da9dd`,
      color: '#5da9dd',
      backgroundColor: 'white',
    },
  },
  insIcon: {
    backgroundColor: '#ee653d',
    color: '#fff',
  },
  instaHover: {
    '&:hover': {
      border: `1px solid #ee653d`,
      color: '#ee653d',
      backgroundColor: 'white',
    },
  },

  accountsCard: {
    '&  .MuiCardContent-root:last-child': {
      paddingBlock: 40,
    },
  },

  defaultCard: {
    '&  .MuiCardContent-root:last-child': {
      padding: 20,
    },
  },

  card: {
    padding: 0,
    marginTop: '1.5rem',
    margin: '0 auto',
    position: 'relative',
    borderRadius: 14,

    '& .MuiCardHeader-root': {
      padding: '10px 20px',
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      flexDirection: 'row-reverse',
      '& .MuiTypography-displayBlock': {
        fontWeight: 600,
      },
      '& .MuiCardHeader-avatar': {
        marginRight: 0,
        marginLeft: 10,
      },
    },
  },

  showOverflow: {
    overflow: 'visible',
  },
}));

export default styles;
