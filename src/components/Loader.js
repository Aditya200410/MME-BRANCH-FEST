import { Stack } from '@mui/material';
import React from 'react';


function Loader() {

  return (
    <>
      <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100dvh', background: '#333333' }}>
        <img className='blink' src='./n.png' alt='Logo' />
      </Stack>
    </>
  )
}

export default Loader