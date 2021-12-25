import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
    borderRadius: 8,
    marginBottom: theme.spacing(2),
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
}));

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { id, title, location, img, price, startedBy, timeLeft, description } =
    props;

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
                  flexBasis: '40%',
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
                  flexBasis: '55%',
                }}
              >
                <Typography variant='subtitle1' paragraph>
                  {description}
                </Typography>
              </Box>
            </Box>
            <Box
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
            {/* //! Apply time remaining algo logic   */}
            {/* <Typography variant='subtitle1' paragraph>
              {timeLeft}
            </Typography> */}
          </CardContent>
        </div>
      </Card>
    </>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
