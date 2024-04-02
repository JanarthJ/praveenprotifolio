import Projects from "./projects";
import "./project.css"

function Projectsmain(){
    return(
        <div className="projectsMain">
            <div className="projectsHead">Projects</div><br/>
        <div className="projectsElements" >
            <Projects
            Lang={'HTML/CSS'}
            title={'E-commerce landing page'}
            description={'lakasldaljd'}
            />
            <Projects  
            Lang={'Javascript'}
            title={'Sign In page'}
            description={'lakasldaljd'}/>
            <Projects Lang={'Figma'}
            title={'Portfolio Design'}
            description={'lakasldaljd'}/>
        </div>
        </div>
    )
}
export default Projectsmain;