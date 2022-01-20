import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import styles from 'styles/RulesStyles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useGaTracker } from 'hooks';

const Faq = () => {
  useGaTracker();
  const classes = styles();
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <section className={classes.root}>
        <Typography variant='h2'>
          Frequently Asked Questions (FAQ's)
        </Typography>

        <section className={classes.accordianContainer}>
          <Accordion
            className={classes.accordian}
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel1' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.countLabel}>
                <Typography variant='h5' align='center'>
                  01
                </Typography>
              </div>
              <Typography variant='subtitle1'>
                Problem statement
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography>
                <p>
                  If I want to bid for and suggest an experience or
                  item that is not typical, there is no set place or
                  way to do this that has enough attention to make it
                  a reality and be noticed.
                </p>
                <p>
                  Equally, brands, personalities and items leave a lot
                  of value on the table that can easily be captured by
                  either their creativity or their fan’s/follower’s
                  creativity.
                </p>
                <p>
                  LotPot makes this simple – you can propose anything
                  you’re willing to pay for, and the claimant knows
                  exactly who is offering, what for, and for how much.
                  Taking all the guess work and effort out of
                  providing the best services and engagement possible.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* //^ 2- */}
          <Accordion
            className={classes.accordian}
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel2' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.countLabel}>
                <Typography variant='h5' align='center'>
                  02
                </Typography>
              </div>
              <Typography variant='subtitle1'>
                What is LotPot and how does it work?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography>
                <p>
                  LotPot is an auction marketplace where you can
                  propose the buying and selling of any item or
                  experience you want that you cannot get normally.
                </p>
                <p>
                  You can create an auction proposing what the item or
                  experience you want and who can fulfil it – anything
                  from a strange item, an experience with a celebrity,
                  influencer, brand, or business. Get creative!
                </p>
                <p>
                  The claimant you propose can be a specific
                  individual or business that you identify with their
                  social media handles, or open-ended and free for
                  multiple people to offer to claim!
                </p>
                <p>
                  The auction runs for either 1, 2, or 3 weeks and the
                  top bidder at the end wins. The claimant is
                  notified, and the winner and claimant can chat to
                  decide and tweak the details before the offer is
                  accepted.
                </p>

                <p>
                  The auction and offer are purely hypothetical at
                  this point until the claimant decides to offer the
                  item or service or not.
                </p>
                <p>
                  At that point the claimant can accept the offer at
                  the final price and only then is the bidder’s card
                  charged and paid to the claimant, with LotPot taking
                  our commission in between of course 😉 Done!
                </p>
                <p>
                  A dream comes true that would have been impossible
                  and not even proposed otherwise and we make the
                  world a more fun and interesting place.
                </p>
                <p>
                  Beyond the point of sale of an item or experience,
                  LotPots are unique opportunities to engage with
                  fans, communities, have an amazing experience,
                  create amazing content and collaborations, and
                  create value in any way imaginable!
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* //^ 3- */}
          <Accordion
            className={classes.accordian}
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel3' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.countLabel}>
                <Typography variant='h5' align='center'>
                  03
                </Typography>
              </div>
              <Typography variant='subtitle1'>
                What kind of LotPot auction can I create?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography>
                <p>
                  Honestly, anything you’d want, ever dreamed of, or
                  are just curious about. As big or as small as you’d
                  like.
                </p>
                <p>
                  We find it’s easier to come up with one when you
                  think about things you’re a fan of, follower of, or
                  obsessed with. There’s no limits and you can be as
                  weird and ridiculous as you like, after all it’s all
                  hypothetical until someone agrees!
                </p>
                <p>
                  We also categorise all LotPots so it makes it easier
                  for you:
                </p>
                <p>
                  Item, experience, travel, riskayy, influencer,
                  celeb, food, random, brand/business, location
                </p>

                <p>
                  *Remember, you don’t even have to make an auction
                  for yourself to win. Create an interesting auction
                  and let someone else bid and win! You’ll get 0.5%
                  just for your creativity…for the right auctions
                  those can really add up 👀
                </p>
                <p>
                  Okay…if you really don’t know what you want, we can
                  guarantee you’ll love one of our other LotPots on
                  the platform.
                </p>
                <p>Go browse, see what you like, and bid!</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* //^ 4- */}
          <Accordion
            className={classes.accordian}
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel4' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.countLabel}>
                <Typography variant='h5' align='center'>
                  04
                </Typography>
              </div>
              <Typography variant='subtitle1'>
                I’m creating a LotPot auction, how do I get the best
                chances of it being claimed?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>
                  You need to stand out from the crowd from the very
                  start!
                </p>
                <p>
                  This means a catchy but informative title and if
                  it’s about a person or a business…you guessed it,
                  you should include it.
                </p>
                <p>
                  Categories are everything. If you pick the wrong one
                  your auction will never be seen by the right people
                  and it will never resonate as well as it could have
                  done, so think hard on the mix of categories you
                  set.
                </p>
                <p>
                  Don’t think about the number of eyes seeing it - the
                  better you make, curate, and place your auction the
                  more likely it is to be claimed in the end and
                  resonate with the right people. You’re ultimately
                  going after the people that have a cult-following
                  like interest in your auction.
                </p>
                <p>
                  The images you pick are critical, and if in doubt
                  make your own thumbnail or explainer video as the
                  extra effort goes a long way with the claimants and
                  engagement to get noticed and reshared.
                </p>
                <p>
                  Each auction is almost a piece of content and art,
                  take care in the details – sloppy work seems like
                  it’s barely wanted long shots. And they rarely do
                  better than a well titled auction with a catchy
                  jovial description with a nice picture or 1 minute
                  explainer video.
                </p>
                <p>
                  Treat it like a tiktok or a mini youtube video and
                  you’ll beat everyone’s attention and shareability.
                  It’s not all about the idea – presentation counts 😉
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* //^ 5- */}
          <Accordion
            className={classes.accordian}
            expanded={expanded === 'panel5'}
            onChange={handleChange('panel5')}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel5' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.countLabel}>
                <Typography variant='h5' align='center'>
                  05
                </Typography>
              </div>
              <Typography variant='subtitle1'>
                How is this different from other marketplaces and
                auction platforms?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography>
                <p>
                  Our sole purpose is to make dreams and interesting
                  things that otherwise wouldn’t happen, happen. The
                  sky is the limit for possibilities!
                </p>
                <p>
                  LotPot auctions are hypothetical in nature – so the
                  final price and person get decided, making creating
                  this value or service ridiculously easy for the
                  claimant to decide to take the money and provide the
                  item/service.
                </p>
                <p>
                  While other marketplaces must make partnerships and
                  value through only what is assured, leaving the
                  truly interesting value on the table and ignoring
                  their audience’s wants and needs.
                </p>
                <p>
                  We are much more than just a marketplace – in the
                  right hands we’re a powerful tool for driving
                  engagement, virality, competition, business, and of
                  course making money. We believe every influencer,
                  celebrity, brand, business, and every single person
                  can use LotPot to enhance and showcase what they’re
                  all about and get paid for it – and have a great
                  experience at the same time.
                </p>
                <p>
                  We literally value creativity – for simply creating
                  an auction idea you receive 0.5% of the ticket price
                  if it is claimed in the end. There’s no limit to the
                  number of auctions you can create, the only limit is
                  creativity and there’s no end of interesting things
                  you could propose.
                </p>
                <p>
                  Most marketplaces are focused purely on the
                  transaction where the role of the user is limited.
                  LotPot nurtures users of all kinds and progresses
                  with them to create increased value for everyone
                  over time. Auction creators can pay for exactly what
                  they want and in turn can create auctions for others
                  and get paid commission. Claimants get money and
                  engagement and often accept and create more auctions
                  in the future, bigger and better than before.
                  Auction idea creators and buyers eventually sell an
                  auction item or experience about themselves for
                  higher values and change their lives potentially.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* //^ 6- */}
          <Accordion
            className={classes.accordian}
            expanded={expanded === 'panel6'}
            onChange={handleChange('panel6')}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel6' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.countLabel}>
                <Typography variant='h5' align='center'>
                  06
                </Typography>
              </div>
              <Typography variant='subtitle1'>
                What if I make an auction but I don’t win it and I’m
                outbid?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography>
                <p>
                  That’s bad luck but you should be proud – you made
                  something interesting happen! And as a reward you’ll
                  get 0.5% of the final price of the auction just for
                  your creativity.{' '}
                </p>
                <p>
                  I can sense the hustler in you coming up with 20
                  ideas right now! 😉{' '}
                </p>
                <p>
                  But if this was something you really wanted, create
                  it again or try bidding for something similar
                  already on the platform!{' '}
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* //^ 7- */}
          <Accordion
            className={classes.accordian}
            expanded={expanded === 'panel7'}
            onChange={handleChange('panel7')}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel7' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.countLabel}>
                <Typography variant='h5' align='center'>
                  07
                </Typography>
              </div>
              <Typography variant='subtitle1'>
                What if I actually win?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography>
                <p>
                  Amazing, you did it! Remember though these are all
                  hypothetical…until they’re not.{' '}
                </p>
                <p>
                  The claimant is notified and on that winning auction
                  you can talk with them to confirm the details, and
                  if you both agree then the claimant can accept!{' '}
                </p>
                <p>
                  Only once the claimant agrees and accepts will your
                  card be charged. So you can bid on as many auctions
                  as you like and only ones where both parties agree
                  result in a payment!{' '}
                </p>
                <p>
                  If you really want this auction to get claimed, try
                  reaching out through other platforms and in the
                  relevant community to raise awareness about it –
                  more eyes help!{' '}
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* //^ 8- */}
          <Accordion
            className={classes.accordian}
            expanded={expanded === 'panel8'}
            onChange={handleChange('panel8')}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel8' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.countLabel}>
                <Typography variant='h5' align='center'>
                  08
                </Typography>
              </div>
              <Typography variant='subtitle1'>
                When do I get charged and how do the payments work?{' '}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography>
                <p>
                  You will only ever get charged if you win an auction
                  as the top bidder and the claimant actually accepts
                  the offer in the end.
                </p>
                <p>
                  This involves both parties accepting the finer
                  details you set after you win in the 1-1 chat. At
                  that point the claimant will accept, and your card
                  is charged for the full amount and LotPot takes the
                  15% commission.
                </p>
                <p>
                  Equally, if you are the one claiming an auction then
                  all you have to do is register so we can identify
                  you and know where to deposit your money – easy!
                </p>
                <p>
                  *if you created an auction that you didn’t win and
                  it gets claimed, then you get 0.5% of the price and
                  we’ll pay that right to your registered account’s
                  card details.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* //^ 9- */}
          <Accordion
            className={classes.accordian}
            expanded={expanded === 'panel9'}
            onChange={handleChange('panel9')}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel9' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.countLabel}>
                <Typography variant='h5' align='center'>
                  09
                </Typography>
              </div>
              <Typography variant='subtitle1'>
                What if I want to create a LotPot about myself, my
                brand/business or an item that I own?{' '}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography>
                <p>
                  You can start an auction just the same way as you
                  would about anyone or anything else, just enter your
                  own social media handles so you are the one that can
                  claim in the end and let the bidding begin!{' '}
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* //^ 10- */}
          <Accordion
            className={classes.accordian}
            expanded={expanded === 'panel10'}
            onChange={handleChange('panel10')}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel10' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.countLabel}>
                <Typography variant='h5' align='center'>
                  10
                </Typography>
              </div>
              <Typography variant='subtitle1'>
                A LotPot exists about me, my item, or my
                business/brand – how do I maximise the value for what
                I have to offer?{' '}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography>
                <p>
                  The best thing you can do to offer the best LotPot,
                  and subsequently boost the price, is to engage –
                  reshare it to your following, ask them questions,
                  create content around it.{' '}
                </p>
                <p>
                  As that’s where your bidders are really going to
                  come from, the people that love you!{' '}
                </p>
                <p>
                  Confirm your interest – people will be much more
                  interested in bidding if you have expressed your
                  interest to your following that you’ll accept and
                  even propose some of the details or how you could
                  even make it better.{' '}
                </p>
                <p>
                  Capitalise on the opportunity – the LotPot can
                  create value for the item or experience you can
                  offer easily, but it’s also a way to boost your
                  fame, visibility, likeability, engagement and
                  virality.{' '}
                </p>
                <p>
                  Use it to make content and deliver on the LotPot as
                  best you can, and it will add value to you in all
                  kinds of ways down the line!{' '}
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* //^ 11- */}
          <Accordion
            className={classes.accordian}
            expanded={expanded === 'panel11'}
            onChange={handleChange('panel11')}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel11' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.countLabel}>
                <Typography variant='h5' align='center'>
                  11
                </Typography>
              </div>
              <Typography variant='subtitle1'>
                What if I want to create a LotPot auction but I think
                it’s too weird or that no one will claim it?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography>
                <p>
                  There’s lots of boring people out there, but you are
                  different. You thought of something special and if
                  you want it, you can be sure a lot of other people
                  do too.{' '}
                </p>
                <p>
                  That’s why LotPot is so special, you can propose
                  whatever you’d like no judgement and it’s out of
                  interest and hypothetical until it’s accepted.{' '}
                </p>
                <p>
                  As long as it’s not illegal there shouldn’t be a
                  problem, but always remember to be respectful about
                  any LotPot you create or engage with.{' '}
                </p>
                <p>
                  If it’s against our terms or we decide we don’t like
                  it – your profile will be removed and the LotPot
                  removed from the marketplace.{' '}
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* //^ 12- */}
          <Accordion
            className={classes.accordian}
            expanded={expanded === 'panel12'}
            onChange={handleChange('panel12')}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel12' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.countLabel}>
                <Typography variant='h5' align='center'>
                  12
                </Typography>
              </div>
              <Typography variant='subtitle1'>
                What if I want to do something big and ambitious but
                I’m not sure, or I want to collaborate to come up with
                something better?{' '}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography>
                <p>
                  If you want to really go for it and try and create
                  value for something you want, or more usually,
                  something you want to offer and showcase – we’d love
                  to hear from you!{' '}
                </p>
                <p>
                  We can help workshop it, do an official
                  collaboration and do a series of LotPots with you
                  and help get additional eyes on your ideas and what
                  you have to offer.{' '}
                </p>
                <p>
                  This is not restricted to the likes of brands and
                  influencers, you can be anyone and have something
                  great to offer – trust us on this, reach out.{' '}
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* //^ 13- */}
          <Accordion
            className={classes.accordian}
            expanded={expanded === 'panel13'}
            onChange={handleChange('panel13')}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel13' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.countLabel}>
                <Typography variant='h5' align='center'>
                  13
                </Typography>
              </div>
              <Typography variant='subtitle1'>
                What is the difference between specific and open-ended
                auctions?{' '}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography>
                <p>Good question! </p>
                <p>
                  A specific auction is the usual kind on LotPot. This
                  is when an auction is about, and can be claimed, by
                  only a specific individual or brand etc. The
                  official social media handles are supplied when
                  making the auction so only the correct person can be
                  verified to claim and supply the auction conditions.{' '}
                </p>
                <p>Example, the first auction ever created here: </p>
                <p>
                  A weekend experience with Jocko Willink (the famous
                  Navy Seal, he’s amazing check him out) – this is
                  specifically about Jocko and only his official
                  account can set the details and then agree and claim
                  👍
                </p>
                <p>
                  An open-ended auction is one where an item or
                  experience is proposed and bid on that can be
                  supplied or claimed by a number of different people
                  or brands or a number of similar items etc. The top
                  bidder who won can then pick from any of the valid
                  candidates trying to offer the item or experience.{' '}
                </p>
                <p>Example of an open-ended auction: </p>
                <p>
                  Tickets to the Met Gala – multiple people might be
                  able to make this happen so it remains open ended so
                  you can get multiple valid responses!
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* //^ 14- */}
          <Accordion
            className={classes.accordian}
            expanded={expanded === 'panel14'}
            onChange={handleChange('panel14')}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel14' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.countLabel}>
                <Typography variant='h5' align='center'>
                  14
                </Typography>
              </div>
              <Typography variant='subtitle1'>
                Is LotPot hiring?{' '}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography>
                <p>
                  We’re never notttt hiring…if you think you could add
                  spectacular value to our team then get in touch!{' '}
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* //^ 15- */}
          <Accordion
            className={classes.accordian}
            expanded={expanded === 'panel15'}
            onChange={handleChange('panel15')}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel15' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.countLabel}>
                <Typography variant='h5' align='center'>
                  15
                </Typography>
              </div>
              <Typography variant='subtitle1'>
                Can I make an auction, win, and give it to a friend or
                family member as a gift?{' '}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography>
                <p>
                  Absolutely, who wins is not the issue, only us
                  verifying that the right person or business claims.
                  As long as the details have been accepted by the
                  claimant then do what you’d like and make someone’s
                  dream come true!{' '}
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* //^ 16- */}
          <Accordion
            className={classes.accordian}
            expanded={expanded === 'panel16'}
            onChange={handleChange('panel16')}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel16' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.countLabel}>
                <Typography variant='h5' align='center'>
                  16
                </Typography>
              </div>
              <Typography variant='subtitle1'>
                Can I change my social media handles without messing
                anything up?{' '}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography>
                <p>
                  You can, but if those handles are the ones required
                  to claim an auction, then you will not be able to do
                  so.{' '}
                </p>
                <p>
                  Feel free to change any other profile information at
                  any time.{' '}
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* //^ 17- */}
          <Accordion
            className={classes.accordian}
            expanded={expanded === 'panel17'}
            onChange={handleChange('panel17')}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel17' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.countLabel}>
                <Typography variant='h5' align='center'>
                  17
                </Typography>
              </div>
              <Typography variant='subtitle1'>
                Can I get a refund on an auction I paid for, for
                whatever reason? Maybe it fell through or I changed my
                mind etc
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography>
                <p>
                  No. We do not facilitate any refunds as there are so
                  many stages in accepting and paying for an auction
                  in the first place – it’s created with intent and
                  the details are specified before acceptance, as are
                  each parties contact information for detail changes.{' '}
                </p>
                <p>
                  Any details and refunds should be organised through
                  the buyer and the claimant.{' '}
                </p>
                <p>
                  If there are issues, we can certainly try and
                  rectify them and contact the relevant parties to
                  come to a solution. But LotPot takes no
                  responsibilities for any outcomes of an auction
                  after the point of sale.{' '}
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* //^ 18- */}
          <Accordion
            className={classes.accordian}
            expanded={expanded === 'panel18'}
            onChange={handleChange('panel18')}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel18' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.countLabel}>
                <Typography variant='h5' align='center'>
                  18
                </Typography>
              </div>
              <Typography variant='subtitle1'>
                I have a problem with some of the content on the
                platform, what do I do?{' '}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography>
                <p>
                  If the content and auction proposition is for an
                  illegal item or service, then please do let us know
                  and we will remove it.{' '}
                </p>
                <p>
                  Other than that, it’s important for all of us to be
                  respectful and realise that not everyone’s views are
                  the same and not impose on other people’s dreams,
                  wants and desires.{' '}
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* //^ 19- */}
          <Accordion
            className={classes.accordian}
            expanded={expanded === 'panel19'}
            onChange={handleChange('panel19')}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel19' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.countLabel}>
                <Typography variant='h5' align='center'>
                  19
                </Typography>
              </div>
              <Typography variant='subtitle1'>
                I have a technical problem and something isn’t working
                right on the platform
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordianDetails}>
              <Typography>
                <p>
                  Things like this do happen and we want you to have
                  the best experience possible and make your dream
                  come true.{' '}
                </p>
                <p>
                  We can’t do that with technical glitches and bugs –
                  so let us know and we’ll fix it ASAP.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
      </section>
    </>
  );
};

export default Faq;
