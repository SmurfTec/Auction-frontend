import React from 'react';
import {
  SocialProvider,
  SocialLink,
} from '@mui-treasury/components/socialLink';
import { usePoofSocialLinkStyles } from '@mui-treasury/styles/socialLink/poof';
import { Box } from '@material-ui/core';

export const UserSocialLinks = React.memo(function PoofSocialLink({
  instagramUserName,
  twitterUserName,
}) {
  return (
    <Box>
      <SocialProvider useStyles={usePoofSocialLinkStyles}>
        <SocialLink
          brand={'Instagram'}
          href={`instagram.com/${instagramUserName}`}
        />
        <SocialLink
          brand={'Twitter'}
          href={`http://www.twitter.com/${twitterUserName}`}
        />
      </SocialProvider>
    </Box>
  );
});
