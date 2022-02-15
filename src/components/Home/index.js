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
  FormGroup,
} from '@material-ui/core';
import { Pagination, Skeleton } from '@material-ui/lab';
import clsx from 'clsx';
import HeroCarousel from 'components/common/HeroCarousel';
import Card from 'components/Auction/Card';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AuctionStepper from 'components/Auction/AuctionStepper';
import { locations } from 'data';
import styles from 'styles/commonStyles';
import useStyles from './styles';
import { AuctionsContext } from 'contexts/AuctionsContext';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { v4 } from 'uuid';
import { CategoriesContext } from 'contexts/CategoriesContext';
import { filterFalseValues } from 'utils/objectMethods';
import { useGaTracker } from 'hooks';
import ShareAuction from 'components/common/ShareAuction';
import Search from 'components/common/Search';

const HomePage = () => {
  useGaTracker();
  const location = useLocation();

  const globalClasses = styles();
  const customClasses = useStyles();
  const { publishedAuctions, archivedAuctions, loading, addToWatchlist } =
    useContext(AuctionsContext);
  const { categories, loading: loadingCategories } =
    useContext(CategoriesContext);

  const [page, setPage] = React.useState(1);
  const [rowsPerPage] = React.useState(50);
  const [filteredAuctions, setFilteredAuctions] = useState([]);

  const [categoriesFilters, setCategoriesFilters] = useState();
  const [locationFilter, setLocationFilter] = useState();
  const [priceFilter, setPriceFilter] = useState();
  const [typeFilter, setTypeFilter] = useState('published');
  const [dateFilter, setDateFilter] = useState();

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
    if (priceFilter === 'priceAsc') {
      // * Sort by Price ascending
      setFilteredAuctions((st) =>
        st.sort((a, b) => a.startingPrice - b.startingPrice)
      );
    } else {
      // * Sort by Price descending
      setFilteredAuctions((st) =>
        st.sort((a, b) => b.startingPrice - a.startingPrice)
      );
    }
  }, [priceFilter]);

  useEffect(() => {
    if (dateFilter === 'latest') {
      // * Sort by Date ascending
      setFilteredAuctions((st) =>
        st.sort((a, b) =>
          new Date(a.createdAt) < new Date(b.createdAt) ? -1 : 1
        )
      );
    } else {
      // * Sort by Date descending
      setFilteredAuctions((st) =>
        st.sort((a, b) =>
          new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1
        )
      );
    }
  }, [dateFilter]);

  useEffect(() => {
    if (!locationFilter) return;

    if (locationFilter === 'all')
      return setFilteredAuctions(
        typeFilter === 'published' ? publishedAuctions : archivedAuctions
      );

    if (typeFilter === 'published')
      setFilteredAuctions(
        publishedAuctions?.filter(
          (el) => el.location === locationFilter.toLowerCase()
        )
      );
    else
      setFilteredAuctions(
        archivedAuctions?.filter(
          (el) => el.location === locationFilter.toLowerCase()
        )
      );
  }, [locationFilter, publishedAuctions, archivedAuctions]);
  useEffect(() => {
    if (!typeFilter) return;

    console.log('publishedAuctions', publishedAuctions);
    if (typeFilter === 'published')
      return setFilteredAuctions(publishedAuctions);
    else setFilteredAuctions(archivedAuctions);
  }, [typeFilter, publishedAuctions, archivedAuctions]);

  useEffect(() => {
    if (!categoriesFilters || !publishedAuctions || !archivedAuctions) return;
    let newAuctions =
      typeFilter === 'published' ? publishedAuctions : archivedAuctions;

    // * obj ={ 1 : true , 2 :true, 3:Fasle , 4 :false}
    // * We have to filter false values
    let filterCats = filterFalseValues(categoriesFilters);
    // console.log(`filterCats`, filterCats);
    // * We have to create array of ids
    filterCats = Object.keys(filterCats);

    if (!filterCats.length) return setFilteredAuctions(publishedAuctions);

    // console.log(
    //   `newAuctions cats`,
    //   newAuctions?.map((el) => el.categories)
    // );

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

      // console.log(`matched`, matched);
      return matched;
    });
    setFilteredAuctions(newAuctions);
  }, [categoriesFilters, publishedAuctions, archivedAuctions]);

  useEffect(() => {
    // console.log(`parsedQuery`, parsedQuery);
    if (!parsedQuery.search)
      return setFilteredAuctions(publishedAuctions || []);
    // console.log(`parsedQuery2`, parsedQuery);

    if (typeFilter === 'published')
      setFilteredAuctions(
        publishedAuctions?.filter((el) =>
          el.title.toLowerCase().includes(parsedQuery.search.toLowerCase())
        )
      );
    else
      setFilteredAuctions(
        archivedAuctions?.filter((el) =>
          el.title.toLowerCase().includes(parsedQuery.search.toLowerCase())
        )
      );
  }, [parsedQuery, publishedAuctions, archivedAuctions]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handlePriceFilter = (e) => {
    const { filter } = e.currentTarget.dataset;
    // console.log(`e.`, filter);

    setPriceFilter(filter);
  };
  const handleTypeFilter = (e) => {
    const { filter } = e.currentTarget.dataset;
    // console.log(`e.`, filter);

    setTypeFilter(filter);
  };

  const handleDateFilter = (e) => {
    const { filter } = e.currentTarget.dataset;
    // console.log(`e.`, filter);

    setDateFilter(filter);
  };

  const handleLocationFilter = (e) => {
    const { filter } = e.currentTarget.dataset;
    setLocationFilter(filter);
  };

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        {/* <HeroCarousel /> */}
        {/* <img src={bannerImg} alt='banner' width='100%' height='70%' /> */}
        <Box className={globalClasses.bannerImg}>
          <Typography
            variant='h1'
            align='center'
            style={{
              color: '#D733DF',
            }}
          >
            LOTPOT
          </Typography>
          <div className={globalClasses.bannerCont}>
            <Search />
          </div>
        </Box>
      </Box>

      <Box
        style={{ marginBlock: 25 }}
        className={`${globalClasses.paddingRoot}`}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant='h5'>Filter By</Typography>
            <div className={customClasses.filter}>
              {/* <Accordion>
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
                </Accordion> */}
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
                    Type
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={customClasses.content}>
                    <Typography
                      variant='body1'
                      style={{ cursor: 'pointer' }}
                      onClick={handleTypeFilter}
                      data-filter='published'
                      className={clsx({
                        [customClasses.activePrice]: typeFilter === 'published',
                      })}
                    >
                      Published
                    </Typography>
                    <Divider />

                    <Typography
                      variant='body1'
                      style={{ cursor: 'pointer' }}
                      onClick={handleTypeFilter}
                      data-filter='archived'
                      className={clsx({
                        [customClasses.activePrice]: typeFilter !== 'published',
                      })}
                    >
                      Archived
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
                      onClick={handlePriceFilter}
                      data-filter='priceAsc'
                      className={clsx({
                        [customClasses.activePrice]: priceFilter === 'priceAsc',
                      })}
                    >
                      Price (high-low)
                    </Typography>
                    <Divider />

                    <Typography
                      variant='body1'
                      style={{ cursor: 'pointer' }}
                      onClick={handlePriceFilter}
                      data-filter='priceDesc'
                      className={clsx({
                        [customClasses.activePrice]: priceFilter !== 'priceAsc',
                      })}
                    >
                      Price (low-high)
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
                    variant='subtitle1'
                    className={globalClasses.heading}
                  >
                    Publish Date
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={customClasses.content}>
                    <Typography
                      variant='body1'
                      style={{ cursor: 'pointer' }}
                      onClick={handleDateFilter}
                      data-filter='oldest'
                      className={clsx({
                        [customClasses.activePrice]: dateFilter === 'oldest',
                      })}
                    >
                      Oldest
                    </Typography>
                    <Divider />

                    <Typography
                      variant='body1'
                      style={{ cursor: 'pointer' }}
                      onClick={handleDateFilter}
                      data-filter='latest'
                      className={clsx({
                        [customClasses.activePrice]: dateFilter === 'latest',
                      })}
                    >
                      Latest
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
                    <div
                      key={'all'}
                      className={clsx({
                        [customClasses.activeLocation]:
                          locationFilter === 'all',
                      })}
                    >
                      <Typography
                        variant='body1'
                        style={{ cursor: 'pointer' }}
                        onClick={handleLocationFilter}
                        data-filter={'all'}
                      >
                        All
                      </Typography>
                    </div>{' '}
                    <Divider />
                    {locations &&
                      locations.map((loc) => (
                        <React.Fragment key={loc}>
                          <div
                            className={clsx({
                              [customClasses.activeLocation]:
                                locationFilter === loc,
                            })}
                          >
                            <Typography
                              variant='body1'
                              style={{ cursor: 'pointer' }}
                              onClick={handleLocationFilter}
                              data-filter={loc}
                            >
                              {loc}
                            </Typography>
                            <Divider />
                          </div>
                          {/* <Divider /> */}
                        </React.Fragment>
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
                    {loadingCategories
                      ? Array(8)
                          .fill()
                          .map((_, idx) => (
                            <Skeleton key={idx} variant='text' />
                          ))
                      : categories.map((cat) => (
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
            <Typography variant='h5' color='textPrimary'>
              <Box mb={3}>Featured Auctions</Box>
            </Typography>

            {loading &&
              Array(10)
                .fill()
                .map((_, idx) => (
                  <Skeleton
                    key={idx}
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
                ?.slice(
                  (page - 1) * rowsPerPage,
                  (page - 1) * rowsPerPage + rowsPerPage
                )
                .map((auc, ind) => {
                  // console.log(`auc`, auc);
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
                      <ShareAuction auctionId={auc._id} />
                    </div>
                  );
                })}

              <Pagination
                color='primary'
                count={Math.ceil(publishedAuctions.length / rowsPerPage)}
                page={page}
                onChange={handleChangePage}
                style={{
                  margin: 'auto',
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
      {/* </Container> */}
    </>
  );
};

export default HomePage;
