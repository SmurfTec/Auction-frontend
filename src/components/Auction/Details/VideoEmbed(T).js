import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  videoResponsive: {
    overflow: 'hidden',
    position: 'relative',
    objectFit: 'contain',
    height: 300,
    [theme.breakpoints.up('md')]: {
      height: '100%',
    },
    width: '100%',
  },

  iframe: {
    width: '100%',
    left: 0,
    top: 0,
    height: '100%',
    position: 'absolute',
  },
}));

const VideoEmbed = ({ embedUrl }) => {
  const classes = useStyles();
  return (
    <div className={classes.videoResponsive}>
      <iframe
        className={classes.iframe}
        // width='400'
        // height='200'
        src={`https://www.youtube.com/embed/${embedUrl}`}
        //   src={embedUrl}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  );
};

VideoEmbed.propTypes = {
  embedUrl: PropTypes.string.isRequired,
};

export default VideoEmbed;
