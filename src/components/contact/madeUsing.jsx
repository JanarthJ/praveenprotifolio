import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FigmaImg from '../../assets/Figma.png';
import ReactImg from '../../assets/React.png';
import MuiImg from '../../assets/MUI.png';

export default function MadeBy() {  
  return (
    <div style={{marginTop:'10px'}}>
    <Stack direction="row" spacing={2}>
      <Avatar
       className='avatarimg'
       src={ReactImg}       
      >
      </Avatar>
      <Avatar
        className='avatarimg'   
        src={MuiImg}       
      />   
      <Avatar
        className='avatarimg'   
        src={FigmaImg}       
      />  
    </Stack>
    </div>
  );
}