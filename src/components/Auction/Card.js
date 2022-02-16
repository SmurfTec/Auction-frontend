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
import { Edit } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flex: 2,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    '& .MuiCardActionArea-root': {
      display: 'flex',
      // backgroundColor: '#1a1d1e',
      backgroundColor: theme.custom.darkFore,
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
    flexBasis: '73%',
    '& h5': {
      textAlign: 'left',
    },
  },
  cardCategories: {
    flexBasis: '40%',
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: 5,
    justifyContent: 'flex-end',
    '& .MuiChip-root:first-child': {
      backgroundColor: theme.palette.primary.main,
      // boxShadow: `${theme.palette.warning.main}73 0px 0px 10px 0px`,
    },
    '& .MuiChip-root:last-child': {
      backgroundColor: theme.palette.success.main,
      // boxShadow: `${theme.palette.success.main}73 0px 0px 10px 0px`,
    },
    '& .MuiChip-root': {
      marginRight: 10,
      color: '#fff',
      // marginBottom: 10,
    },
  },
  EditButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
}));

export default function FeaturedPost({ auction, addToWatchlist, isEdit }) {
  // const GAEventsTracker = useGaEventTracker('External Links');

  const customClasses = useStyles();
  const globalClasses = styles();
  const navigate = useNavigate();

  const timeLeft = useMemo(() => {
    if (!auction) return;
    let countdown = calculateCountdown(auction.timeLine);

    if (countdown.days > 0) return `${countdown.days} days`;
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
    type,
  } = auction;

  const handleBookMark = (e) => {
    e.stopPropagation();
    const { item } = e.currentTarget.dataset;
    // console.log(`item`, item);
    addToWatchlist(item);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    navigate(`/auctionDetails/${auction._id}/edit`);
  };

  return (
    <Box
      className={globalClasses.flexAlignDisp}
      sx={{ columnGap: 10 }}
      style={{
        height: '100%',
        // paddingTop: 40,
      }}
    >
      <Card className={customClasses.card}>
        <CardActionArea
          onClick={() => {
            navigate(`/auctionDetails/${_id}`);
          }}
        >
          <div className={customClasses.cardDetails}>
            <CardContent>
              {isEdit && (
                <IconButton
                  aria-label='bookmark'
                  aria-haspopup='true'
                  data-item={_id}
                  onClick={handleEdit}
                  className={customClasses.EditButton}
                >
                  <Edit fontSize='small' color='primary' />
                </IconButton>
              )}
              <Box className={customClasses.cardIntroBox}>
                <Box className={customClasses.cardIntro}>
                  <Typography component='h2' variant='h4'>
                    {title}
                  </Typography>
                  <Typography variant='h5' color='textSecondary' align='left'>
                    ${startingPrice}
                  </Typography>

                  {auction.type === 'specific' && (
                    <Typography
                      component='h2'
                      variant='subtitle1'
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(
                          `http://www.twitter.com/${auction.twitterTarget}`
                        );
                      }}
                      className={globalClasses.taggedPerson}
                      style={{ cursor: 'pointer' }}
                    >
                      @{auction.twitterTarget}
                    </Typography>
                  )}
                  <Typography variant='subtitle1' paragraph>
                    {location}
                  </Typography>
                </Box>
              </Box>{' '}
              <Box
                className={globalClasses.flexAlignDisp}
                mb={'10px'}
                sx={{
                  justifyContent: 'space-between',
                }}
              >
                <Box display='flex' flexDirection='column' sx={{ rowGap: 10 }}>
                  <Chip
                    size='small'
                    label={`${timeLeft} Left`}
                    // label={`Time Left : ${timeLeft}`}
                    color='primary'
                  />
                </Box>
                <Box display='flex' alignItems='center'>
                  <Box className={customClasses.cardCategories}>
                    {categories.map((a, ind) => (
                      <Chip
                        key={ind}
                        size='small'
                        label={a.name}
                        color={ind === 1 ? 'secondary' : 'default'}
                      />
                    ))}
                  </Box>

                  <IconButton
                    aria-label='bookmark'
                    aria-haspopup='true'
                    data-item={_id}
                    onClick={handleBookMark}
                    // style={{ paddingInline: 0 }}
                  >
                    <VisibilityIcon fontSize='small' color='default' />
                  </IconButton>
                </Box>
              </Box>
              <Divider />
              <div className={customClasses.createdInfo}>
                <Typography variant='body2' color='textSecondary'>
                  Published By : {user?.name}
                </Typography>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  style={{
                    fontStyle: 'italic',
                  }}
                >
                  type : {type}
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
