import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { MobileStepper, Paper, Button, IconButton } from '@material-ui/core';
import EmbedVideo from './EmbedVideo';

import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 350,
    flex: 2,
    backgroundColor: '#fff',
    borderRight: '1px solid rgb(229, 232, 235)',
    [theme.breakpoints.up('md')]: {
      maxWidth: 350,
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 200,
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    // margin: '0 auto',
    objectFit: 'contain',

    [theme.breakpoints.down('sm')]: {
      height: 225,
    },

    // [theme.breakpoints.up('md')]: {
    //   height: '84.2%',
    // },
  },
  mobileStepper: {
    background: '#fff',
  },
}));

const Simpleimages = ({ type, images, video }) => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();

  const classes = useStyles();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Paper className={classes.root}>
      {type === 'video' ? (
        <video width='100%' height='100%' controls>
          <source src={video} type='video/mp4' />
          Your browser does not support HTML video.
        </video>
      ) : (
        <>
          <img
            className={classes.img}
            src={images[activeStep]}
            alt={images[activeStep]?.slice(0, 5)}
          />
          <MobileStepper
            steps={images.length}
            position='static'
            variant='dots'
            activeStep={activeStep}
            className={classes.mobileStepper}
            nextButton={
              <Button
                size='small'
                onClick={handleNext}
                disabled={activeStep === images.length - 1}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size='small'
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </Button>
            }
          />
        </>
      )}
    </Paper>
  );
};

export default Simpleimages;
