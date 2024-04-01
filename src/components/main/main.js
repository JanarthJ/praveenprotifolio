import { Slider } from "@mui/material";
import About from "../about/About";
import Header from "../header/header";
import Intro from "../intro/intro";
import SkillMain from "../skills/skillMain";
import Imgslider from "../carousel/Slider";
import Contactme from "../contact/Contactme";
import Projectsmain from "../projects/projectsmain";



function Main() {
    return (
      <div style={{display:'grid', gridTemplateRows:'0.1fr auto auto auto auto 3.1fr 2.1fr', backgroundColor:'black'}} >
        <Header/>
        <Intro/>
        <About/>
        <SkillMain/>
        <Projectsmain/>
        <Imgslider/>
        <Contactme/>

      </div> 
    );
  }
  
  export default Main;