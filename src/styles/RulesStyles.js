import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    width: '75%',
    margin: '0 auto',
    marginBottom: '5em',
    '& h2': {
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
    '& a': {
      verticalAlign: 'unset',
    },

    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  head: {
    marginBlock: '1em',
  },
  subHead: {
    marginBottom: '0.5em',
    marginTop: '1.2em',
    '& span': {
      fontSize: '1.2rem',
    },
  },
  para: {
    marginBottom: '0.5em',
  },

  subPara: {
    paddingLeft: '1em',
  },

  ul: {
    listStyleType: 'square',
    marginLeft: 35,
    marginBottom: '1em',
    '& li:not(:last-child)': {
      marginBottom: '0.2em',
    },
    '& li:first-letter': {
      textTransform: 'capitalize',
    },
  },

  accordianContainer: {
    marginTop: '4em',
    marginBottom: '2em',

    '& .MuiAccordion-rounded:last-child,.MuiAccordion-rounded:first-child': {
      borderRadius: 0,
    },

    '&.MuiPaper-elevation1': {
      boxShadow: 'none',
    },

    '& .MuiAccordion-root': {
      boxShadow: 'rgb(4 17 29 / 25%) 0px 0px 10px 0px',

      '&:before': {
        display: 'none',
      },

      '&:not(:last-child)': {
        marginBottom: '1.5em',
      },

      '&:hover': {
        boxShadow: `${theme.palette.primary.main}33 0px 0px 10px 0px`,
      },
    },
  },

  countLabel: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: `100%`,
    padding: 10,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    minWidth: 50,
    justifyContent: 'center',
  },

  accordian: {
    '& h6': {
      margin: 0,
    },
    '& .MuiAccordionSummary-root': {
      minHeight: 50,
      position: 'relative',

      '&:hover': {
        backgroundColor: '#fbfdff',
      },

      '& h6': {
        marginLeft: '3.5em',
      },
    },
    '&.MuiAccordion-root.Mui-expanded:not(:first-child)': {
      marginTop: '3em',
      marginBottom: '3em',
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
      margin: '10px 0',
    },
    '& .MuiAccordionSummary-root.Mui-expanded': {
      backgroundColor: '#f6fbff',
      borderBottom: '1px solid #e2e2e2',
    },
  },

  accordianDetails: {
    '& p:not(:last-child)': {
      marginBottom: 10,
    },
  },
}));

export default styles;
