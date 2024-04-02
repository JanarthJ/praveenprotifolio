import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import "./intro.css";

export default function Socials() {
  return (
    <div style={{marginTop:'10px'}}>
    <Stack direction="row" spacing={2}>
      <Avatar
       className='avatarimg'
       src="/broken-image.jpg"
      >
      </Avatar>
      <Avatar
        className='avatarimg'   
        src="/broken-image.jpg"
      />
      <Avatar 
        className='avatarimg'   
        src="/broken-image.jpg" />
      <Avatar 
        className='avatarimg'   
        src="/broken-image.jpg" />
      <Avatar 
       className='avatarimg' 
        src="/broken-image.jpg" />

    </Stack>
    </div>
  );
}