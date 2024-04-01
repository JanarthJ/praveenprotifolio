import Projects from "./projects";
import "./project.css"

function Projectsmain(){
    return(
        <div className="projectsMain">
            <span className="projectsHead">Projects</span><br/>
        <div className="projectsElements" >
            <Projects/>
            <Projects/>
            <Projects/>
        </div>
        </div>
    )
}
export default Projectsmain;