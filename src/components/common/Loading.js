import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { JumpCircleLoading, PointSpreadLoading } from 'react-loadingg';
import { useTheme } from '@material-ui/styles';

const Loading = ({ noTitle = false }) => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        className='cPhARM'
        style={{
          margin: 'auto',
          position: 'absolute',
          minWidth: 'fit-content',
          top: '41%',
          transform: 'translate(-50%,-50%)',
          left: '50%',
        }}
      >
        {!noTitle && (
          <Typography variant='h3' color='primary'>
            Lotpot
          </Typography>
        )}
      </Box>
      <JumpCircleLoading color={theme.palette.primary.main} />
      {/* <PointSpreadLoading color={theme.palette.primary.main} /> */}
    </Box>
  );
};

export default Loading;
