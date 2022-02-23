import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { MobileStepper, Paper, Button } from '@material-ui/core';

import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import EmbedVideo from '../common/EmbedVideo';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 350,
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    height: 200,
    backgroundColor: 'transparent',
    borderRight: '1px solid #3a3a3a',
    [theme.breakpoints.up('md')]: {
      maxWidth: 350,
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    // backgroundColor: theme.palette.background.default,
  },
  img: {
    width: '100%',
    height: '100%',
    display: 'block',
    overflow: 'hidden',
    // objectFit: 'contain',
    // objectFit: 'cover',
    backgroundColor: '#fff',
    // paddingTop: 20,
    // [theme.breakpoints.down('sm')]: {
    //   height: 300,
    // },

    // [theme.breakpoints.up('md')]: {
    //   height: '84.2%',
    // },
  },
  mobileStepper: {
    backgroundColor: theme.custom.svg,
    '& svg': {
      color: '#dcd9d4',
    },
  },
}));

const AuctionStepper = ({ auction }) => {
  const classes = useStyles();

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [carousel, setCarousel] = React.useState([
    { type: 'img', url: auction?.images[0] },
  ]);
  //   const maxSteps = carousel.length;

  React.useEffect(() => {
    if (!auction) return;
    const arr = [];

    if (auction) {
      if (auction.video) arr.push({ type: 'video', url: auction['video'] });
      auction.images.map((i) => arr.push({ type: 'img', url: i }));
      setCarousel(arr);
    } else return;
  }, [auction]);

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
            // <EmbedVideo embedUrl={auction.video} />
            <video width='100%' height='100%' controls>
              <source src={auction.video} type='video/mp4' />
              Your browser does not support HTML video.
            </video>
          ) : (
            <img
              className={classes.img}
              src={carousel[activeStep].url}
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
        </Paper>
      )}
    </>
  );
};

export default AuctionStepper;
