import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  // ^ Common for all
  flexAlignDisp: {
    display: 'flex',
    alignItems: 'center',
  },

  flexJustDisp: {
    display: 'flex',
    justifyContent: 'center',
  },

  flexDisp: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paddingRoot: {
    paddingInline: '2rem',
  },

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
    [theme.breakpoints.down('sm')]: {
      marginBlock: theme.spacing(2),
    },
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
    // maxWidth: 620,
    display: 'flex',
    // flex: 3,
    flexBasis: '65%',
    flexDirection: 'column',
    flexGrow: 1,
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
    flexWrap: 'nowrap',
    flexDirection: 'row',
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

  // ^ Custom box having box shadow and border
  customStyledBox: {
    boxShadow: 'rgb(4 17 29 / 25%) 0px 0px 10px 0px',
    // rgb(4 17 29 / 25%) 0px 0px 8px 0px
    // #04111d40
    borderRadius: 12,
    overflow: 'hidden',
    width: '100%',

    '& .MuiPaper-rounded': {
      height: '100%',
      borderRadius: 0,
    },

    // '& .MuiPaper-elevation1': {
    //   boxShadow: 'none',
    // },
    '&:hover': {
      boxShadow: `${theme.palette.primary.main}73 0px 0px 10px 0px`,
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  customStyledWidth: {
    width: '100%',
  },
  downColor: {
    color: theme.custom.error,
  },
  upColor: {
    color: theme.custom.success,
  },
}));

export default useStyles;
