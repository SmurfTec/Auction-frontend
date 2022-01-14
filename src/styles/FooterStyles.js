import { makeStyles } from '@material-ui/styles';

export const styles = makeStyles((theme) => ({
  root: {
    color: '#fff',
    // backgroundColor: '#000',
    backgroundColor: theme.palette.primary.main,
    // marginTop: theme.spacing(5),
    padding: theme.spacing(5, 5),
    userSelect: 'none',
    //  borderTopRightRadius: 15,
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      columnGap: theme.spacing(2),
      justifyContent: 'space-between',
    },

    '& .firstItem': {
      flexBasis: '50%',
    },

    '& .lastItem': {
      flexBasis: '40%',
    },
    // '& a': {
    //   // color: '#fff',
    //   '&:hover': {
    //     fontWeight: 600,
    //     transform: 'translateX(5px)',
    //   },
    // },
  },
  footerItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  logoTitle: {
    cursor: 'pointer',
    userSelect: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    //   width: 150,
    width: 130,
    fontWeight: 900,

    '& img': {
      width: 50,
      height: 50,
    },
  },
  gridContent: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    color: theme.palette.grey[300],
  },

  contentTitle: {
    marginBottom: theme.spacing(2),
    color: theme.palette.grey[400],
    textTransform: 'uppercase',
  },
  subContent: {
    padding: '3px 0',
    '& a': {
      color: theme.palette.common.white,
      '&:hover': {
        color: '#fa0f0c',
      },
    },

    '& svg': {
      color: theme.palette.common.white,
      marginRight: theme.spacing(1.5),
      fontSize: '1rem',
    },
  },
  icons: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  rightsReservedFooter: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.grey[100],
  },

  link: {
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.5em',
    '& span': {
      fontWeight: 500,
    },
    '& svg': {
      fontSize: '1rem',
      marginLeft: '0.5em',
    },
    '&:hover svg': {
      transform: 'translateX(5px)',
      transition: 'transform 0.5s linear',
    },
    '&:hover h6': {
      fontWeight: 700,
      transition: 'font-weight 0.25s linear',
    },
  },

  share: {
    color: '#353c4a',
    border: '0.125rem solid #f3f3f3',
    boxShadow: '0 0 8px 0 rgba(50, 50, 50, 0.15)',
    borderRadius: '50%',
    transition: '250ms',
    display: 'flex',
    alignItems: 'center',
    padding: '0.6em',
    '&:hover,:focus': {
      outlineColor: 'inherit',
      backgroundColor: '#fff',
      '& svg': {
        color: 'inherit',
      },
    },
    '& svg': {
      color: '#fff',
    },
  },

  twitter: {
    '&:hover,:focus': {
      color: '#00ACED',
      boxShadow: '0 0 24px 0 #00ACED',
    },
    // '&:focus': {
    //   color: '#00ACED',
    //   boxShadow: '0 0 24px 0 #00ACED',
    // },
  },
  facebook: {
    '&:hover': {
      color: '#3b5998',
      boxShadow: '0 0 24px 0 #3b5998',
    },
    '&:focus': {
      color: '#3b5998',
      boxShadow: '0 0 24px 0 #3b5998',
    },
  },
  google: {
    '&:hover': {
      color: '#dd4b39',
      boxShadow: '0 0 24px 0 #dd4b39',
    },
    '&:focus': {
      color: '#dd4b39',
      boxShadow: '0 0 24px 0 #dd4b39',
    },
  },
  connect: {
    display: 'flex',

    '& svg': {},
  },
}));
