import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),

    '& form': {
      marginBottom: theme.spacing(3),
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
    marginBlock: theme.spacing(4),
  },
  gridAlign: {
    justifyContent: 'center',
  },
}));

export default useStyles;
