import About from "../about/About";
import Header from "../header/header";
import Intro from "../intro/intro";
import SkillMain from "../skills/skillMain";
import Imgslider from "../carousel/Slider";
import Contactme from "../contact/Contactme";
import Projectsmain from "../projects/projectsmain";
import "./main.css";
import Footer from "../contact/footer";
import React, { useRef } from 'react';

function Main() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      console.log("clicked",ref);
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
      <div className="mainHeadDiv" >      
        <Header
        scrollToSection1={() => scrollToRef(section1Ref)}
        scrollToSection2={() => scrollToRef(section2Ref)}
        scrollToSection3={() => scrollToRef(section3Ref)}
        scrollToSection4={() => scrollToRef(section4Ref)}
        scrollToSection5={() => scrollToRef(section5Ref)}
        scrollToSection6={() => scrollToRef(section6Ref)}
        scrollToSection7={() => scrollToRef(section7Ref)}
        />
        <Intro refProp={section1Ref}/>
        <About refProp={section2Ref}/>
        <SkillMain refProp={section3Ref}/>
        <Projectsmain refProp={section4Ref}/>
        <Imgslider refProp={section6Ref}/>
        <Contactme refProp={section5Ref}/>
        <Footer refProp={section7Ref}/>
      </div> 
    );
  }
  
  export default Main;