import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import { useTextInput, useToggleInput } from 'hooks';
import { useLocation, useNavigate } from 'react-router-dom';
// import { useThemeContext } from 'Components/theme';

const useStyles = makeStyles((theme) => ({
  container: {
    cursor: 'text',
    display: 'flex',
    backgroundColor: '#242729',
    borderRadius: 10,
    padding: 12,
    height: 45,
    maxWidth: 700,
    margin: '0 auto',
    '& input': {
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      width: '100%',
      color: '#fff',
    },
    '& svg': {
      color: theme.custom.svg,
    },
  },
  hoverStyles: {
    boxShadow: '#7d2ae873 0px 0px 10px 0px',
    backgroundColor: theme.custom.borders,
  },
  searchBox: {
    height: 45,
    // width: '100%',
    // [theme.breakpoints.down('sm')]: {
    //   width: '100%',
    // },
  },
  searchIcon: {
    display: 'flex',
    marginRight: 8,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();
  const [search, handleChange] = useTextInput('');
  const [hover, handleHover] = useToggleInput(false);

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
    <>
      <form onSubmit={searchResults}>
        <Box className={classes.searchBox}>
          <div
            className={`${classes.container} ${hover && classes.hoverStyles}`}
          >
            <div className={classes.searchIcon}>
              <Search fontSize='small' />
            </div>
            <input
              aria-invalid='false'
              aria-autocomplete='list'
              aria-controls='NavSearch--results'
              placeholder='Search for auctions'
              type='search'
              value={search}
              onFocus={() => handleHover((st) => !st)}
              onBlur={() => handleHover((st) => !st)}
              onChange={handleChange}
              style={{ cursor: 'text' }}
            />
          </div>
        </Box>
      </form>
    </>
  );
}
