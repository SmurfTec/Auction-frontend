import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { Box, Chip, Divider, IconButton } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useNavigate } from 'react-router-dom';
import styles from 'styles/commonStyles';
import { calculateCountdown } from 'utils/dateFunctions';
import { formatDistanceToNow } from 'date-fns';

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
    [theme.breakpoints.up('md')]: {
      minHeight: 250,
    },
  },
  createdInfo: {
    width: '100%',
    display: 'flex',
    marginTop: theme.spacing(2),
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    columnGap: 10,
  },
  cardIntroBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardIntro: {
    flexBasis: '50%',
  },
  cardCategories: {
    flexBasis: '40%',
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    '& .MuiChip-root:first-child': {
      backgroundColor: theme.palette.warning.main,
    },
    '& .MuiChip-root': {
      marginRight: 10,
      marginBottom: 10,
    },
  },
}));

export default function FeaturedPost({ auction, addToWatchlist }) {
  const customClasses = useStyles();
  const globalClasses = styles();
  const navigate = useNavigate();

  const timeLeft = useMemo(() => {
    if (!auction) return;
    let countdown = calculateCountdown(auction.timeLine);

    if (countdown.days > 0)
      return `${countdown.days} days ${countdown.hours} hours`;
    else return `${countdown.hours} hours ${countdown.min} mins`;
  }, [auction]);
  if (!auction) return <div></div>;

  const {
    _id,
    title,
    location,
    startingPrice,
    user,
    createdAt,
    publishDate,
    categories,
  } = auction;

  const handleBookMark = (e) => {
    e.stopPropagation();
    const { item } = e.currentTarget.dataset;
    // console.log(`item`, item);
    addToWatchlist(item);
  };

  const handleShare = (e) => {
    const { item } = e.currentTarget.dataset;
    // console.log(`item`, item);
  };

  return (
    <Box className={globalClasses.flexAlignDisp} sx={{ columnGap: 10 }}>
      <Card className={customClasses.card}>
        <CardActionArea
          onClick={() => {
            navigate(`/auctionDetails/${_id}`);
          }}
        >
          <div className={customClasses.cardDetails}>
            <CardContent>
              <Box className={customClasses.cardIntroBox}>
                <Box className={customClasses.cardIntro}>
                  <Typography component='h2' variant='h5'>
                    {title}
                  </Typography>
                  <Typography variant='h3' color='textSecondary'>
                    {startingPrice}$
                  </Typography>

                  <Typography variant='subtitle1' paragraph>
                    {location}
                  </Typography>
                </Box>
                <Box className={customClasses.cardCategories}>
                  {categories.map((a, ind) => (
                    <Chip
                      size='small'
                      label={a.name}
                      color={
                        ind === 0
                          ? 'secondary'
                          : ind === 1
                          ? 'primary'
                          : 'secondary'
                      }
                    />
                  ))}
                </Box>
              </Box>{' '}
              <Box
                className={globalClasses.flexAlignDisp}
                sx={{
                  justifyContent: 'space-between',
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
                    data-item={_id}
                    onClick={handleBookMark}
                  >
                    <VisibilityIcon fontSize='small' color='primary' />
                  </IconButton>
                </Box>
              </Box>
              <Divider />
              <div className={customClasses.createdInfo}>
                <Typography variant='body2' color='textSecondary'>
                  Created By : {user?.name}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  Published{' '}
                  {formatDistanceToNow(new Date(publishDate || createdAt))} ago
                  {/* Created At : {new Date(createdAt).toLocaleDateString()} */}
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
          data-item={_id}
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
