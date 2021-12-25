const { makeStyles } = require('@material-ui/core');

const styles = makeStyles((theme) => ({
  heroCarousel: {
    position: 'relative',
    '& img': {
      maxHeight: 350,
      objectFit: 'cover',
    },
    '& div span': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: `${theme.palette.primary.main}bf`,
    },
    '& .carousel .legend': {
      position: 'absolute',
      top: '50%',
      zIndex: 5,
      opacity: 1,
    },
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    position: 'absolute',
    top: '25%',
    width: '70%',
  },
  auctionDetails: {
    display: 'flex',
    columnGap: 10,
    position: 'absolute',
    flexDirection: 'absolute',
    top: 0,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    background: '#111',
    display: 'flex',
    // columnGap: 10,
    position: 'relative',
    flexDirection: 'absolute',
    // top: 0,
  },

  left: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '101%',
    height: '100%',

    // background: '#99b4d3',
    [theme.breakpoints.down('sm')]: {
      WebkitClipPath: 'polygon(0 0, 55% 0, 45% 100%, 0% 100%)',
      clipPath: 'polygon(0 0, 55% 0, 45% 100%, 0% 100%)',
      shapeInside: 'polygon(0 0, 55% 0, 45% 100%, 0% 100%)',
    },
    [theme.breakpoints.up('sm')]: {
      WebkitClipPath: 'polygon(0 0, 60% 0, 50% 100%, 0% 100%)',
      clipPath: 'polygon(0 0, 60% 0, 50% 100%, 0% 100%)',
      shapeInside: 'polygon(0 0, 60% 0, 50% 100%, 0% 100%)',
      shapeMargin: 20,
    },
  },

  right: {
    // position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    background: '#d9b596',
    [theme.breakpoints.down('sm')]: {
      WebkitClipPath: 'polygon(55% 0, 100% 0, 100% 100%, 45% 100%,45% 100%)',
      clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 45% 100%,45% 100%)',
      //   shapeOuside: 'polygon(55% 0, 100% 0, 100% 100%, 45% 100%,45% 100%)',
      //   shapeMargin: 20,
    },
    [theme.breakpoints.up('sm')]: {
      WebkitClipPath: 'polygon(60% 0, 100% 0%, 100% 100%, 59% 100%, 50% 100%)',
      clipPath: 'polygon(60% 0, 100% 0%, 100% 100%, 59% 100%, 50% 100%)',
      shapeOuside: 'polygon(60% 0, 100% 0%, 100% 100%, 59% 100%, 50% 100%)',
      shapeMargin: 20,
    },
  },
  heroAuctContent: {
    color: '#fff',
    position: 'absolute',
    top: '25%',
    [theme.breakpoints.down('sm')]: {
      shapeOutside: 'polygon(55% 0, 100% 0, 100% 100%, 45% 100%,45% 100%)',
    },
    [theme.breakpoints.up('sm')]: {
      shapeOutside: 'polygon(60% 0, 100% 0%, 100% 100%, 59% 100%, 50% 100%)',
    },
  },
  aucItemContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'absolute',
  },

  aucImg: {
    height: '100%',
    width: '50%',
    float: 'right',
    // backgroundSize: 'cover',
    /* -webkit-shape-outside: polygon(0 0, 100% 0, 100% 100%, 30% 100%); */
    shapeOutside: 'polygon(0 0, 100% 0, 100% 100%, 13% 100%)',
    WebkitClipPath: 'polygon(0 0, 100% 0, 100% 100%, 30% 100%)',
    WebkitShapeMargin: 20,
  },
  heroDesc: {
    paddingBlock: 32,
    paddingLeft: 50,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 10,
    height: '100%',
    color: '#fff',
    justifyContent: 'center',
    '& h2': {
      [theme.breakpoints.down('xs')]: {
        fontSize: '1rem',
      },
    },

    '& h4': {
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.9rem',
      },
    },
    '& h6': {
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.7rem',
      },
    },
  },
  introDec: {
    display: 'flex',
    justifyContent: 'center',
    '& h2': {
      [theme.breakpoints.down('xs')]: {
        fontSize: '1rem',
      },
    },
  },
}));

export default styles;
