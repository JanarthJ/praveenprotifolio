import * as React from 'react';
import Box from '@mui/material/Box';
import "./intro.css";
import { Avatar } from '@mui/material';
import Socials from './Socials';

function Intro() {
    return (
      <div className="Intro-MainDiv" style={{marginTop:"80px"}}>
            <Box className='Intro-boxMain' component="section">
                <div className='introclasscont'>
                  <div className='introHello'>Hello, This is</div>
                  <div className='introPraveen'>Praveen N</div>
                  <div className='introfront'>Front End Developer</div>
                  <Socials className="socials"></Socials>
                  <div><button className='introbutton'>Download CV</button></div>
                </div> 
            </Box>
            <div style={{margin:'auto'}}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: '18vw', height: '18vw'}}          
                    // style={{position:"absolute",right:220,bottom:300}}         
                    />
            </div>
            
      </div>
    );
  }
  
  export default Intro;