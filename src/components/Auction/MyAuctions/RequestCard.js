import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import {
  Box,
  Button,
  CardActions,
  Chip,
  Divider,
  IconButton,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useNavigate } from 'react-router-dom';
import styles from 'styles/commonStyles';
import { formatDistanceToNow } from 'date-fns';
import { Edit } from '@material-ui/icons';
import Label from 'components/common/Label';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    '& .MuiCardActionArea-root': {
      display: 'flex',
    },
  },
  cardDetails: {
    flex: 1,
    position: 'relative',
    height: '100%',
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

  EditButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
}));

export default function RequestCard({
  request,
  handleAccept,
  handleReject,
  isEdit,
  auctionId,
}) {
  // const GAEventsTracker = useGaEventTracker('External Links');

  const customClasses = useStyles();
  const globalClasses = styles();
  const navigate = useNavigate();

  const { _id, message, status, createdAt } = request;

  const handleClick = () => {
    window.open(`/auctionDetails/${auctionId}`);
  };

  const statusColor = useMemo(() => {
    let condition;
    switch (status) {
      case 'pending':
        condition = 'warning';
        break;
      case 'accepted':
        condition = 'success';
        break;
      case 'rejected':
        condition = 'error';
        break;

      default:
        condition = 'warning';
    }

    return condition;
  }, [status]);

  if (!request) return <div></div>;
  return (
    <Box
      className={globalClasses.flexAlignDisp}
      sx={{ columnGap: 10, height: '100%' }}
    >
      <Card className={customClasses.card}>
        <div className={customClasses.cardDetails}>
          <CardContent dividers>
            <Box className={customClasses.cardIntroBox}>
              <Box className={customClasses.cardIntro}>
                <Typography component='h2' variant='body1'>
                  {message}
                </Typography>
              </Box>
            </Box>{' '}
            <Button
              onClick={handleClick}
              size='small'
              variant='contained'
              color='secondary'
            >
              View Auction
            </Button>
          </CardContent>
        </div>

        <CardActions
          style={{
            justifyContent: 'space-between',
          }}
        >
          <Box display='flex' flexDirection='column'>
            <Chip
              size='small'
              label={formatDistanceToNow(new Date(createdAt))}
              // label={`Time Left : ${timeLeft}`}
              color='primary'
            />
          </Box>
          {status === 'pending' ? (
            <Box>
              <Button
                style={{ marginRight: '10px' }}
                size='small'
                variant='contained'
                color='primary'
                data-id={request.claimBid?._id}
                onClick={handleAccept}
              >
                Accept
              </Button>
              <Button
                data-id={request.claimBid?._id}
                onClick={handleReject}
                size='small'
                variant='contained'
                color='secondary'
              >
                Reject
              </Button>
            </Box>
          ) : (
            <Label size='large' color={statusColor}>
              {status.toUpperCase()}
            </Label>
          )}
        </CardActions>
      </Card>
    </Box>
  );
}

RequestCard.propTypes = {
  post: PropTypes.object,
};
