import React, { useContext, useEffect, useMemo, useState } from 'react';
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
  FormGroup,
} from '@material-ui/core';
import { Pagination, Skeleton } from '@material-ui/lab';

import HeroCarousel from 'components/common/HeroCarousel';
import Card from 'components/Auction/Card';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AuctionStepper from 'components/Auction/AuctionStepper';
import ShareIcon from '@material-ui/icons/Share';
import { location as locations } from 'data';
import styles from 'styles/commonStyles';
import useStyles from './styles';
import { AuctionsContext } from 'contexts/AuctionsContext';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { v4 } from 'uuid';
import { CategoriesContext } from 'contexts/CategoriesContext';
import { filterFalseValues } from 'utils/objectMethods';

const HomePage = () => {
  const globalClasses = styles();
  const customClasses = useStyles();
  const { auctions, loading, addToWatchlist } = useContext(AuctionsContext);
  const { categories, loading: loadingCategories } =
    useContext(CategoriesContext);
  const location = useLocation();

  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);
  const [filteredAuctions, setFilteredAuctions] = useState([]);

  const [categoriesFilters, setCategoriesFilters] = useState();

  // * Filter by search
  const parsedQuery = useMemo(() => {
    return queryString.parse(location.search);
  }, [location.search]);

  const handleCategoryChange = (e) => {
    setCategoriesFilters((st) => ({
      ...st,
      [e.target.name]: e.target.checked,
    }));
  };

  useEffect(() => {
    if (!categoriesFilters || !auctions) return;
    let newAuctions = auctions;

    // * obj ={ 1 : true , 2 :true, 3:Fasle , 4 :false}
    // * We have to filter false values
    let filterCats = filterFalseValues(categoriesFilters);
    console.log(`filterCats`, filterCats);
    // * We have to create array of ids
    filterCats = Object.keys(filterCats);

    if (!filterCats.length) return setFilteredAuctions(auctions);

    console.log(
      `newAuctions cats`,
      newAuctions?.map((el) => el.categories)
    );

    newAuctions = newAuctions.filter((auc) => {
      // * Check is auc's categories has any category of filter
      let matched = false;
      auc.categories.every((cat) => {
        if (filterCats.includes(cat._id)) {
          matched = true;

          // * return false is like break, it'll break and not continue next iterations
          return false;
        }

        // * in .every func , if we return true, it'll continue iterations
        return true;
      });

      console.log(`matched`, matched);
      return matched;
    });
    setFilteredAuctions(newAuctions);
  }, [categoriesFilters]);

  useEffect(() => {
    console.log(`parsedQuery`, parsedQuery);
    if (!parsedQuery.search) return setFilteredAuctions(auctions || []);
    console.log(`parsedQuery2`, parsedQuery);

    setFilteredAuctions(
      auctions?.filter((el) =>
        el.title.toLowerCase().includes(parsedQuery.search.toLowerCase())
      )
    );
  }, [parsedQuery, auctions]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleFilter = (e) => {
    const { filter } = e.currentTarget.dataset;
    console.log(`e.`, filter);

    let sortedAuctions = [];
    if (filter === 'priceAsc') {
      // * Sort by Price ascending
      sortedAuctions = auctions.sort(
        (a, b) => a.startingPrice - b.startingPrice
      );
    } else {
      // * Sort by Price descending
      sortedAuctions = auctions.sort(
        (a, b) => b.startingPrice - a.startingPrice
      );
    }
    console.log(
      `sortedAuction`,
      sortedAuctions.map((el) => el.startingPrice)
    );
    setFilteredAuctions(sortedAuctions);
  };

  const handleShare = (e) => {
    const { item } = e.currentTarget.dataset;
    console.log(`item`, item);
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
                    {locations &&
                      locations.map((loc) => (
                        <div key={loc}>
                          <Typography
                            variant='body1'
                            style={{ cursor: 'pointer' }}
                            // onClick={handleFilter}
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
                  <FormGroup className={customClasses.content}>
                    {categories.map((cat) => (
                      <div key={cat._id}>
                        <FormControlLabel
                          value={cat.name}
                          control={
                            <Checkbox
                              color='primary'
                              name={cat._id}
                              checked={categoriesFilters?.[cat._id]}
                              onChange={handleCategoryChange}
                            />
                          }
                          label={cat.name}
                          labelPlacement='end'
                        />
                        <Divider />
                      </div>
                    ))}
                  </FormGroup>
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
              {filteredAuctions
                // ?.slice(
                //   (page - 1) * rowsPerPage,
                //   (page - 1) * rowsPerPage + rowsPerPage
                // )
                .map((auc, ind) => {
                  return (
                    <div
                      key={v4()}
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
                            <Card
                              auction={auc}
                              addToWatchlist={addToWatchlist}
                            />
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
