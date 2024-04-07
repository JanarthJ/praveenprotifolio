import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./intro.css";
import insta from '../../assets/Insta.png'
import linkin from '../../assets/LinkedIn.png'
import github from '../../assets/Github.png'
import gmail from '../../assets/Gmail.png'
import youtube from '../../assets/youtube.png'
export default function Socials() {
  const linkhandler=(url)=>{
      window.open(url,"_blank")
  }
  const handleEmailClick = () => {
    const emailAddress = 'praveen17mails@gmail.com';
    const subject = 'Hello Praveen !';
    const body = 'Reaching out';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the mailto link in a new tab
    window.open(mailtoLink);
   };
  return (
    <div style={{marginTop:'10px'}}>
    <Stack direction="row" spacing={2}>
      <Avatar
       className='avatarimg'
       src={linkin}
       onClick={()=>linkhandler("https://www.google.com/")}
      >
      </Avatar>
      <Avatar
        className='avatarimg'   
        src={github}
        onClick={()=>linkhandler("https://github.com/Prav-17")}
      />
      <Avatar 
        className='avatarimg'   
        src={insta}
        onClick={()=>linkhandler("https://www.instagram.com/_prav17_/?utm_source=qr&igsh=eWljZ3p6MXB6c2Ro")} />
      <Avatar 
        className='avatarimg'   
        src={gmail} 
        onClick={()=>handleEmailClick()}
        />
      <Avatar 
       className='avatarimg' 
        src={youtube} 
        onClick={()=>linkhandler("https://www.youtube.com/@icaruspictures703")}/>

    </Stack>
    </div>
  );
}