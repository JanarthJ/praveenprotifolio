import About from "../about/About";
import Header from "../header/header";
import Intro from "../intro/intro";
import SkillMain from "../skills/skillMain";
import Imgslider from "../carousel/Slider";
import Contactme from "../contact/Contactme";
import Projectsmain from "../projects/projectsmain";
import "./main.css";


function Main() {
    return (
      <div className="mainHeadDiv" >
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