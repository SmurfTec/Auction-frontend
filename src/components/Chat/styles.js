import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  chatSection: {
    overflow: 'hidden',
    width: '100%',
    boxShadow: 'unset',
    border: `1px solid ${theme.custom.darkFore}`,
    '& .MuiTypography-colorTextSecondary': {
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: 1,
      WebkitBoxOrient: 'vertical',
    },
  },
  padding: {
    padding: '1em',
  },
  chatTitle: {
    justifyContent: 'center',
    display: 'flex',
    columnGap: '1em',
    '& img': {
      width: 30,
      height: 30,
    },
    marginBottom: '1.5em',
  },
  chatList: {
    '&.MuiList-padding': {
      paddingInline: 0,
      paddingBlock: 0,
    },
    maxHeight: '70vh',
    overflowY: 'auto',
  },
  borderRight500: {
    borderRight: `1px solid ${theme.custom.borders}`,
  },

  messageArea: {
    height: '70vh',
    overflowY: 'auto',
    paddingInline: 20,

    '& .MuiListItem-root:hover': {
      background: 'none',
      boxShadow: 'none',
    },
  },
  messageBox: {
    display: 'flex',
    alignItems: 'flex-start',
    columnGap: 10,
    padding: 0,
    marginBottom: '1em',
    '& .MuiListItemIcon-root': {
      justifyContent: 'center',
    },
  },
  message: {
    position: 'relative',
    maxWidth: '63%',
    width: 'fit-content',
    display: 'inline-block',
    padding: '0.3rem 0.9rem',
    lineHeight: '1rem',
    minHeight: '2rem',
    fontSize: '0.875rem',
    borderRadius: '1rem',
    wordBreak: 'break-all',
    backgroundColor: '#212324',
    marginBottom: 15,
  },

  messageTime: {
    position: 'absolute',
    width: 'max-content',
    bottom: '-1.4rem',
    fontSize: '0.1rem',
    '& p': {
      fontSize: '0.7rem',
    },
  },
  otherTime: {
    left: 0,
  },
  myTime: {
    right: 0,
  },

  agreementMessage: {
    width: '75%',
    // color: '#4d4d4d',
    color: theme.palette.text.secondary,
    borderRadius: 20,
    marginBottom: '1rem',
    position: 'relative',
    paddingTop: 10,
    paddingBottom: 5,
    '& p': {
      fontStyle: 'italic',
      bottom: '-1rem',

      // marginBottom: 5,
      // color: theme.palette.text.secondary,
    },
    // '& .MuiListItemText-secondary': {
    //   fontSize: 14,
    //   // color: '#000',
    // },
  },

  myMessage: {
    marginLeft: 'auto',
    borderTopRightRadius: '0.125rem',
    '& p': {
      fontStyle: 'italic',
    },
  },
  otherMessage: {
    marginRight: 'auto',
    // float: 'left',
    backgroundColor: theme.palette.primary.main,
    // color: '#fff',
    borderTopLeftRadius: '0.125rem',
    '& p': {
      fontStyle: 'italic',
    },
  },
  Agreement: {
    backgroundColor: theme.custom.hover,
    border: `1px solid #e7e7e7`,
    // padding: 10,
    // minWidth: 450,
    borderRadius: 5,
    overflow: 'hidden',
  },
  AgreementHeader: {
    // backgroundColor: '#f2f2f2',
    backgroundColor: theme.custom.hover,
    display: 'flex',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .MuiTypography-root': {
      fontWeight: 'bold',
    },
  },
  AgreementExpansion: {},

  typeMessage: {
    border: `1px solid ${theme.custom.borders}`,
    borderRadius: 10,
    padding: '5px 10px',
  },
}));

export default useStyles;
