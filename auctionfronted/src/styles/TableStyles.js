import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  selectControl: {
    width: '100%',
    maxWidth: 200,
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
    '&.MuiMenuItem-root': {
      paddingBlock: 10,
    },
    '& .MuiListItem-root:not(:last-child)': {
      borderBottom: '1px solid #0000001f',
      // '& :not(:last-child)': {
      // },
    },
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  aucItem: {
    '& .MuiAvatar-root': {
      marginInline: 15,
    },
  },
  hoverRow: {
    '&.MuiTableRow-root.MuiTableRow-hover:hover': {
      cursor: 'pointer',
      transition: 'all 0.2s ease 0s',
      boxShadow: 'rgba(4, 17, 29, 0.25) 0px 0px 8px 0px',
      backgroundColor: 'rgb(251, 253, 255)',
    },
  },
  pagination: {
    '& .MuiPagination-ul': {
      justifyContent: 'center',
    },
  },

  tabFilters: {
    display: 'flex',
    columnGap: '2em',
    justifyContent: 'center',

    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      rowGap: '2em',
    },
  },

  tableContainer: {
    // maxHeight: 800,
    // '&.MuiTableContainer-root': {
    //   // overflowX: 'unset',
    //   overflowX: 'auto',
    //   // overflowY: 'hidden',
    //   // maxHeight: 'unset',
    // },
  },
  tableCont: {
    // position: 'sticky',
    // top: 65,
    // zIndex: 2,
  },
  // wrapper: {
  //   overflowX: 'auto',
  // },
}));

export default useStyles;
