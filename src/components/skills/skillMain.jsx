import Skills from "./skills";
import "./skills.css";

function SkillMain(){
    return(
        <div className="skillMainDiv">
            <p style={{fontWeight:'bold',fontSize:'32px',color:'white', fontFamily:'sen'}}>Skills</p>
            <br></br>           
            <Skills/>
            <Skills/>
        </div>
    );
}

export default SkillMain;