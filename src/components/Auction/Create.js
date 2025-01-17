import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import useManyInputs from 'hooks/useManyInputs';
import React, { useContext, useEffect, useMemo } from 'react';
import { Autocomplete, Skeleton } from '@material-ui/lab';
import { locations } from 'data';
import ImageIcon from '@material-ui/icons/Image';
import { CategoriesContext } from 'contexts/CategoriesContext';
import { AuctionsContext } from 'contexts/AuctionsContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useToggleInput } from 'hooks';

import styles from './createAuctionStyles';
import SimpleCarousel from 'components/common/SimpleCarousel';
import PublishAuction from './PublishAuctionDialog';
import { useNavigate, useParams } from 'react-router-dom';
import { useGaTracker } from 'hooks';

const Create = ({ isUpdate }) => {
  useGaTracker();
  const classes = styles();
  const { categories } = useContext(CategoriesContext);
  const {
    createNewAuction,
    isLoggedIn,
    myAuctions,
    loadingMyAuctions,
    fetchMyAuctions,
    updateAuction,
  } = useContext(AuctionsContext);
  const [isSubmitting, toggleSubmitting] = useToggleInput(false);
  const [validating, toggleValidating, setValidating] = useToggleInput(true);
  const disabled = false;
  const { id } = useParams();
  const navigate = useNavigate();
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
    twitterTarget: undefined,
    instagramTarget: undefined,
  };
  const [inputState, handleTxtChange, , changeInput, , setInputstate] =
    useManyInputs(initialState);
  const [disable, setDisable] = React.useState(false);
  //   const [open, setOpen] = React.useState(false);
  const [isImageUploading, toggleImageUploading] = useToggleInput(false);
  const [isVideoUploading, toggleVideoUploading] = useToggleInput(false);

  const [isPublishOpen, togglePublishOpen] = useToggleInput(false);

  useEffect(() => {
    // * If user wants to update auction , validate if auction is of user
    console.log('isUpdate', isUpdate);

    if (!isUpdate) {
      console.log('here');
      return setValidating(false);
    }

    if (!myAuctions) return fetchMyAuctions();

    if (!isLoggedIn || loadingMyAuctions) return toggleValidating();

    // * Find Auction
    let editAuc = myAuctions.find((el) => el._id === id);
    if (!editAuc) return navigate('/');

    setInputstate({ ...editAuc });

    setValidating(false);
  }, [isUpdate, myAuctions, loadingMyAuctions, isLoggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputState.images.length)
      return toast.error('Select atleast 1 image for auction');

    if (!inputState.images.length)
      return toast.error('Select atleast 1 image for auction');

    togglePublishOpen();

    // setOpen(true);
  };

  const handleCreate = (status) => {
    togglePublishOpen();
    toggleSubmitting();

    if (isUpdate)
      updateAuction({ ...inputState, status }, id, toggleSubmitting);
    else createNewAuction({ ...inputState, status }, toggleSubmitting);
  };

  const handleTimeline = (e) => {
    changeInput('timeLine', e.target.value);
  };

  const handleType = (e) => {
    changeInput('type', e.target.value);
  };
  const handleLocation = (e) => {
    changeInput('location', e.target.value);
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
          const uploadedImage = res.data.secure_url;

          cb(uploadedImage);
        };
      } else {
        toast.error(
          `Only ${fileType?.[0].split('/')[0]} files are acceptable !`
        );
      }
    } catch (err) {
      toast(
        err?.response?.data?.message || err.message || 'Something Went Wrong'
      );
      // console.log(`err`, err);
    } finally {
      toggleFunc();
    }
  };

  const deleteImg = (idx) => {
    changeInput(
      'images',
      inputState.images.filter((_, index) => index !== idx)
    );
  };

  const isSpecificAuction = useMemo(
    () => inputState.type === 'specific',
    [inputState.type]
  );

  return (
    <Box my={6}>
      <Box mb={3}>
        <Typography variant='h4' fullWidth align='center'>
          {validating ? (
            <Skeleton width={200} style={{ margin: 'auto' }} />
          ) : isUpdate ? (
            'Update Auction'
          ) : (
            'Create Auction'
          )}
        </Typography>
      </Box>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          {validating ? (
            <Grid container spacing={3}>
              {Array(4)
                .fill()
                .map((_, idx) => (
                  <Grid key={idx} item xs={12} sm={6}>
                    <Skeleton />
                  </Grid>
                ))}
              <Grid item xs={12} sm={8}>
                <Skeleton />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Skeleton />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Skeleton />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Skeleton />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Skeleton />
              </Grid>
            </Grid>
          ) : (
            <>
              <Typography gutterBottom variant='h5'>
                How It Works
              </Typography>
              <ul style={{ marginLeft: '1rem' }}>
                <li>
                  <Typography gutterBottom variant='body2'>
                    Thinking of a unique item or experience you want that
                    doesn't exist yet or you can't find normally?
                  </Typography>
                </li>
                <li>
                  <Typography gutterBottom variant='body2'>
                    Enter its details below and publish it on lotpot to see it
                    get claimed and come true!
                  </Typography>
                </li>
                <li>
                  <Typography gutterBottom variant='body2'>
                    Specific - if it's about someone or something specific,
                    enter their social media handles so only they can get
                    notified and come along to claim it and provide your item or
                    service
                  </Typography>
                </li>
                <li>
                  <Typography gutterBottom variant='body2'>
                    Open-ended - if you want to select the best person to
                    fulfill your dream and let anyone or more than one person
                    offer to claim the auction once bidding stops, then select
                    this option
                  </Typography>
                </li>
                <li>
                  <Typography gutterBottom variant='body2'>
                    If you don't end up being the top bidder on your auction
                    idea, we'll still pay you 1% of the total price
                    automatically to your connected account just for your idea,
                    so keep 'em coming!
                  </Typography>
                </li>
              </ul>
              <br />

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
                    {/* <TextField
                    name='location'
                    value={inputState.location}
                    label='Location'
                    onChange={handleTxtChange}
                    variant='outlined'
                    required
                  /> */}
                    <FormControl
                      variant='outlined'
                      className={classes.selectControl}
                      fulWidth
                    >
                      <InputLabel
                        htmlFor='outlined-age-native-simple'
                        fullWidth
                      >
                        Location
                      </InputLabel>
                      <Select
                        value={inputState.location}
                        onChange={handleLocation}
                        label='Location'
                        fullWidth
                        required
                      >
                        {locations.map((loc) => (
                          <MenuItem key={loc} value={loc.toLowerCase()}>
                            {loc}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name='startingPrice'
                      value={inputState.startingPrice}
                      label='Starting Price $'
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
                      <InputLabel
                        htmlFor='outlined-age-native-simple'
                        fullWidth
                      >
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
                          label='Categories'
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
                      <InputLabel
                        htmlFor='outlined-age-native-simple'
                        fullWidth
                      >
                        Auction Type
                      </InputLabel>
                      <Select
                        value={inputState.type}
                        onChange={handleType}
                        label='Auction Type'
                        fullWidth
                        required
                      >
                        <MenuItem value={'specific'}>Specific</MenuItem>
                        <MenuItem value={'openEnded'}>Open Ended</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  {isSpecificAuction && (
                    <>
                      <Grid item xs={12}>
                        <Typography
                          variant='body2'
                          style={{ color: '#7d2ae8' }}
                        >
                          &nbsp; NOTE : Only a specific person can claim this
                          type of auction
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          name='twitterTarget'
                          required
                          value={inputState.twitterTarget}
                          label='Twitter Username'
                          onChange={handleTxtChange}
                          variant='outlined'
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          name='instagramTarget'
                          required
                          value={inputState.instagramTarget}
                          label='Instagram Username'
                          onChange={handleTxtChange}
                          variant='outlined'
                          fullWidth
                        />
                      </Grid>
                    </>
                  )}
                  {!isSpecificAuction && (
                    <Grid item xs={12}>
                      <Typography variant='body2' style={{ color: '#7d2ae8' }}>
                        &nbsp; NOTE : Anyone can claim this type of auction
                      </Typography>
                    </Grid>
                  )}
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
                        <SimpleCarousel
                          deleteImg={deleteImg}
                          type='image'
                          images={inputState.images}
                        />
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
                          Add a Video
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
            </>
          )}
          <Box mt={5}>
            <Divider />
          </Box>
          <Box mt={3} style={{ textAlign: 'right' }}>
            {validating ? (
              <Skeleton width={200} style={{ marginLeft: 'auto' }} />
            ) : (
              <>
                <Button
                  color='primary'
                  variant='contained'
                  form='createform'
                  type='submit'
                  disabled={isSubmitting}
                  className={classes.uploadBtn}
                >
                  {isUpdate ? 'Update' : 'Create'} Auction
                  {isSubmitting && <CircularProgress size={25} />}
                </Button>
                {isUpdate && (
                  <Button
                    color='secondary'
                    variant='contained'
                    form='createform'
                    disabled={isSubmitting}
                    className={classes.uploadBtn}
                    style={{ marginLeft: 10 }}
                    onClick={() => navigate(-1)}
                  >
                    Discard Changes
                  </Button>
                )}
              </>
            )}
          </Box>
        </Paper>
      </div>
      <PublishAuction
        open={isPublishOpen}
        toggleDialog={togglePublishOpen}
        success={handleCreate}
      />
    </Box>
  );
};

export default Create;
