import {
  Box,
  Button,
  Chip,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import Navbar from 'components/common/NavBar';
import useManyInputs from 'hooks/useManyInputs';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { categories } from 'data';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '90%',
    marginTop: '3rem',
    padding: theme.spacing(3),
    borderRadius: 10,

    [theme.breakpoints.up('sm')]: {
      width: '70%',
    },
  },
  form: {
    marginTop: '3rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    rowGap: 25,
  },
  uploadFile: {
    '& input': {
      display: 'none',
    },
  },
  uploadFileBox: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      height: 100,
      width: 100,
      objectFit: 'cover',
    },
  },
  selectControl: {
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
  },
}));

const Create = () => {
  const classes = styles();
  const disabled = false;
  const initialState = {
    title: '',
    description: '',
    location: '',
    startingPrice: '',
    images: [],
    video: '',
    categories: [],
    timeLine: 7,
  };
  const [
    inputState,
    handleTxtChange,
    handleToggleChange,
    changeInput,
    resetState,
    setInputstate,
  ] = useManyInputs(initialState);
  const [disable, setDisable] = React.useState(false);
  //   const [open, setOpen] = React.useState(false);

  const uploadFile = () => {};

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  //   const handleOpen = () => {
  //     setOpen(true);
  //   };

  const handleTimeline = (e) => {
    changeInput('timeLine', e.target.value);
  };

  const handleCatOnChange = (e, newValue) => {
    changeInput('categories', newValue);
    if (newValue.length === 3) setDisable(true);
    else setDisable(false);
  };
  return (
    <>
      <Navbar user='user' />

      <Container className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant='h4' fullWidth align='center'>
            Create Auction
          </Typography>
          <div className={classes.form}>
            <TextField
              name='title'
              value={inputState.title}
              label='Title'
              onChange={handleTxtChange}
              variant='outlined'
              fullWidth
            />
            <TextField
              name='description'
              value={inputState.description}
              label='Description'
              onChange={handleTxtChange}
              variant='outlined'
              fullWidth
            />
            <TextField
              name='location'
              value={inputState.location}
              label='Location'
              onChange={handleTxtChange}
              variant='outlined'
              fullWidth
            />
            <TextField
              name='startingPrice'
              value={inputState.startingPrice}
              label='Starting Price'
              onChange={handleTxtChange}
              variant='outlined'
              fullWidth
            />

            <Autocomplete
              multiple
              disabled={disabled || disable}
              id='categories'
              value={inputState.categories}
              onChange={handleCatOnChange}
              options={categories}
              getOptionLabel={(option) => option}
              renderTags={(tagValue, getTagProps) =>
                tagValue.map((option, index) => (
                  <Chip
                    label={option}
                    {...getTagProps({ index })}
                    color='default'
                    disabled={false}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Fixed tag'
                  variant='outlined'
                  //   placeholder='Favorites'
                />
              )}
            />

            <FormControl variant='outlined' className={classes.selectControl}>
              <InputLabel htmlFor='outlined-age-native-simple'>
                TimeLine
              </InputLabel>
              <Select
                value={inputState.timeLine}
                onChange={handleTimeline}
                label='TimeLine'
              >
                <MenuItem value={7}>1 week</MenuItem>
                <MenuItem value={14}>2 week</MenuItem>
                <MenuItem value={21}>3 week</MenuItem>
              </Select>
            </FormControl>
            <div>
              <Box mb={2}>
                <Typography variant='subtitle2' fullWidth>
                  Upload Images
                </Typography>
              </Box>
              <div className={classes.uploadFile}>
                <input id='fileuploadBtn' type='file' onChange={uploadFile} />
              </div>
              <Box className={classes.uploadFileBox}>
                <label htmlFor='fileuploadBtn'>
                  <Button variant='contained' color='primary' component='span'>
                    Attach Image
                  </Button>
                </label>
                {/* {
                  <img
                    alt=''
                    src='https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
                  />
                } */}
              </Box>
            </div>
            <div>
              <Box mb={2}>
                <Typography variant='subtitle2' fullWidth>
                  Upload Video
                </Typography>
              </Box>
              <div className={classes.uploadFile}>
                <input id='fileuploadBtn' type='file' onChange={uploadFile} />
              </div>
              <Box className={classes.uploadFileBox}>
                <label htmlFor='fileuploadBtn'>
                  <Button variant='contained' color='primary' component='span'>
                    Attach Video
                  </Button>
                </label>
              </Box>
            </div>
            <Button color='primary' variant='contained'>
              Create
            </Button>
          </div>
        </Paper>
      </Container>
    </>
  );
};

export default Create;
