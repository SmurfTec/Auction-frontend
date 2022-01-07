import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Box } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import { useTextInput } from 'hooks';
import { useLocation, useNavigate } from 'react-router-dom';
// import { useThemeContext } from 'Components/theme';

const useStyles = makeStyles((theme) => ({
  container: {
    cursor: 'text',
    display: 'flex',
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 10,
    border: '1px solid rgb(229, 232, 235)',
    width: '100%',
    padding: 12,
    height: 45,
    maxWidth: 700,
    '& input': {
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      width: '100%',
    },
    '& svg': {
      color: '#707a83',
    },
  },
  searchBox: {
    height: 45,
    width: '150%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  searchIcon: {
    display: 'flex',
    marginRight: 8,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();
  const [search, handleChange] = useTextInput('');
  const navigate = useNavigate();
  const location = useLocation();

  const searchResults = (e) => {
    e.preventDefault();

    // * if search is empty , navigate to '/' from '/search='blabla'
    if (!search) navigate(location.pathname);
    else navigate(`?search=${search}`);
    // * navigate to '/' from '/search='blabla'
  };

  return (
    <Box display='flex' width='100%'>
      <form onSubmit={searchResults}>
        <Box className={classes.searchBox}>
          <div className={classes.container}>
            <div className={classes.searchIcon}>
              <Search fontSize='small' />
            </div>
            <input
              aria-invalid='false'
              aria-autocomplete='list'
              aria-controls='NavSearch--results'
              placeholder='Search items & collections'
              type='search'
              value={search}
              onChange={handleChange}
              style={{ cursor: 'text' }}
            />
          </div>
        </Box>
      </form>
    </Box>
  );
}
