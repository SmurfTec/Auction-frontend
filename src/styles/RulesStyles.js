import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '0 auto',
    marginBottom: '5em',
    '& h1': {
      marginBlock: '0.8em',
    },
    '& h6': {
      marginTop: '0.2em',
      marginBottom: '0.7em',
    },
    '& strong': {
      //   marginBlock: '1em',
      fontWeight: 600,
    },
    '& .MuiAccordion-rounded:last-child': {
      borderRadius: 0,
    },
  },
  head: {
    marginBlock: '1em',
  },
  subHead: {
    marginBottom: '0.5em',
    marginTop: '1.2em',
  },
  para: {
    marginBottom: '0.5em',
    '& a': {
      verticalAlign: 'unset',
    },
  },

  accordian: {
    '& h6': {
      margin: 0,
    },
    '& .MuiAccordionSummary-root': {
      minHeight: 60,
    },
    '&.MuiAccordion-root.Mui-expanded:not(:first-child)': {
      marginTop: '3em',
      marginBottom: '3em',
    },
    '& .MuiAccordionSummary-root.Mui-expanded': {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',

      '& svg': {
        color: '#fff',
      },
    },
  },

  accordianDetails: {
    '& p:not(:last-child)': {
      marginBottom: 10,
    },
  },
}));

export default styles;
