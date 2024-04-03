import Projects from "./projects";
import "./project.css"
import Htmlcssimg from "../../assets/htmlcss.jpg";
import Javascriptimg from "../../assets/javascript.jpg";
import Figma from "../../assets/figma.jpg";

function Projectsmain(){
    return(
        <div className="projectsMain">
            <div className="projectsHead">Projects</div><br/>
        <div className="projectsElements" >
            <Projects
            Lang={'HTML/CSS'}
            title={'E-commerce landing page'}
            description={'lakasldaljd'}
            imgsource={Htmlcssimg}
            />
            <Projects  
            Lang={'Javascript'}
            title={'Sign In page'}
            description={'lakasldaljd'}
            imgsource={Javascriptimg}/>
            <Projects Lang={'Figma'}
            title={'Portfolio Design'}
            description={'lakasldaljd'}
            imgsource={Figma}/>
        </div>
        </div>
    )
}
export default Projectsmain;