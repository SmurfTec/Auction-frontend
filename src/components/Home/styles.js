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
    rowGap: 10,
    '& hr:last-child': {
      display: 'none',
    },
    '& p': {
      paddingLeft: theme.spacing(2),
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
}));

export default useStyles;
