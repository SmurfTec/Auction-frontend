import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
}));

export default useStyles;
