import About from "../about/About";
import Header from "../header/header";
import Intro from "../intro/intro";
import SkillMain from "../skills/skillMain";



function Main() {
    return (
      <div >
        <Header/>
        <Intro/>
        {/* <About/> */}
        <SkillMain/>
      </div>
    );
  }
  
  export default Main;