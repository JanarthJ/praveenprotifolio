import * as React from 'react';
import Box from '@mui/material/Box';
import "./intro.css";
import { Avatar } from '@mui/material';
import Socials from './Socials';
import PraveenImg from "../../assets/Profile.jpg";


function Intro({ refProp }) {
    return (
      <div ref={refProp} className="Intro-MainDiv" style={{marginTop:"80px"}}>
            <Box className='Intro-boxMain' component="section">
                <div className='introclasscont'>
                  <div className='introHello'>Hello, This is</div>
                  <div className='introPraveen'>Praveen N</div>
                  <div className='introfront'>Front End Developer</div>
                  <Socials className="socials"></Socials>
                  <div><button className='introbutton' onClick={()=>{
                    window.open("https://drive.google.com/file/d/105afXoJdxtdNP-hIxSBJMVYfC13f1H9r/view?usp=drive_link","_blank")
                  }} style={{backgroundColor:'black', color:'white'}}>Download CV</button></div>
                </div> 
            </Box>
            <div style={{margin:'auto'}}>
                  <Avatar
                    alt="Praveen"
                    src={PraveenImg}
                    sx={{ width: '18vw', height: '18vw'}}          
                    // style={{position:"absolute",right:220,bottom:300}}         
                    />
            </div>
            
      </div>
    );
  }
  
  export default Intro;