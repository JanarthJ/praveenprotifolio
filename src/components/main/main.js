import { Slider } from "@mui/material";
import About from "../about/About";
import Header from "../header/header";
import Intro from "../intro/intro";
import SkillMain from "../skills/skillMain";
import Imgslider from "../carousel/Slider";



function Main() {
    return (
      <div style={{display:'grid', gridTemplateRows:'0.1fr 3.4fr 2fr 4fr 2.5fr', backgroundColor:'black'}} >
        <Header/>
        <Intro/>
        <About/>
        <SkillMain/>
        <Imgslider/>

      </div>
    );
  }
  
  export default Main;