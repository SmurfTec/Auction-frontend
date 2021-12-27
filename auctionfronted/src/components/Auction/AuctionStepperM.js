import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { MobileStepper, Paper, Typography, Button } from '@material-ui/core';

import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import EmbedVideo from './EmbedVideo';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Year in 2020',
    type: 'video',
    url: '',
  },
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    type: 'img',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    type: 'img',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    type: 'img',
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    type: 'img',

    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 350,
    flex: 1,
    backgroundColor: '#fff',
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
    margin: '0 auto',

    [theme.breakpoints.up('sm')]: {
      maxWidth: 400,
    },
  },
  mobileStepper: {
    background: '#fff',
  },
}));

const AuctionStepper = ({ auction }) => {
  const classes = useStyles();

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [carousel, setCarousel] = React.useState(null);
  //   const maxSteps = carousel.length;

  React.useEffect(() => {
    const arr = [];

    if (auction) {
      arr.push({ type: 'video', url: auction?.['video'] });
      auction.img.map((i) => arr.push({ type: 'img', images: i }));

      setCarousel(arr);
    } else return;
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      {carousel && (
        <Paper className={classes.root}>
          {carousel?.[activeStep].type === 'video' ? (
            <EmbedVideo embedUrl='rokGy0huYEA' />
          ) : (
            <img
              className={classes.img}
              src={carousel[activeStep].images}
              alt={carousel[activeStep].label}
            />
          )}
          <MobileStepper
            steps={carousel.length}
            position='static'
            variant='dots'
            activeStep={activeStep}
            className={classes.mobileStepper}
            nextButton={
              <Button
                size='small'
                onClick={handleNext}
                disabled={activeStep === carousel.length - 1}
              >
                Next
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
                Back
              </Button>
            }
          />
        </Paper>
      )}
    </>
  );
};

export default AuctionStepper;
