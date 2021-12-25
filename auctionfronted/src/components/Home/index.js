import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Menu,
  MenuItem,
  MenuList,
} from '@material-ui/core';

import React from 'react';
import Navbar from 'components/common/NavBar';
import styles from 'styles/commonStyles';
import HeroCarousel from 'components/common/HeroCarousel';
import Footer from 'components/common/Footer';
import { auctions, categories } from 'data';
import Card from 'components/Auction/Card';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  filter: {
    marginTop: theme.spacing(3),
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column',
      flexWrap: 'nowrap',
    },
  },
}));

const HomePage = () => {
  const classes = styles();
  const classes_s = useStyles();

  const handleFilter = (e) => {
    const { filter } = e.currentTarget.dataset;
    // console.log(`e.`, filter);
  };
  return (
    <>
      <Navbar user='user' />
      <section>
        <HeroCarousel />
      </section>
      <section className={classes.topSection} />
      <Container>
        <section className={`${classes.containerMargin} ${classes.topSection}`}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Typography variant='h5'>Filter By</Typography>
              <div className={classes_s.filter}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Typography variant='subtitle2' className={classes.heading}>
                      Price
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <Typography
                        variant='body1'
                        style={{ cursor: 'pointer' }}
                        onClick={handleFilter}
                        data-filter='priceAsc'
                        fullWidth
                      >
                        Price (low-high)
                      </Typography>
                      <Typography
                        variant='body1'
                        style={{ cursor: 'pointer' }}
                        onClick={handleFilter}
                        data-filter='priceDesc'
                      >
                        Price (high-low)
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Typography variant='subtitle2' className={classes.heading}>
                      Categories
                    </Typography>
                  </AccordionSummary>
                  {/* <MenuList> */}
                  {categories &&
                    categories.map((cat) => (
                      <AccordionDetails>
                        <Typography
                          variant='body1'
                          style={{ cursor: 'pointer' }}
                          onClick={handleFilter}
                          data-filter={cat}
                        >
                          {cat}
                        </Typography>
                        {/* <MenuItem>{cat}</MenuItem> */}
                      </AccordionDetails>
                    ))}
                  {/* </MenuList> */}
                </Accordion>

                <Accordion>
                  <AccordionDetails>
                    <Typography
                      variant='subtitle2'
                      className={classes.heading}
                      style={{ cursor: 'pointer', marginTop: 5 }}
                      onClick={handleFilter}
                      data-filter='mostViewed'
                    >
                      Most Viewed
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography variant='h5'>
                <Box mb={3}>Featured Auctions</Box>
              </Typography>
              {auctions &&
                auctions.map((auc) => <Card {...auc} key={auc.id} />)}
            </Grid>
          </Grid>
        </section>
      </Container>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default HomePage;
