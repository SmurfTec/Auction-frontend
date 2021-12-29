import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    // marginTop: theme.spacing(2),
    // marginBottom: theme.spacing(2),

    '& form': {
      // marginBottom: theme.spacing(3),
    },
  },
  Carousel: {
    '& img': {
      height: 300,
      objectFit: 'cover',
    },
  },
  topSection: {
    marginTop: theme.spacing(8),
  },
  containerMargin: {
    marginBlock: theme.spacing(6),
  },
  gridAlign: {
    justifyContent: 'center',
  },

  textWithlink: {
    display: 'flex',
    columnGap: 5,
    alignItems: 'center',
    '& h6': { display: 'contents' },
  },

  // ^ Image Carousel Styles
  content: {
    width: '100%',
    maxWidth: 620,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    '& hr:last-child': {
      display: 'none',
    },

    '& .MuiFormControlLabel-root': {
      marginLeft: 0,
    },

    '& .MuiCardContent-root:last-child': {
      paddingBottom: 12,
    },
  },

  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '2rem',

    '& .MuiCard-root': {
      marginBottom: 0,
    },
  },
  auctDetailCont: {
    display: 'flex',
    flex: 2,
    justifyContent: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',

    [theme.breakpoints.between('xs', 'sm')]: {
      flexDirection: 'column',
    },
  },

  // ^ Tabs of join page
  Tabs: {
    marginTop: 20,
    '& .MuiTab-root': {
      minWidth: 120,
      paddingInline: 0,
      border: '1px solid #ccc',
    },
    '& .Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      transition: '0.5s',
      color: '#fff',
    },
  },
}));

export default useStyles;
