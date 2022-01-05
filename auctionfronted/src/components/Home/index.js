import React, { useContext } from 'react';
import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  FormControlLabel,
  Checkbox,
  IconButton,
} from '@material-ui/core';
import { Pagination, Skeleton } from '@material-ui/lab';

import HeroCarousel from 'components/common/HeroCarousel';
import Card from 'components/Auction/Card';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AuctionStepper from 'components/Auction/AuctionStepper';
import ShareIcon from '@material-ui/icons/Share';
import { categories, location } from 'data';
import styles from 'styles/commonStyles';
import useStyles from './styles';
import { AuctionsContext } from 'contexts/AuctionsContext';

const HomePage = () => {
  const globalClasses = styles();
  const customClasses = useStyles();
  const { auctions, loading } = useContext(AuctionsContext);

  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);

  const initialState = {
    price: '',
    categories: [],
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleFilter = (e) => {
    const { filter } = e.currentTarget.dataset;
    // console.log(`e.`, filter);
  };

  const handleShare = (e) => {
    const { item } = e.currentTarget.dataset;
    // console.log(`item`, item);
  };

  return (
    <>
      <section>
        <HeroCarousel />
      </section>
      <section className={globalClasses.topSection} />
      {/* <Container> */}
      <section
        className={`${globalClasses.containerMargin} ${globalClasses.topSection} ${globalClasses.paddingRoot}`}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant='h5'>Filter By</Typography>
            <div className={customClasses.filter}>
              <Accordion>
                <AccordionDetails>
                  <Typography
                    variant='subtitle2'
                    className={globalClasses.heading}
                    style={{ cursor: 'pointer', marginTop: 5 }}
                    onClick={handleFilter}
                    data-filter='mostViewed'
                  >
                    Most Viewed
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography
                    variant='subtitle1'
                    className={globalClasses.heading}
                  >
                    Price
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={customClasses.content}>
                    <Typography
                      variant='body1'
                      style={{ cursor: 'pointer' }}
                      onClick={handleFilter}
                      data-filter='priceAsc'
                      fullWidth
                    >
                      Price (low-high)
                    </Typography>
                    <Divider />

                    <Typography
                      variant='body1'
                      style={{ cursor: 'pointer' }}
                      onClick={handleFilter}
                      data-filter='priceDesc'
                    >
                      Price (high-low)
                    </Typography>
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography
                    variant='subtitle2'
                    className={globalClasses.heading}
                  >
                    Location
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={customClasses.content}>
                    {location &&
                      location.map((loc) => (
                        <div key={loc}>
                          <Typography
                            variant='body1'
                            style={{ cursor: 'pointer' }}
                            onClick={handleFilter}
                            data-filter='priceDesc'
                          >
                            {loc}
                          </Typography>
                          <Divider />
                        </div>
                      ))}
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography
                    variant='subtitle2'
                    className={globalClasses.heading}
                  >
                    Categories
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={customClasses.content}>
                    {categories &&
                      categories.map((cat) => (
                        <div key={cat}>
                          <FormControlLabel
                            value={cat.replace(/\s/g, '')}
                            control={<Checkbox color='primary' />}
                            label={cat}
                            labelPlacement='end'
                          />
                          <Divider />
                        </div>
                      ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Typography variant='h5'>
              <Box mb={3}>Featured Auctions</Box>
            </Typography>

            {loading &&
              Array(10)
                .fill()
                .map(() => (
                  <Skeleton
                    variant='rect'
                    height={250}
                    width={'95%'}
                    style={{
                      marginBottom: '1rem',
                    }}
                  />
                ))}
            <div className={customClasses.pagination}>
              {auctions
                ?.slice(
                  (page - 1) * rowsPerPage,
                  (page - 1) * rowsPerPage + rowsPerPage
                )
                .map((auc, ind) => {
                  return (
                    <div
                      key={auc._id}
                      className={`${globalClasses.flexDisp} ${globalClasses.cardContainer}`}
                    >
                      <div
                        className={`${globalClasses.flexJustDisp} ${globalClasses.customStyledWidth}`}
                      >
                        <div
                          className={`${globalClasses.customStyledBox} ${globalClasses.flexJustDisp} ${globalClasses.customStyledWidth}`}
                        >
                          <AuctionStepper auction={auc} />
                          {/* <SimpleCarousel */}
                          <div className={globalClasses.content}>
                            <Card auction={auc} />
                          </div>
                        </div>
                      </div>
                      {/* <div className={globalClasses.auctDetailCont}>
                          <AuctionStepper auction={auc} />

                          <div className={globalClasses.content}>
                            <Card {...auc} />
                          </div>
                        </div> */}
                      <Box>
                        <IconButton
                          aria-label='Share'
                          aria-haspopup='true'
                          data-item={auc._id}
                          onClick={handleShare}
                          style={{
                            marginLeft: 'auto',
                            color: '#000',
                          }}
                        >
                          <ShareIcon />
                          {/* {ind + 1} */}
                        </IconButton>
                      </Box>
                    </div>
                  );
                })}

              <Pagination
                color='secondary'
                count={Math.ceil(auctions.length / rowsPerPage)}
                page={page}
                onChange={handleChangePage}
              />
            </div>
          </Grid>
        </Grid>
      </section>
      {/* </Container> */}
    </>
  );
};

export default HomePage;
