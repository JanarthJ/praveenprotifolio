import About from "../about/About";
import Header from "../header/header";
import Intro from "../intro/intro";
import SkillMain from "../skills/skillMain";



function Main() {
    return (
      <div style={{
        display:"grid",
        gridTemplateRows:"0.5fr 5.5fr 6fr",
        backgroundColor:"black"}}>
        <Header/>
        <Intro/>
        {/* <About/> */}
        <SkillMain/>
      </div>
    );
  }
  
  export default Main;