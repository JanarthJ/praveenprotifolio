import * as React from 'react';
import Box from '@mui/material/Box';
import "./intro.css";
import { Avatar } from '@mui/material';
import Socials from './Socials';

function Intro() {
    return (
      <div className="Intro-MainDiv" style={{marginTop:"80px"}}>
            <Box component="section">
                <div className='introclasscont'>
                  <span style={{fontSize:'120%', fontWeight: 'bold', fontFamily:'sans-serif'}}>Hello, This is</span>
                  <span style={{fontSize:'600%', fontWeight: "bold", fontFamily:'sen', position: 'relative', right:'7px'}}>Praveen N</span>
                  <span style={{fontSize:'150%', fontWeight: 'normal', fontFamily:'sans-serif'}}>Front End Developer</span>
                  <Socials className="socials"></Socials>
                  <button className='introbutton'>Download CV</button>
                </div>
            </Box>
            <Avatar
                   alt="Remy Sharp"
                   src="/static/images/avatar/1.jpg"
                   sx={{ width: 250, height: 250 }}
                   style={{position: 'relative', left: '1400px', bottom: '470px'}}
                  />
      </div>
    );
  }
  
  export default Intro;