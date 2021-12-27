import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
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
import AuctionStepper from './AuctionStepper';
import VideocamIcon from '@material-ui/icons/Videocam';
import ImageIcon from '@material-ui/icons/Image';
import Footer from 'components/common/Footer';

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
    width: '100%',
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
  },
  uploadDiv: {
    border: `1px solid ${theme.palette.text.secondary}`,
    borderRadius: 10,
    minHeight: 250,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',

    '& span': {
      '& svg': {
        color: theme.palette.primary.main,
      },
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      top: '50%',
      transform: 'translateY(-50%)',
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
          <Box mb={3}>
            <Typography variant='h4' fullWidth align='center'>
              Create Auction
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <TextField
                name='description'
                value={inputState.description}
                label='Description'
                onChange={handleTxtChange}
                variant='outlined'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name='title'
                value={inputState.title}
                label='Title'
                onChange={handleTxtChange}
                variant='outlined'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name='location'
                value={inputState.location}
                label='Location'
                onChange={handleTxtChange}
                variant='outlined'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name='startingPrice'
                value={inputState.startingPrice}
                label='Starting Price'
                onChange={handleTxtChange}
                variant='outlined'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                variant='outlined'
                className={classes.selectControl}
                fulWidth
              >
                <InputLabel htmlFor='outlined-age-native-simple' fullWidth>
                  TimeLine
                </InputLabel>
                <Select
                  value={inputState.timeLine}
                  onChange={handleTimeline}
                  label='TimeLine'
                  fullWidth
                >
                  <MenuItem value={7}>1 week</MenuItem>
                  <MenuItem value={14}>2 week</MenuItem>
                  <MenuItem value={21}>3 week</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12}>
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
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.uploadFile}>
                <input id='fileuploadBtn' type='file' onChange={uploadFile} />
              </div>
              <Box mt={2} className={classes.uploadDiv}>
                <label htmlFor='fileuploadBtn'></label>
                <span>
                  <ImageIcon fontSize='large' />
                  Add upto 5 images
                </span>
              </Box>
              <Box mt={2}>
                <Button variant='contained' color='primary' component='span'>
                  Upload Image
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.uploadFile}>
                <input id='fileuploadBtn' type='file' onChange={uploadFile} />
              </div>
              <Box mt={2} className={classes.uploadDiv}>
                <label htmlFor='fileuploadBtn'></label>
                <span>
                  <ImageIcon fontSize='large' />
                  Add video
                </span>
              </Box>
              <Box mt={2}>
                <Button variant='contained' color='primary' component='span'>
                  Upload Video
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Divider />
          </Box>
          <Box mt={3} style={{ textAlign: 'right' }}>
            <Button color='primary' variant='contained'>
              Create Auction
            </Button>
          </Box>
        </Paper>
      </Container>

      <Footer />
    </>
  );
};

export default Create;
