import Skills from "./skills";
import "./skills.css";
import frontimg from '../../assets/background2.jpg'
import photopic from '../../assets/background3.jpg'
//parent component
function SkillMain(){
    return(
        <div className="skillsTopDiv">
            <div className="skillHeader" style={{color:'white', textAlign:'center',fontWeight:'bolder'}}>Skills</div>
            <div className="skillMainDiv">  
                <Skills
                role={"Front End Developer"} 
                skillList={['Html','CSS','Javascript','ReactJs','MaterialUI','Figma']}
                bimg={photopic}
                />
                <Skills 
                role={"Photographer"}
                skillList={['Adobe Photoshop','Adobe PremierPro','Adobe After Effects','Canva','Davinci Resolve']}
                bimg={frontimg}
                />       
            </div>    
        </div>
    );
}

export default SkillMain; 