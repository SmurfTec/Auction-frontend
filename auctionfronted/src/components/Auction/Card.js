import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { Box, Chip, Divider, IconButton } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ShareIcon from '@material-ui/icons/Share';
import { Link, useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flex: 2,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    '& .MuiCardActionArea-root': {
      display: 'flex',
    },
  },
  cardDetails: {
    flex: 1,
    position: 'relative',
    minHeight: 250,
  },
  cardMedia: {
    width: 160,
    height: 200,
  },
  createdInfo: {
    width: '100%',
    display: 'flex',
    marginTop: theme.spacing(2),
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    columnGap: 10,
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

  const navigate = useNavigate();

  const handleBookMark = (e) => {
    e.stopPropagation();
    const { item } = e.currentTarget.dataset;

    // console.log(`item`, item);
  };

  const handleShare = (e) => {
    const { item } = e.currentTarget.dataset;
    // console.log(`item`, item);
  };

  return (
    <Box display='flex' sx={{ columnGap: 10, alignItems: 'center' }}>
      <Card className={classes.card}>
        <CardActionArea
          onClick={() => {
            navigate(`/auctionDetails/${id}`);
          }}
        >
          {/* <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={img}
              title={title}
            />
          </Hidden> */}

          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component='h2' variant='h5'>
                {title}
              </Typography>
              <Typography variant='h3' color='textSecondary'>
                {price}
              </Typography>
              {/* <Typography variant='subtitle1' paragraph>
              {description}
            </Typography> */}
              <Typography variant='subtitle1' paragraph>
                {location}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box display='flex' flexDirection='column' sx={{ rowGap: 10 }}>
                  <Chip
                    size='small'
                    label={`Time Left : ${timeLeft}`}
                    color='primary'
                  />
                </Box>
                <Box mb={2}>
                  <IconButton
                    aria-label='bookmark'
                    aria-haspopup='true'
                    data-item={id}
                    onClick={handleBookMark}
                  >
                    <VisibilityIcon fontSize='small' color='primary' />
                  </IconButton>
                </Box>
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
        </CardActionArea>
      </Card>
      {/* <Box>
        <IconButton
          aria-label='Share'
          aria-haspopup='true'
          data-item={id}
          onClick={handleShare}
          style={{
            marginLeft: 'auto',
            color: '#000',
          }}
        >
          <ShareIcon />
        </IconButton>
      </Box> */}
    </Box>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
