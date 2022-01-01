import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { Box, Chip, IconButton } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    // borderRadius: 8,
    // marginBottom: theme.spacing(2),
  },
  cardDetails: {
    flex: 1,
    position: 'relative',
  },
  cardMedia: {
    width: 160,
  },
  shareBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  createdInfo: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
  },
}));

export default function FeaturedPost(props) {
  const classes = useStyles();
  const {
    id,
    title,
    location,
    img,
    price,
    startedby,
    timeLeft,
    description,
    createdAt,
  } = props;

  const handleBookMark = (e) => {
    const { item } = e.currentTarget.dataset;
    // console.log(`item`, item);
  };
  const handleShare = (e) => {
    const { item } = e.currentTarget.dataset;
    // console.log(`item`, item);
  };

  return (
    <>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Box
              display='flex'
              // columnGap={5}
              justifyContent='space-between'
              //   flexBasis='40%'
              sx={{
                columnGap: 20,
              }}
            >
              <Box
                sx={{
                  flexBasis: '35%',
                }}
              >
                <Typography component='h2' variant='h5'>
                  {title}
                </Typography>
                <Typography variant='h3' color='textSecondary'>
                  {price}
                </Typography>
              </Box>
              <Box
                sx={{
                  flexBasis: '60%',
                }}
              >
                <Typography variant='body1' paragraph>
                  {description}
                </Typography>
              </Box>
            </Box>
            <Box
              mb={3}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20,
              }}
            >
              <Box display='flex' flexDirection='column' sx={{ rowGap: 5 }}>
                <Chip
                  size='small'
                  variant='outlined'
                  label={`At : ${location}`}
                  color='primary'
                />
                <Chip
                  size='small'
                  label={`Time Left : ${timeLeft}`}
                  color='primary'
                />
              </Box>
              <IconButton
                aria-label='bookmark'
                aria-haspopup='true'
                data-item={id}
                onClick={handleBookMark}
                style={{
                  marginLeft: 'auto',
                  color: '#000',
                }}
              >
                <VisibilityIcon color='primary' />
              </IconButton>
            </Box>
            <Divider />
            <div className={classes.createdInfo}>
              <Typography variant='body1' color='textSecondary'>
                Created By : {startedby}
              </Typography>
              <Typography variant='body1' color='textSecondary'>
                Created At : {createdAt}
              </Typography>
            </div>
          </CardContent>
        </div>
      </Card>
    </>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
