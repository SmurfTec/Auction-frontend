import { makeStyles } from '@material-ui/styles';

export const styles = makeStyles((theme) => ({
  root: {
    color: '#fff',
    backgroundColor: theme.custom.darkFore,
    padding: 25,
    userSelect: 'none',
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
      flexBasis: '55%',
    },

    '& .lastItem': {
      flexBasis: '35%',
    },
  },
  footerItem: {
    display: 'flex',
    flexDirection: 'column',
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
    backgroundColor: '#00ACED',
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
    backgroundColor: '#3b5998',
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
    backgroundColor: '#dd4b39',
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
