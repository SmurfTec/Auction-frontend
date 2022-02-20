import { makeStyles } from '@material-ui/core';
import heroImg from 'assets/banner.svg';
import md1 from 'assets/banner/md1.svg';
import md2 from 'assets/banner/md2.svg';
import md3 from 'assets/banner/md3.svg';
import md4 from 'assets/banner/md4.svg';
import xs from 'assets/banner/xs.svg';

const useStyles = makeStyles((theme) => ({
  // ^ Common for all
  taggedPerson: {
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  embedlinks: {
    '& a': {
      color: theme.palette.text.secondary,
    },
    '& a::after': {
      content: '""',
      display: 'block',
      width: 0,
      height: 1,
      background: theme.palette.text.secondary,
      transition: 'width .5s',
    },

    '& a:hover::after': {
      width: '100%',
      //transition: width .3s;
    },
  },
  linkLabel: {
    // '& h6': {
    // borderBottom: `1px solid ${theme.palette.primary.main}`,
    // transition: 'border-bottom',

    '& a::after': {
      content: '""',
      display: 'block',
      width: 0,
      height: 2,
      background: theme.palette.primary.main,
      transition: 'width .5s',
    },

    '& a:hover::after': {
      width: '100%',
      //transition: width .3s;
    },
    // },
  },
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
    columnGap: 15,
  },

  paddingRoot: {
    paddingInline: '2rem',
  },

  Carousel: {
    '& img': {
      height: 300,
      objectFit: 'cover',
    },
  },
  topSection: {
    // marginTop: theme.spacing(2),
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
    alignItems: 'center',
    '& a': {
      verticalAlign: 'unset',
      color: theme.palette.text.secondary,
      textDecoration: 'underline',

      '&:hover': {
        color: theme.palette.primary.main,
        transition: 'color 0.5s ease-out',
      },
    },
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
    backgroundColor: theme.custom.darkFore,
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
  bannerText: {
    color: 'violet',
    fontSize: '10vw',
    [theme.breakpoints.down('xs')]: {
      fontSize: '13vw',
    },
    textShadow:
      '0 0 0px violet, 0 0 0px violet, 0 0 12px violet, 0 0 0px violet, 0 0 0px violet',
  },
  bannerImg: {
    position: 'relative',
    height: '92vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundImage: `url(${md4})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'unset',

    [theme.breakpoints.up('md')]: {
      height: '92vh',
    },

    [theme.breakpoints.down('md')]: {
      height: '90vh',
    },
    [theme.breakpoints.down('sm')]: {
      height: '91vh',
      backgroundImage: `url(${md4})`,
      backgroundPosition: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      backgroundImage: `url(${xs})`,
      height: '45vh',
    },
  },
  bannerCont: {
    position: 'absolute',
    bottom: '0.6em',
    top: '55%',
    height: 'fit-content',
    width: '100%',
    left: '45%',
    transform: 'translateX(-45%)',
    [theme.breakpoints.up('md')]: {
      '& .MuiBox-root': {
        marginLeft: 35,
      },
    },

    [theme.breakpoints.down('sm')]: {
      width: 400,
      '& .MuiBox-root': {
        marginLeft: 35,
      },
    },
    [theme.breakpoints.down('xs')]: {
      width: 300,
    },
    // [theme.breakpoints.down('sm')]: {
    //   width: '60%',
    // },
    // '& form': {
    //   margin: '0 auto',
    // },
  },
}));

export default useStyles;
