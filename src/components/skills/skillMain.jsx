import Skills from "./skills";
import "./skills.css";

//parent component
function SkillMain(){
    return(
        <div className="skillsTopDiv">
            <span className="skillHeader" style={{color:'white', fontFamily:'Sen'}}>Skills</span>
            <div className="skillMainDiv">  
                <Skills 
                role={"Developer"} 
                skillList={['HTML','CSS','JAVASCRIPT','REACT']}
                />
                <Skills role={"Photographer"}
                skillList={['AdobePS','AdobePremiurPro']}
                />       
            </div>    
        </div>
    );
}

export default SkillMain; 