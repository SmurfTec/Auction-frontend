import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from 'styles/RulesStyles.js';

const PrivacyPolicy = () => {
  const classes = styles();

  return (
    <>
      <section className={classes.root}>
        <Typography variant='h2'>Privacy Policy</Typography>
        <Typography
          variant='body1'
          color='textSecondary'
          className={classes.head}
        >
          Effective Date: May 7, 2021
        </Typography>

        <Typography variant='body1'>
          At C.T. NEW TECHNOLOGIES LTD (trading as “LotPot”, “we”, “us”, or
          “our”) we recognize that privacy is very important, and value the
          privacy of our website users (“users” “you”, “your”). In this privacy
          policy (“Policy”), we describe how we collect, use, disclose, and
          otherwise process personal information that we obtain about users of
          our website LotPot.com (“Site”), our mobile application (the “App”)and
          the services available through our Site (collectively, the Site, the
          App and the services available therein are the “Services”). This
          Policy also outlines your rights and choices regarding the personal
          information collected about you.
        </Typography>

        <Typography variant='body1' className={classes.head}>
          <strong>Applicable Terms.</strong> Your use of our Services, and any
          dispute over privacy, is subject to this Policy, the respective terms
          of use (the “Terms”), between you and LotPot, such as our
          <Link to='/tos'> Terms of Use </Link> and any other relevant
          agreements, which are available. The applicable Terms are incorporated
          by reference into this Policy, including their applicable limitations
          on liability and the resolution of disputes. By disclosing your
          personal information to us or using our Services, you understand and
          agree that LotPot may collect, use, and disclose your personal
          information in accordance with this Policy and the applicable Terms.
        </Typography>
        <Box mb={6}>
          <Typography variant='body1' className={classes.subHead}>
            <span>
              {' '}
              <strong>1. What information we collect</strong>{' '}
            </span>
          </Typography>
          <Typography variant='body1'>
            We generally collect information about you directly from you, from
            third parties, and automatically through your use of our Services as
            further described below. The types of information we collect depend
            on how you use and interact with our Services. While you can browse
            parts of our Site freely, certain areas and features of our Services
            require us to process information about you in order to provide you
            with the Services.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Information we collect directly from you.</strong>
            Certain of our Services and features require you to register with
            us. To create an account, you must provide your email address, and
            password. We may also ask or allow you to submit additional account
            information, such as your third-party account handle or username,
            mobile number, profile picture. You can also sign up to receive
            email newsletters and promotional offers from us by submitting your
            email address.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>User content.</strong> If you choose to create content or
            submit images, files, messages, comments, ratings, reviews, survey
            responses or other content we maintain a copy of this content. We
            may also collect certain information metadata associated with your
            content (such as the location of a photo or the date a file was
            created). Certain user content may also be viewable by other
            visitors and users of the Services.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Referrals.</strong> We may receive information about you,
            such as your name, email address or username if one of your friends
            refers you to our services.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>
              Other information we collect regarding your usage of our Services.
            </strong>{' '}
            We collect information about your use of our Services, such as
            information about the types of content you view or engage with
            within our Services, , the people or accounts you interact with, and
            the time, frequency and duration of your activities.. If you use our
            Services for purchases or other financial transactions, we collect
            information about your order and transaction history, including the
            purchases you’ve made.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Communications and support.</strong> If you contact us by
            email, mail, phone, or otherwise regarding the Services, we collect
            and maintain a record of your contact details, communications and
            our responses. If you call us, we may also record calls and maintain
            logs and records of those calls.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Inquiries and requests.</strong> We also collect personal
            information when you submit information to or request information
            from us or sign up for marketing and communications from us (such as
            related to LotPot products, features, subscriptions, special offers
            and upcoming feature releases). The information we may collect
            includes your name, contact information, and other information.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>
              Information we collect about you from third parties.
            </strong>{' '}
            We may also collect information about you from third parties, which
            we append to the information we have collected. For example, we may
            receive information about you from the third party who helps us
            fulfil your purchases. Or, we may receive information about you that
            is provided to us by other users of the Services. For example, we
            may receive and analyse content, communications, and information
            that other people provide when they use our Services. This can
            include information about you, such as when others share or comment
            on a photo of you, send a message to you, or refer you to us through
            our referral program.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>
              Other information we collect automatically through our Services.
            </strong>{' '}
            We may also collect personal information about how you use the
            Services (e.g. using cookies and pixel tags), such as IP address,
            advertising ID, location information, browser type, operating
            system, hardware and software versions, the website that led you to
            our Services, the website to which you go after leaving our
            Services, the dates and times you access our Services, and your
            other activities within the Services. With your permission within
            your device settings, we may collect information such as
            geolocation. We may collect network and connection information such
            as the name of your mobile operator or ISP, language, time zone, or
            other similar information. We may also use pixels in HTML emails to
            understand if individuals read the emails, we send to them (“usage
            data”). We may combine this information with other information that
            we have collected about you, including, where applicable, your name
            and other personal information. (For more information, see the
            Cookies and other tracking information section below).
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <span>
              <strong>2. How we use information</strong>{' '}
            </span>
          </Typography>
          <Typography variant='body1'>
            We process your information and content, including your personal
            information, for the following purposes:
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Providing and improving our Services.</strong> To provide
            and maintain our Services; to fulfil your orders, or otherwise to
            improve our Services; to develop new features, products, or
            services; to authenticate users; to perform technical operations,
            such as updating software; and for other customer service and
            support related purposes.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Communicating with you.</strong> To provide you with the
            information or services that you have requested; to communicate with
            you about your use of our Services, to respond to your inquiries,
            and for other customer service purposes; and to administer surveys
            and questionnaires, such as for market research or user satisfaction
            purposes.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Personalizing content and ads.</strong> We may use the
            information we collect about you (such as your connections,
            preferences, interests and activities on different Services and
            devices based on the data we collect and learn from you and others,
            and the people, places, or things you're connected to and interested
            in on and off our Services) to personalize the information, features
            and content we display to you, or to make suggestions for you (such
            as groups or events you may be interested in or topics you may want
            to follow). This also includes marketing, promotional and sponsored
            content, as well as providing you with more relevant ads.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Marketing and communications.</strong> To communicate with
            you about your account and use of our Services via email, including
            to send you product updates; to respond to your inquiries; to
            provide you with news and newsletters, special offers, promotions,
            and other information we think may interest you; and for other
            informational, marketing, or promotional purposes. Please see the
            Rights and choices section further below for more information about
            how to change your communications preferences.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Research and analytics.</strong> To better understand how
            users access and use our Services and products, for other research
            and analytical purposes, such as to evaluate and improve our
            Services and business operations, develop new features, products, or
            services, to otherwise improve our Services and user experiences,
            and for other research, analytical, and statistical purposes.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>In support of our general business operations.</strong>{' '}
            Relating to audits and assessments of our business operations,
            security controls, financial controls, records and information
            management program, and otherwise relating to the administration of
            our general business, accounting, record keeping and legal
            functions. These purposes are based on our legitimate interest in
            operating our business and maintaining adequate internal records and
            safeguards.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Securing and protecting our assets and rights.</strong> To
            protect our business operations, secure our network and information
            technology, assets and services; to prevent and detect fraud,
            unauthorized activities, access and other misconduct; where we
            believe necessary to investigate, prevent or take action regarding
            suspected violations of our Terms and other agreements, as well as
            fraud, illegal activities and other situations involving potential
            threats to the rights or safety of any person or third party; and as
            necessary to defend our legal interests and rights
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Complying with legal obligations.</strong> To comply with
            the law or legal proceedings. For example, we may disclose
            information in response to subpoenas, court orders, and other lawful
            requests by regulators and law enforcement, including responding to
            national security or law enforcement disclosure requirements.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <Box sx={{ textDecoration: 'underline' }}>
              We may also use your personal information for other purposes,
              where you have consented.
            </Box>
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Aggregate and de-identified information.</strong> We may
            also use aggregate and deidentified information for various
            research, development, product improvement, analytics and other
            purposes.
          </Typography>

          {/* // ^ 3 Disclose Information */}
          <Typography variant='body1' className={classes.subHead}>
            <span>
              {' '}
              <strong>3. How we disclose information</strong>{' '}
            </span>
          </Typography>
          <Typography variant='body1'>
            We may share or disclose the information (including personal
            information) that we collect as follows:
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Affiliates.</strong> With our affiliated companies (i.e.,
            our parent company and other companies under common ownership,
            control or management with us); their use and disclosure of such
            personal information is subject to this Policy.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Content creators.</strong> If you purchase services from a
            content creator within the Services, the content creator receives a
            notification from us about your interest in partnering with the
            content creator and your related purchases and may receive your
            public profile information and other information needed to complete
            the transaction, including contact details.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Service providers.</strong> With our third-party service
            providers who use this information to perform services on our
            behalf, such as hosting providers, payment providers, survey
            administrators, auditors, advisors, consultants, customer service
            and/or support providers.
          </Typography>

          <Typography variant='body1' className={classes.subHead}>
            <strong>Third parties.</strong> With third parties that provide
            advertising, campaign measurement, online and/or mobile analytics
            and related services. These third parties may receive or access
            browsing history and/or other data about your use of the Sites, in
            order to help us better reach individuals with relevant ads, measure
            our ad campaigns and/or to better understand how individuals
            interact with our Sites over time and across devices. We also share
            such information to help advertisers and other partners measure the
            effectiveness and distribution of their ads and services, so they
            understand the types of people who use their services and how people
            interact with their websites, apps, and services.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Public profile.</strong> Public profile information may be
            disclosed to other website users or visitors, including non-account
            holders.Such public information includes your LotPot username, any
            information you select to share with a public audience, information
            provided through your public LotPot profile, and content you share
            on a LotPot page, public LotPot account or any other public forum.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Other users.</strong> When you communicate using our
            Services, including to communicate with interested buyers or
            businesses, these individuals will see the content you send along
            with your public profile information. We also let registered users
            see who has viewed their LotPot account.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Legal compliance.</strong> In response to a valid court
            order, subpoena, government investigation, or as otherwise required
            by law. We also reserve the right to report to law enforcement
            agencies any activities that we, in good faith, believe to be
            unlawful.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Business transfers.</strong> As part of any actual or
            contemplated merger, sale, transfer of assets, acquisition,
            financing and/or restructuring of all or part of our business,
            bankruptcy or similar event, including related to due diligence
            conducted prior to such event where permitted by law.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Protection of rights.</strong> Where we believe it necessary
            to respond to claims asserted against us, to enforce or administer
            our agreements and terms, for fraud prevention, risk assessment,
            investigation, to protect the rights, property or safety of LotPot,
            our affiliates, clients, customers and/or others, and/or as evidence
            in litigation in which we are involved.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Aggregated and de-identified data.</strong> We may share
            aggregate or de-identified information about how people are engaging
            with posts, listings, pages, videos and other content on and off the
            Services with third parties for research, marketing, advertising,
            analytics and/or other purposes.
          </Typography>

          {/* //^  Cooking and Tracking Info */}
          <Typography variant='body1' className={classes.subHead}>
            <span>
              <strong>4. Cooking and Tracking Info</strong>{' '}
            </span>
          </Typography>
          <Typography variant='body1'>
            We and our third-party providers use cookies, clear GIFs/pixel tags,
            JavaScript, local storage, log files, and other mechanisms to
            automatically collect and record information about your browsing
            activities and use of the Services. We may combine this “usage data”
            with other personal information we collect about you. We use this
            usage data to understand how our Services are used, track bugs and
            errors, provide and improve our Services, verify account
            credentials, allow logins, track sessions, prevent fraud, and
            protect our Services, as well as for targeted marketing and
            advertising, to personalize content and for analytics purposes.
          </Typography>

          <Typography variant='body1' className={classes.subHead}>
            <strong>Cookies.</strong> Cookies are alphanumeric identifiers that
            we transfer to your computer’s hard drive through your web browser
            for record-keeping purposes. Some cookies allow us to make it easier
            for you to navigate our Site, while others are used to enable a
            faster log-in process or to allow us to track your activities while
            using our Site. Most web browsers automatically accept cookies, but
            if you prefer, you can edit your browser options to block them in
            the future. The Help portion of the toolbar on most browsers will
            tell you how to prevent your computer from accepting new cookies,
            how to have the browser notify you when you receive a new cookie, or
            how to disable cookies altogether. Some of the Services may not work
            properly if you disable cookies.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Pixel tags.</strong> Pixel tags are tiny graphics with a
            unique identifier, similar in function to cookies. In contrast to
            cookies, which are stored on your computer’s hard drive, clear GIFs
            are embedded invisibly on web pages. We may use pixel tags (also
            referred to as web beacons, web bugs or clear GIFs), in connection
            with our Services to, among other things, help us manage ads and
            content, and compile statistics about usage of our Services. We may
            also use pixel tags in HTML emails to our customers, to help us
            track email response rates, identify when our emails are viewed, and
            track whether our emails are forwarded.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Preference.</strong> You can block or disable cookies for
            the device and browser you are using, through your browser settings;
            however, certain features on our Sites may not be available or
            function properly if you block or disable cookies.{' '}
            <Box component='site' sx={{ textDecoration: 'underline' }}>
              Our Site currently does not respond to “do not track” signals.
            </Box>
          </Typography>

          {/* //^  Internet Based Advertising */}
          <Typography variant='body1' className={classes.subHead}>
            <span>
              {' '}
              <strong>5. Interest based advertising</strong>{' '}
            </span>
          </Typography>
          <Typography variant='body1'>
            We may work with third-party ad networks, channel partners,
            measurement services and others (“third party ad companies”) to
            display advertising on our Services, and to manage our advertising
            on third-party sites, and online services. We and these third-party
            ad companies may use cookies, pixels tags, and other tools to
            collect activity information on our Services (as well as on
            third-party sites and services), as well as IP address, device ID,
            cookie and advertising IDs, and other identifiers, general location
            information, and, with your consent, your device’s geolocation
            information; we and these third-party ad companies use this
            information to provide you more relevant ads and content and to
            improve and evaluate such ads and content.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Ad choices.</strong> You can learn more about the
            information collection practices and "opt-out" procedures of many
            third-party ad companies by visiting
            <Link to='https://optout.networkadvertising.org/?c=1'>
              Network Advertising Initiative.
            </Link>{' '}
            Opting out of participating ad networks does not opt you out of
            being served advertising. You may continue to receive generic or
            “contextual” ads on our Services. You may also continue to receive
            targeted ads on other websites, from companies that do not
            participate in the above programs.
          </Typography>

          {/* //^  Third party sites and services */}
          <Typography variant='body1' className={classes.subHead}>
            <span>
              {' '}
              <strong>6. Third party sites and services</strong>{' '}
            </span>
          </Typography>
          <Typography variant='body1'>
            Our Services may link to other websites or online services
            (including those operated by our parent, affiliates, or others) that
            use, or are integrated with, our Services, but that are not covered
            by this Policy. Any access to and use of such linked websites or
            services is not governed by this Policy, but instead is governed by
            the privacy policies of those third-party websites. We are not
            responsible for the information practices of such third-party
            websites.
          </Typography>

          {/* //^  Security */}
          <Typography variant='body1' className={classes.subHead}>
            <span>
              {' '}
              <strong>7. Security</strong>{' '}
            </span>
          </Typography>
          <Typography variant='body1'>
            We have implemented safeguards designed to protect the information
            we collect from loss, misuse, unauthorized access, disclosure,
            alteration, and destruction. Please be aware that despite our
            efforts, no data security measures can guarantee security.
          </Typography>

          {/* //^  Rights and choices */}
          <Typography variant='body1' className={classes.subHead}>
            <span>
              {' '}
              <strong>8. Rights and choices</strong>{' '}
            </span>
          </Typography>
          <Typography variant='body1'>
            In this section we describe the choices you have regarding our
            collection, use and handling of your personal information.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Access, delete and update information.</strong> You may
            access, update, and delete certain of your personal information by
            accessing and adjusting your account settings. If you don't want to
            delete your account but want to temporarily stop using the Services,
            you can deactivate your account instead. You may also contact us
            using the information in the Contact us section below to make an
            access, correction or other privacy request. Please note that we may
            maintain copies of information that you have updated, modified or
            deleted, in our business records and in the normal course of our
            business operations, as permitted or required by applicable law. For
            example, if you request that we delete your information, but we
            believe that you have violated our terms , we may retain information
            about you in order to attempt to resolve the issue before deleting
            it. Your access to or correction of your personal information is
            subject to applicable legal restrictions and the availability of
            such information. Further, we may take reasonable steps to verify
            your identity before granting such access or making corrections.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Marketing communications.</strong> You may opt-out of
            receiving email marketing communications from us by using the
            unsubscribe link in any such email we send to you. Or alternatively,
            by emailing your request to support@LotPot.com. Please note that we
            may still send you transactional emails, such as emails related to
            your account or subscriptions.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Third party ads and cookies.</strong> As noted above, you
            can control your cookie preferences on our Sites and opt out of most
            third-party advertising tags and cookies on our Sites.
          </Typography>
          <Typography variant='body1' className={classes.subHead}>
            <strong>Children.</strong> Our Services are not targeted and
            directed at children under thirteen years of age (13) and we do not
            knowingly collect any personal information from a child under 13. If
            you believe we have inadvertently collected personal information
            about a child, please contact us and we will take steps to delete
            this information.
          </Typography>
          {/* //^  Changes to this Policy */}
          <Typography variant='body1' className={classes.subHead}>
            <span>
              {' '}
              <strong>9. Changes to this Policy</strong>{' '}
            </span>
          </Typography>
          <Typography variant='body1'>
            This Policy is current as of the Effective Date set forth above. We
            may change this Policy from time to time, so please be sure to check
            back periodically. We will post any changes to this Policy on our
            Services. If we make any changes to this Policy that materially
            affect our practices with regard to the personal information we have
            previously collected from you, we will endeavor to provide you with
            notice in advance of such change by highlighting the change on our
            Services.
          </Typography>
          {/* //^  Contact us */}
          <Typography variant='body1' className={classes.subHead}>
            <span>
              <strong>10. Contact us</strong>{' '}
            </span>
          </Typography>
          <Typography variant='body1'>
            If you have questions about this Policy, you can contact us by
            emailing <NavLink to='/'>support@LotPot.com.</NavLink>
          </Typography>
        </Box>
      </section>
    </>
  );
};

export default PrivacyPolicy;
