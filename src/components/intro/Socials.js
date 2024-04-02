import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import "./intro.css";
import insta from '../../assets/Insta.png'
import linkin from '../../assets/LinkedIn.png'
import github from '../../assets/Github.png'
import gmail from '../../assets/Gmail.png'
import youtube from '../../assets/youtube.png'
export default function Socials() {
  return (
    <div style={{marginTop:'10px'}}>
    <Stack direction="row" spacing={2}>
      <Avatar
       className='avatarimg'
       src={linkin}
      >
      </Avatar>
      <Avatar
        className='avatarimg'   
        src={github}
      />
      <Avatar 
        className='avatarimg'   
        src={insta} />
      <Avatar 
        className='avatarimg'   
        src={gmail} />
      <Avatar 
       className='avatarimg' 
        src={youtube} />

    </Stack>
    </div>
  );
}