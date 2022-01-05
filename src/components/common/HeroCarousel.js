import React, { useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
// import auctionmg from 'assets/auctionBanner.jpg';
import auctionHero from 'assets/auctionHero.jpg';
import { Box, Button, Typography } from '@material-ui/core';
// import { auctions } from 'data';
import styles from 'styles/heroCarouselStyles';
import { AuctionsContext } from 'contexts/AuctionsContext';
const HeroCarousel = () => {
  const { auctions } = useContext(AuctionsContext);
  const classes = styles();
  return (
    <Carousel
      //   className={classes.Carousel}
      showArrows={true}
      showThumbs={false}
      animationHandler='fade'
      swipeable={false}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
      //   onChange={onChange}
      //   onClickItem={onClickItem}
      //   onClickThumb={onClickThumb}
      className={classes.heroCarousel}
    >
      <div className={classes.introDec}>
        <img src={auctionHero} alt='Legend1' />
        <span />
        <Typography variant='h2' className={classes.title}>
          {/* Enhance your auction with online bidding */}
          Turning Assets Into Cash.
        </Typography>
      </div>

      {auctions &&
        auctions.map((auc) => (
          <div className={classes.wrapper} key={auc._id}>
            <span />
            <img src={auctionHero} alt={`${auc.title}`} />
            <div className={classes.aucItemContainer}>
              <div
                className={classes.aucImg}
                style={{
                  background: `white url(${auc.images?.[0]}) center top no-repeat`,
                  backgroundSize: 'contain',
                }}
              />
              <div className={classes.heroDesc}>
                <Typography variant='h2' fullWidth align='left'>
                  {auc.title}
                </Typography>
                <Typography variant='h4' fullWidth align='left'>
                  {auc.price}
                </Typography>
                <Box
                  pt={1}
                  sx={{
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  <Typography variant='subtitle1' fullWidth align='left'>
                    {auc.description}
                  </Typography>
                </Box>
              </div>
            </div>
            {/* <div className='legend'>
              <Typography variant='h2' className={classes.heroAuctContent}>
                Enhance your auction with online bidding
              </Typography>
            </div>
            <div
              className={classes.right}
              style={{ backgroundImage: `url(${auc.img})` }}
            ></div> */}
          </div>
        ))}
      {/* <div>
        <img src={auctionmg} alt='Legend1' />

        <p className='legend'>Legend 3</p>
      </div>
      <div>
        <img src={auctionmg} alt='Legend1' />

        <p className='legend'>Legend 4</p>
      </div> */}
    </Carousel>
  );
};

export default HeroCarousel;
