import Skills from "./skills";
import "./skills.css";

//parent component
function SkillMain(){
    return(
        <div className="skillsTopDiv">
            <span className="skillHeader" style={{color:'white', fontFamily:'Sen'}}>Skills</span>
            <div className="skillMainDiv">  
                <Skills 
                role={"Front End Developer"} 
                skillList={['HTML','CSS','JAVASCRIPT','REACT']}
                />
                <Skills role={"Photographer"}
                skillList={['Adobe Photoshop','Adobe PremierPro','Adobe After Effects','Canva','Davinci Resolve']}
                />       
            </div>    
        </div>
    );
}

export default SkillMain; 