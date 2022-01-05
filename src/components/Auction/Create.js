import {
  Box,
  Button,
  Chip,
  CircularProgress,
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
import React, { useContext } from 'react';
import { Autocomplete } from '@material-ui/lab';
// import { categories } from 'data';
import AuctionStepper from './AuctionStepper';
import VideocamIcon from '@material-ui/icons/Videocam';
import ImageIcon from '@material-ui/icons/Image';
import { CategoriesContext } from 'contexts/CategoriesContext';
import { AuctionsContext } from 'contexts/AuctionsContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useToggleInput } from 'hooks';

import styles from './createAuctionStyles';
import SimpleCarousel from 'components/common/SimpleCarousel';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const classes = styles();
  const navigate = useNavigate();
  const { categories } = useContext(CategoriesContext);
  const { createNewAuction } = useContext(AuctionsContext);
  const [isSubmitting, toggleSubmitting] = useToggleInput(false);
  const disabled = false;
  const initialState = {
    title: '',
    description: '',
    location: '',
    startingPrice: '',
    images: [],
    video: '',
    categories: [],
    type: '',
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
  const [isImageUploading, toggleImageUploading] = useToggleInput(false);
  const [isVideoUploading, toggleVideoUploading] = useToggleInput(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`inputState`, inputState);
    toggleSubmitting();
    createNewAuction(inputState, () => {
      toast.success('Auction Created Successfully!');
      navigate('/');
      toggleSubmitting();
    });
    // setOpen(true);
  };

  const handleTimeline = (e) => {
    changeInput('timeLine', e.target.value);
  };

  const handleType = (e) => {
    changeInput('type', e.target.value);
  };

  const handleCatOnChange = (e, newValue) => {
    changeInput('categories', newValue);
    if (newValue.length === 3) setDisable(true);
    else setDisable(false);
  };

  const handleImageUpload = async (e, options, toggleFunc, cb) => {
    toggleFunc();
    const selectedFile = e.target.files[0];

    // * whoever calls the func, give us options in 2nd param,
    // *
    const { fileType } = options;
    try {
      console.log(`selectedFile.type`, selectedFile.type);
      if (selectedFile && selectedFile.type.includes(fileType)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = async (e) => {
          //console.log(`result onLoadEnd`, e.target.result);
          const file = e.target.result;

          // TODO  Delete Image from cloudinary if it exists on this user

          // // * 1 Upload Image on Cloudinary
          const formData = new FormData();
          formData.append('file', file);
          formData.append('folder', 'auction-app');
          formData.append(
            'upload_preset',
            process.env.REACT_APP_CLOUDINARY_PRESET
          );

          const res = await axios.post(
            `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/auto/upload`,
            formData
          );
          const uploadedImage = res.data.url;

          cb(uploadedImage);
        };
      } else {
        toast.error('Only Image files are acceptable !');
      }
    } catch (err) {
      toast(
        err?.response?.data?.message || err.message || 'Something Went Wrong'
      );
      console.log(`err`, err);
    } finally {
      toggleFunc();
    }
  };

  return (
    <Box my={6}>
      <Box mb={3}>
        <Typography variant='h4' fullWidth align='center'>
          Create Auction
        </Typography>
      </Box>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <form id='createform' onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='title'
                  value={inputState.title}
                  label='Title'
                  onChange={handleTxtChange}
                  variant='outlined'
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='location'
                  value={inputState.location}
                  label='Location'
                  onChange={handleTxtChange}
                  variant='outlined'
                  required
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
                  required
                  type='number'
                  inputProps={{ min: 10 }}
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

              <Grid item xs={12} sm={8}>
                <Autocomplete
                  className={classes.categories}
                  multiple
                  disabled={disabled || disable}
                  id='categories'
                  value={inputState.categories}
                  onChange={handleCatOnChange}
                  options={categories}
                  required
                  getOptionLabel={(option) => option.name}
                  renderTags={(tagValue, getTagProps) =>
                    tagValue.map((option, index) => (
                      <Chip
                        label={option.name}
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
              <Grid item xs={12} sm={4}>
                <FormControl
                  variant='outlined'
                  className={classes.selectControl}
                  fulWidth
                >
                  <InputLabel htmlFor='outlined-age-native-simple' fullWidth>
                    Auction Type
                  </InputLabel>
                  <Select
                    value={inputState.type}
                    onChange={handleType}
                    label='Type'
                    fullWidth
                  >
                    <MenuItem value={'specific'}>Specific</MenuItem>
                    <MenuItem value={'openEnded'}>Open Ended</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  name='description'
                  required
                  multiline
                  rows={4}
                  value={inputState.description}
                  label='Description'
                  onChange={handleTxtChange}
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box mt={2} className={classes.uploadDiv}>
                  {inputState.images.length > 0 ? (
                    <SimpleCarousel type='image' images={inputState.images} />
                  ) : (
                    <span>
                      <ImageIcon fontSize='large' />
                      Add upto 5 images
                    </span>
                  )}
                </Box>
                <Box mt={2}>
                  <input
                    accept='image/*'
                    style={{ display: 'none' }}
                    id='image'
                    disabled={isImageUploading}
                    multiple
                    type='file'
                    onChange={(e) =>
                      handleImageUpload(
                        e,
                        {
                          fileType: ['image/'],
                        },
                        toggleImageUploading,
                        (img) => {
                          setInputstate((st) => ({
                            ...st,
                            images: [...st.images, img],
                          }));
                        }
                      )
                    }
                  />
                  <label htmlFor='image' style={{ width: 'fit-content' }}>
                    {' '}
                    <Button
                      className={classes.uploadBtn}
                      variant='contained'
                      color='primary'
                      component='span'
                      disabled={isImageUploading}
                    >
                      Upload Image
                      {isImageUploading && <CircularProgress size={25} />}
                    </Button>
                  </label>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box mt={2} className={classes.uploadDiv}>
                  {inputState.video ? (
                    <SimpleCarousel video={inputState.video} type='video' />
                  ) : (
                    <span>
                      <ImageIcon fontSize='large' />
                      Add a cideo
                    </span>
                  )}
                </Box>
                <Box mt={2}>
                  <input
                    accept='video/*'
                    style={{ display: 'none' }}
                    id='video'
                    disabled={isVideoUploading}
                    multiple
                    type='file'
                    onChange={(e) =>
                      handleImageUpload(
                        e,
                        {
                          fileType: ['video/'],
                        },
                        toggleVideoUploading,
                        (vid) => {
                          setInputstate((st) => ({
                            ...st,
                            video: vid,
                          }));
                        }
                      )
                    }
                  />
                  <label htmlFor='video' style={{ width: 'fit-content' }}>
                    <Button
                      className={classes.uploadBtn}
                      variant='contained'
                      color='primary'
                      component='span'
                      disabled={isVideoUploading}
                    >
                      {isVideoUploading && <CircularProgress size={25} />}
                      Upload Video
                    </Button>
                  </label>
                </Box>
              </Grid>
            </Grid>
          </form>
          <Box mt={5}>
            <Divider />
          </Box>
          <Box mt={3} style={{ textAlign: 'right' }}>
            <Button
              color='primary'
              variant='contained'
              form='createform'
              type='submit'
              disabled={isSubmitting}
              className={classes.uploadBtn}
            >
              Create Auction
              {isSubmitting && <CircularProgress size={25} />}
            </Button>
          </Box>
        </Paper>
      </div>
    </Box>
  );
};

export default Create;
