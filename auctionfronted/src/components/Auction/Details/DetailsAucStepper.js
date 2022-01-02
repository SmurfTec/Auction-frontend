import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { MobileStepper, Paper, Button, Box } from '@material-ui/core';

import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import styles from 'styles/commonStyles';
// import EmbedVideo from './EmbedVideo';
import EmbedVideo from '../EmbedVideo';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 350,
    backgroundColor: '#fff',
    borderRight: '1px solid rgb(229, 232, 235)',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      // flex: 2,
      flexBasis: '35%',
      // maxWidth: 350,
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  imgDiv: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  img: {
    // /height: 285,
    // display: 'block',
    overflow: 'hidden',
    width: '100%',
    height: 300,
    objectFit: 'contain',

    // [theme.breakpoints.up('md')]: {
    //   height: '100%',
    // },
  },
  mobileStepper: {
    background: '#fff',
    minHeight: 70,
  },
  imgCont: {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 300,

    [theme.breakpoints.up('md')]: {
      flex: 2,
    },
  },
}));

const DetailsAucStepper = ({ auction }) => {
  const classes = useStyles();
  const globalClasses = styles();

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [carousel, setCarousel] = React.useState(null);
  //   const maxSteps = carousel.length;

  React.useEffect(() => {
    const arr = [];

    if (auction) {
      arr.push({ type: 'video', url: auction?.['video'] });
      auction?.img.map((i) => arr.push({ type: 'img', images: i }));
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
        <Paper className={`${classes.root}`}>
          {carousel?.[activeStep].type === 'video' ? (
            <EmbedVideo embedUrl='rokGy0huYEA' />
          ) : (
            // <div className={classes.imgDiv}>
            <Box
              className={classes.imgCont}
              sx={{
                backgroundImage: `url(${carousel[activeStep].images})`,
              }}
            />
            //   <img
            //   className={classes.img}
            //   src={carousel[activeStep].images}
            //   alt={carousel[activeStep].label}
            // />
            // </Box>
            // </div>
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

export default DetailsAucStepper;
