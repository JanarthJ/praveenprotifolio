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
            description={"Craft an e-commerce landing page for Vincent van Gogh's artworks using HTML and CSS. Include sections for featured artworks, product categories, artist bio, and a call-to-action. Ensure responsive design, engaging visuals, and seamless e-commerce functionalities. Maintain UX and accessibility standards for an optimal browsing and shopping experience."}
            imgsource={Htmlcssimg}
            />
            <Projects  
            Lang={'Javascript'}
            title={'Sign In page'}
            description={"Craft an e-commerce landing page for Vincent van Gogh's artworks using HTML and CSS. Include sections for featured artworks, product categories, artist bio, and a call-to-action. Ensure responsive design, engaging visuals, and seamless e-commerce functionalities. Maintain UX and accessibility standards for an optimal browsing and shopping experience."}
            imgsource={Javascriptimg}/>
            <Projects Lang={'Figma'}
            title={'Portfolio Design'}
            description={"Craft an e-commerce landing page for Vincent van Gogh's artworks using HTML and CSS. Include sections for featured artworks, product categories, artist bio, and a call-to-action. Ensure responsive design, engaging visuals, and seamless e-commerce functionalities. Maintain UX and accessibility standards for an optimal browsing and shopping experience."}
            imgsource={Figma}/>
        </div>
        </div>
    )
}
export default Projectsmain;