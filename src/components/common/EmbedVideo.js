import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  videoResponsive: {
    overflow: 'hidden',
    position: 'relative',
    height: 200,
    width: '100%',
    flex: 2,

    [theme.breakpoints.down('sm')]: {
      height: 300,
    },
  },

  iframe: {
    width: '100%',
    left: 0,
    top: 0,
    height: '100%',
    position: 'absolute',
  },
}));

const EmbedVideo = ({ embedUrl }) => {
  const classes = useStyles();
  return (
    <div className={classes.videoResponsive}>
      <iframe
        className={classes.iframe}
        // width='400'
        height='200'
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

EmbedVideo.propTypes = {
  embedUrl: PropTypes.string.isRequired,
};

export default EmbedVideo;
