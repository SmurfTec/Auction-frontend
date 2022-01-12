import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'styles/RulesStyles';

const TermsOfService = () => {
  const classes = styles();
  return (
    <>
      <section className={classes.root}>
        <Typography variant='h1' align='center'>
          Terms and Conditions
        </Typography>
        <Typography
          variant='h4'
          color='primary'
          align='center'
          style={{ marginBottom: '1.5em' }}
        >
          Welcome to the LotPot Website
        </Typography>

        <Typography variant='body1' className={classes.head}>
          Welcome to the C.T. NEW TECHNOLOGIES LTD ("Us" or "Our" or "We")
          Website, trading as LotPot
        </Typography>
        <Typography variant='body1' className={classes.head}>
          – and thank You for visiting. We hope You enjoy the experience!
        </Typography>
        <Typography variant='body1' className={classes.head}>
          These Terms of Use (“Terms”) are a legal contract between You and Us
          (collectively, "Everyone") and govern Your use of all the text, data,
          information, software, graphics, photographs and more (all of which We
          refer to as “Materials”) that We and Our affiliates may make available
          to You, as well as any services (“Services”) We may provide through
          any of Our websites (all of which are referred to in these Terms as
          this “Website”).
        </Typography>
        <Typography variant='subtitle1' className={classes.head}>
          READ THESE TERMS CAREFULLY BEFORE BROWSING THIS WEBSITE. USING THIS
          WEBSITE INDICATES THAT YOU HAVE BOTH READ AND ACCEPT THESE TERMS. YOU
          CANNOT USE THIS WEBSITE IF YOU DO NOT ACCEPT THESE TERMS.
        </Typography>
        <Typography variant='subtitle1' className={classes.head}>
          NOTE: THESE TERMS CONTAIN A DISPUTE RESOLUTION AND ARBITRATION
          PROVISION, INCLUDING CLASS ACTION WAIVER THAT AFFECTS YOUR RIGHTS
          UNDER THESE TERMS AND WITH RESPECT TO DISPUTES YOU MAY HAVE WITH THE
          COMPANY. YOU MAY OPT OUT OF THE BINDING INDIVIDUAL ARBITRATION AND
          CLASS ACTION WAIVER AS PROVIDED BELOW.
        </Typography>

        <Typography variant='body1' className={classes.subHead}>
          <strong>1. CHANGES</strong>
        </Typography>
        <Typography variant='body1' className={classes.para}>
          We may alter the Materials and Services We offer You and/or choose to
          modify, suspend or discontinue this Website at any time and without
          notifying You. We may also change, update, add or remove provisions
          (collectively, “modifications”) of these Terms from time to time.
          Because Everyone benefits from clarity, We promise to inform You of
          any modifications to these Terms by posting them on this Website and,
          if You have registered with Us, by describing the modifications to
          these Terms in an email that We will send to the address that You
          provided during registration. To be sure We properly reach Your email
          inbox, We just ask that You let Us know if Your preferred email
          address changes at any time after Your registration.
        </Typography>
        <Typography variant='body1' className={classes.para}>
          If You object to any such modifications, Your sole recourse shall be
          to cease using this Website. Continued use of this Website following
          notice of any such modifications indicates You acknowledge and agree
          to be bound by the modifications. Also, please know that these Terms
          may be superseded by expressly-designated legal notices or terms
          located on particular pages of this Website. These
          expressly-designated legal notices or terms are incorporated into
          these Terms and supersede the provision(s) of these Terms that are
          designated as being superseded.
        </Typography>

        {/* //^ 2- */}
        <Typography variant='body1' className={classes.subHead}>
          <strong>2. GENERAL USE</strong>
        </Typography>
        <Typography variant='body1' className={classes.para}>
          We invite You to use this Website for individual, consumer purposes
          ("Permitted Purposes") – enjoy!
        </Typography>
        <Typography variant='body1' className={classes.para}>
          In these Terms we are granting You a limited, personal, non-exclusive
          and non-transferable license to use and to display the Materials; Your
          right to use the Materials is conditioned on Your compliance with
          these Terms. You have no other rights in this Website or any Materials
          and You may not modify, edit, copy, reproduce, create derivative works
          of, reverse engineer, alter, enhance or in any way exploit any of this
          Website or Materials in any manner. If You make copies of any of this
          Website while engaging in Permitted Purposes then We ask that You be
          sure to keep on the copies all of Our copyright and other proprietary
          notices as they appear on this Website.
        </Typography>
        <Typography variant='body1' className={classes.para}>
          Unfortunately, if You breach any of these Terms the above license will
          terminate automatically and You must immediately destroy any
          downloaded or printed Materials (and any copies thereof).
        </Typography>
        <Typography variant='body1' className={classes.para}>
          Many of our Services are accessible internationally. We may offer
          certain programs, tools, and site experiences of particular interest
          to international sellers and buyers, such as estimated local currency
          conversion and international shipping calculation tools. Sellers and
          buyers are responsible for complying with all laws and regulations
          applicable to the international sale, purchase, and shipment of items.
        </Typography>
        <Typography variant='body1' className={classes.para}>
          If any provision of this User Agreement is held to be invalid, void or
          for any reason unenforceable, such provision shall be struck out and
          shall not affect the validity and enforceability of the remaining
          provisions.
        </Typography>
        <Typography variant='body1' className={classes.para}>
          By using this Website, You promise that You are at least 18 years of
          age. If You are not yet 18 years old, You must have the permission of
          an adult to use this Website and agree to its Terms, and that adult
          must be a parent or legal guardian who is willing be responsible for
          Your use of this Website.
        </Typography>
        <Typography variant='body1' className={classes.para}>
          You agree that we may at any time and without notice set-off any of
          the amounts held in LotPot user accounts held or controlled by you
          with any fees, charges or other amounts you owe us and (unless
          prevented by insolvency law) any such amounts you owe other members of
          the LotPot group (including, without limitation, in respect of any
          services provided by any member of the LotPot group). Our right to
          set-off means that we may deduct such fees, charges or other amounts
          mentioned in this paragraph from an LotPot credit balance held or
          controlled by you.
        </Typography>
        <Typography variant='body1' className={classes.para}>
          We may assign our rights and obligations under this User Agreement
          (these terms and conditions) in accordance with the below (but without
          your prior express consent), provided that we assign the User
          Agreement on the same terms or terms that are no less advantageous to
          you.
        </Typography>
        <Typography variant='body1' className={classes.para}>
          Headings are for reference purposes only and do not limit the scope or
          extent of such section. Our failure to act with respect to a breach by
          you or others does not waive our right to act with respect to
          subsequent or similar breaches. We do not guarantee we will take
          action against all breaches of this User Agreement.
        </Typography>
        <Typography variant='body1' className={classes.para}>
          If you have a dispute with one or more users, you release us (and our
          affiliates and subsidiaries, and our and their respective officers,
          directors, employees and agents) from claims, demands and damages
          (actual and consequential) of every kind and nature, known and
          unknown, arising out of or in any way connected with such disputes.
        </Typography>

        {/* //^ 3- */}
        <Typography variant='body1' className={classes.subHead}>
          <strong>3. USING THIS WEBSITE AND THE WEBSITE’S SERVICES</strong>
        </Typography>
        <Typography variant='body1' className={classes.para}>
          We appreciate You visiting this Website and allow You to do just that
          – stop by and leisurely check it out without even registering with Us!
        </Typography>
        <Typography variant='body1' className={classes.para}>
          However, in order to access certain password-restricted areas of this
          Website and to use certain Services and Materials offered on and
          through this Website, You must successfully register an account with
          Us.
        </Typography>
        <Typography variant='body1' className={classes.para}>
          LotPot does not have possession of anything listed or sold through
          LotPot, and is not involved in the actual transaction between buyers
          and sellers. The contract for the sale is directly between buyer and
          seller. LotPot is not a party to the transaction and is not a
          traditional auctioneer.
        </Typography>
        <Typography variant='body1' className={classes.para}>
          While we may provide pricing, postage, listing and other guidance in
          our Services, such guidance is solely informational and you may decide
          to follow it or not. LotPot does not review users' listings or
          content. While we may help facilitate the resolution of disputes
          through various programmes, LotPot has no control over, and does not
          guarantee the existence, quality, safety or legality of, items
          advertised; the truth or accuracy of users' content, listings or
          feedback; the ability of sellers to sell items; the ability of buyers
          to pay for items; or that a buyer or seller will actually complete a
          transaction or return an item.
        </Typography>

        {/* //^ 4- */}
        <Typography variant='body1' className={classes.subHead}>
          <strong>4. PASSWORD RESTRICTED AREAS OF THIS WEBSITE</strong>
        </Typography>
        <Typography variant='body1' className={classes.para}>
          If You want an account with Us, You must submit the following
          information through the account registration page on this Website:
        </Typography>
        <Typography variant='body1' className={classes.para}>
          · Social media linked accounts (twitter or Instagram) - Username;
        </Typography>
        <Typography variant='body1' className={classes.para}>
          · A working email address; and
        </Typography>
        <Typography variant='body1' className={classes.para}>
          · A preferred password.
        </Typography>
        <Typography variant='body1' className={classes.para}>
          You may also provide additional, optional information so that We can
          provide You a more customized experience when using this Website –
          but, We will leave that decision with You. Once You submit the
          required registration information, We alone will determine whether or
          not to approve Your proposed account. If approved, You will be sent an
          e-mail detailing how to complete Your registration. For so long as You
          use the account, You agree to provide true, accurate, current, and
          complete information which can be accomplished by logging into Your
          account and making relevant changes directly or contacting Us using
          the below contact information and We can make the changes for You.
          And, if You forget Your password – no worries as We will happily send
          a password update to Your provided email address.
        </Typography>
        <Typography variant='body1' className={classes.para}>
          You are responsible for complying with these Terms when You access
          this Website, whether directly or through any account that You may
          setup through or on this Website. Because it is Your account, it is
          Your job to obtain and maintain all equipment and services needed for
          access to and use of This Website as well as paying related charges.
          It is also Your responsibility to maintain the confidentiality of Your
          password(s), including any password of a third-party site that We may
          allow You to use to access this Website. Should You believe Your
          password or security for This Website has been breached in any way,
          You must immediately notify Us.
        </Typography>

        {/* //^ 5- */}
        <Typography variant='body1' className={classes.subHead}>
          <strong>5. LOTPOT MARKETPLACE</strong>
        </Typography>
        <Typography variant='body1' className={classes.para}>
          As part of the Services offered in connection with the Website (the
          “LotPot Marketplace”), You may be permitted to use the Services to
          sell or purchase personalized/unique items, experiences or services
          (each, a “LotPot”) as a “Creator” to other users as “Buyers” –
          provided your LotPot is not illegal in nature in which case you are
          personally liable and LotPot is not responsible in any way for your
          actions or even knowledge thereof. You must be 18 years of age to sell
          LotPots to Buyers as a Creator. There may be additional terms
          applicable to the purchasing of LotPots from certain Creators on that
          Creator’s page or otherwise set forth on the Website. As a Creator,
          You acknowledge and agree that LotPots are User Submissions as set
          forth below and are subject to the terms, restrictions, assignments
          and licenses below regarding the same. You acknowledge and agree that
          We will receive a portion of the fees paid for any LotPots purchased
          via the LotPot Marketplace. You understand and agree that we merely
          provide the LotPot Marketplace and are not a party to any transaction
          regarding the purchasing or selling of LotPots and can’t and won’t be
          responsible for making sure that LotPots are actually provided or are
          up to a certain standard of quality. We don’t control the actions of
          any Creators or Buyers, and Creators aren’t our employees. You hereby
          acknowledge that We do not supervise, direct, control or monitor the
          Creators in their creation or selling of LotPots. You agree to
          indemnify Us for any losses related to your purchase or use of LotPots
          (as a Buyer) or your creation and sale of LotPots (as a Creator).
        </Typography>
        <Typography variant='body1' className={classes.para}>
          <strong>
            YOU ACKNOWLEDGE AND AGREE THAT WE ARE NOT A PARTY TO THE LOTPOT
            TRANSACTIONS AND YOU RELEASE US FROM ANY LIABILITY RELATED THERETO
            OR RELATED TO LOTPOTS PURCHASED OR SOLD VIA THE LOTPOT MARKETPLACE,
            AND WE EXPRESSLY DISCLAIM ANY RESPONSIBILITY OR WARRANTY RELATING TO
            THE LOTPOTS OR CREATOR SERVICES, INCLUDING BUT NOT LIMITED TO ANY
            WARRANTY OR CONDITION OF GOOD AND WORKMANLIKE SERVICES, WARRANTY OR
            CONDITION OF QUALITY OR FITNESS FOR A PARTICULAR PURPOSE, OR
            COMPLIANCE WITH ANY LAW, REGULATION OR CODE.
          </strong>
        </Typography>
        <Typography variant='body1' className={classes.para}>
          No Creator may collect any information from or relating to a Buyer
          (“Buyer Information”), whether via the Services or otherwise, beyond
          what is necessary to create and sell the LotPot to the applicable
          Buyer from or about whom such Buyer Information was collected. Creator
          also must not use any Buyer Information beyond what is necessary to
          create and sell the LotPot for such applicable Buyer. Upon the
          conclusion of Creator’s creation and sale of the LotPot to the
          applicable Buyer (or otherwise upon the request of such Buyer or Us),
          Creator must properly destroy all Buyer Information from or relating
          to such Buyer and make no further use of it whatsoever. Creator must
          collect, use, maintain, and transmit all Buyer Information in
          compliance with all applicable laws.
        </Typography>
        <Typography variant='body1' className={classes.para}>
          If there is a dispute between participants on the Website or Services,
          or between users and any third party, You agree that We are under no
          obligation to become involved. In the event that you have a dispute
          with one or more other users, you release Us, Our directors, officers,
          employees, agents, and successors from claims, demands, and damages of
          every kind or nature, known or unknown, suspected or unsuspected,
          disclosed or undisclosed, arising out of or in any way related to such
          disputes and/or Our Services. You shall and hereby do waive California
          Civil Code Section 1542 or any similar law of any jurisdiction, which
          says in substance: “A general release does not extend to claims that
          the creditor or releasing party does not know or suspect to exist in
          his or her favor at the time of executing the release and that, if
          known by him or her, would have materially affected his or her
          settlement with the debtor or released party.”
        </Typography>

        {/* //^ 6- */}
        <Typography variant='body1' className={classes.subHead}>
          <strong>6. PAYMENTS.</strong>
        </Typography>
        <Typography variant='body1' className={classes.para}>
          You agree to pay all applicable fees related to Your use of this
          Website and Our Services which are described fully on Our Payment Page
          available. Please note that any payment terms presented to you in the
          process of using or signing up for a Paid Service are deemed part of
          these Terms.
        </Typography>
        <Typography variant='body1' className={classes.para}>
          We may suspend or terminate Your account and/or access to Our Services
          and this Website if Your payment is late and/or Your offered payment
          method (e.g., credit card or PayPal account) (“Payment Method”) cannot
          be processed. By providing a Payment Method, You expressly authorize
          Us to charge the applicable fees on said Payment Method as well as
          taxes and other charges incurred thereto at regular intervals, all of
          which depend on Your particular membership and utilized services. You
          agree to make payment using that selected Payment Method. The terms of
          your payment will be based on your Payment Method and may be
          determined by agreements between you and the financial institution,
          credit card issuer or other provider of your chosen Payment Method. If
          we, through the Payment Processor (as defined below), do not receive
          payment from you, you agree to pay all amounts due on your Billing
          Account (as defined below) upon demand.
        </Typography>
        <Typography variant='body1' className={classes.para}>
          We understand that You might cancel Your account, but please know that
          We will not provide any refund(s) and You will be responsible for
          paying any balance due on the account. To make things less
          complicated, You agree that We may charge any unpaid fees to Your
          provided Payment Method and/or send You a bill for such unpaid fees.
        </Typography>
        <Typography variant='body1' className={classes.para}>
          Payments will be processed by third-party payment processors (the
          “Payment Processors”) through a payment account linked to Your account
          on the Services (your “Billing Account”) for use of the Paid Services.
          Currently, We use Stripe, Inc., PayPal and potentially HyperWallet as
          Our Payment Processors, and You can access their Terms of Services at
          {` `}
          <Link to='https://stripe.com/legal'>
            https://stripe.com/legal{` `}
          </Link>
          <Link to='https://www.paypal.com/us/webapps/mpp/ua/useragreement-full'>
            https://www.paypal.com/us/webapps/mpp/ua/useragreement-full
            {` `}
          </Link>
          <Link to='https://sellers.hyperwallet.com/hw2web/consumer/page/show.xhtml?page=userAgreement'>
            https://sellers.hyperwallet.com/hw2web/consumer/page/show.xhtml?page=userAgreement
            {` `}
          </Link>
          <Link to='https://stripe.com/us/privacy'>
            https://stripe.com/us/privacy
            {` `}
          </Link>
          <Link to='https://www.paypal.com/us/webapps/mpp/ua/privacy-full'>
            https://www.paypal.com/us/webapps/mpp/ua/privacy-full
            {` `}
          </Link>
          <Link to='https://www.hyperwallet.com/privacy-policy/'>
            https://www.hyperwallet.com/privacy-policy/
            {` `}
          </Link>
          respectively. The processing of payments will be subject to the terms,
          conditions and privacy policies of the applicable Payment Processor in
          addition to these Terms, and You agree, as a condition to making
          payments as a Buyer or receiving payments as a Creator, to abide by
          the terms and conditions of such Payment Processors, as the same may
          be updated from time to time. Breach of the terms and conditions
          provided by such Payment Processors can lead to payments being
          withheld in addition to any other rights or remedies We may have at
          law or under these Terms. We are not responsible for any error by, or
          other acts or omissions of, the Payment Processors. By choosing to use
          Paid Services, You agree to pay Us, through the Payment Processors,
          all charges at the prices then in effect for any use of such Paid
          Services in accordance with the applicable payment terms, and You
          authorize us, through the applicable Payment Processor, to charge Your
          chosen Payment Method. We reserve the right to correct any errors or
          mistakes that the Payment Processor makes even if it has already
          requested or received payment.
        </Typography>
        <Typography variant='body1' className={classes.para}>
          <strong>
            YOU MUST PROVIDE CURRENT, COMPLETE AND ACCURATE INFORMATION FOR YOUR
            BILLING ACCOUNT. YOU MUST PROMPTLY UPDATE ALL INFORMATION TO KEEP
            YOUR BILLING ACCOUNT CURRENT, COMPLETE AND ACCURATE (SUCH AS A
            CHANGE IN BILLING ADDRESS, CREDIT CARD NUMBER, OR CREDIT CARD
            EXPIRATION DATE), AND YOU MUST PROMPTLY NOTIFY US OR OUR PAYMENT
            PROCESSOR IF YOUR PAYMENT METHOD IS CANCELED (E.G., FOR LOSS OR
            THEFT) OR IF YOU BECOME AWARE OF A POTENTIAL BREACH OF SECURITY,
            SUCH AS THE UNAUTHORIZED DISCLOSURE OR USE OF YOUR USER NAME OR
            PASSWORD. CHANGES TO SUCH INFORMATION CAN BE MADE AT ACCOUNT
            SETTINGS. IF YOU FAIL TO PROVIDE ANY OF THE FOREGOING INFORMATION,
            YOU AGREE THAT WE MAY CONTINUE CHARGING YOU FOR ANY USE OF PAID
            SERVICES UNDER YOUR BILLING ACCOUNT UNLESS YOU HAVE TERMINATED YOUR
            PAID SERVICES AS SET FORTH ABOVE.
          </strong>
        </Typography>
        <Typography variant='body1' className={classes.para}>
          If the amount to be charged to Your Billing Account varies from the
          amount You preauthorized (other than due to the imposition or change
          in the amount of state sales taxes), You have the right to receive,
          and We shall provide, notice of the amount to be charged and the date
          of the charge before the scheduled date of the transaction. Any
          agreement You have with Your payment provider will govern Your use of
          your Payment Method. You agree that We may accumulate charges incurred
          and submit them as one or more aggregate charges during or at the end
          of each billing cycle.
        </Typography>
        <Typography variant='body1' className={classes.para}>
          Your non-termination or continued use of a Paid Service reaffirms that
          We are authorized to charge your Payment Method for that Paid Service.
          We may submit those charges for payment and You will be responsible
          for such charges. This does not waive our right to seek payment
          directly from You. Your charges may be payable in advance, in arrears,
          per usage, or as otherwise described when You initially selected to
          use the Paid Service.
        </Typography>
        <Typography variant='body1' className={classes.para}>
          If you are a seller, you are liable for transaction fees arising out
          of all sales made using some or all LotPot Services, even if sales
          terms are finalised or payment is made outside of LotPot. In addition,
          if you are a seller and you offer or reference your contact
          information or ask for a buyer's contact information, you may be
          liable to pay a final value fee in consideration for the introduction
          to a buyer for that item on the LotPot site, even if the item does not
          actually sell.
        </Typography>

        {/* //^ 7- */}
        <Typography variant='body1' className={classes.subHead}>
          <strong>5. PAYMENTS.</strong>
        </Typography>
        <Typography variant='body1' className={classes.para}>
          You agree to pay all applicable fees related to Your use of this
          Website and Our Services which are described fully on Our Payment Page
          available. Please note that any payment terms presented to you in the
          process of using or signing up for a Paid Service are deemed part of
          these Terms.
        </Typography>
      </section>
    </>
  );
};

export default TermsOfService;
