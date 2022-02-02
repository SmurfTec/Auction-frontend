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
  tableRow: {
    '& .MuiTableCell-stickyHeader': {
      backgroundColor: theme.custom.darkFore,
    },
  },
  hoverRow: {
    '&.MuiTableRow-root.MuiTableRow-hover:hover': {
      cursor: 'pointer',
      transition: 'all 0.2s ease 0s',
      boxShadow: 'rgba(4, 17, 29, 0.25) 0px 0px 8px 0px',
      backgroundColor: '#1e1a1e',
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

  AuctionsCategories: {
    '& .MuiChip-root:first-child': {
      boxShadow: `${theme.palette.warning.main}73 0px 0px 10px 0px`,
      backgroundColor: theme.palette.warning.main,
    },
  },
}));

export default useStyles;
