const { makeStyles } = require('@material-ui/core');

const useStyles = makeStyles((theme) => ({
  filter: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& p': {
      paddingLeft: theme.spacing(2),
      paddingBlock: 5,
      '&:hover': {
        backgroundColor: theme.custom.hover,
      },
    },

    '& .MuiFormControlLabel-root': {
      marginLeft: 0,
    },
  },
  pagination: {
    justifyContent: 'center',
    '& .MuiTablePagination-spacer': {
      flex: 0,
      display: 'none',
    },

    '& .MuiTablePagination-toolbar': {
      justifyContent: 'left',
    },

    '& .MuiTablePagination-input': {
      display: 'none',
    },
  },
  activePrice: {
    backgroundColor: theme.custom.hover,
  },
  activeLocation: {
    backgroundColor: theme.custom.hover,
  },
}));

export default useStyles;
