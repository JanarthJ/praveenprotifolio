import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

export default function Socials() {
  return (
    <div style={{marginTop:'20px'}}>
    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{ width: '3vw', height: '3vw'}}   
        src="/broken-image.jpg"
      >
      </Avatar>
      <Avatar
        sx={{ width: '3vw', height: '3vw'}}   
        src="/broken-image.jpg"
      />
      <Avatar 
      sx={{ width: '3vw', height: '3vw'}}    
      src="/broken-image.jpg" />
      <Avatar 
      sx={{ width: '3vw', height: '3vw'}}   
      src="/broken-image.jpg" />
      <Avatar 
      sx={{ width: '3vw', height: '3vw'}}   
      src="/broken-image.jpg" />

    </Stack>
    </div>
  );
}