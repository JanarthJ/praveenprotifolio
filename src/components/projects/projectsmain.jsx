import Projects from "./projects";
import "./project.css"
import Htmlcssimg from "../../assets/htmlcss.jpg";
import Javascriptimg from "../../assets/javascript.jpg";
import Figma from "../../assets/figma.jpg";

function Projectsmain({ refProp } ){
    return(
        <div ref={refProp} className="projectsMain">
            <div className="projectsHead">Projects</div><br/>
        <div className="projectsElements" >
            <Projects
            Lang={'HTML/CSS'}
            title={'E-commerce landing page'}
            description={"Create an e-commerce page showcasing Vincent van Gogh's artworks using HTML/CSS. Features include sections for featured pieces, product categories, and a simple checkout. Prioritize responsive design and UX for seamless browsing and purchasing."}
            imgsource={Htmlcssimg}
            url={"https://github.com/Prav-17/javafst/tree/main/project"}
            />
            <Projects  
            Lang={'Javascript'}
            title={'Sign In page'}
            description={"Create a dynamic sign-in page using JavaScript for robust form validation. Ensure accurate input and feedback, enhancing user experience with seamless transitions and error handling for a smooth sign-in process."}
            imgsource={Javascriptimg}
            url={"https://github.com/Prav-17/javafst/tree/main/javascript/Sign%20in%20page"}/>
            <Projects Lang={'Figma'}
            title={'Portfolio Design'}
            description={"Create a captivating portfolio layout using Figma, showcasing projects, skills, and experiences. Utilize Figma's tools for seamless prototyping and collaboration, ensuring a visually appealing and user-friendly design."}
            imgsource={Figma}
            url={"https://www.figma.com/file/4XBW9zty2FDCPdSDoojrgB/Untitled?type=design&node-id=0%3A1&mode=design&t=1rHquZM4ICwneS8y-1"}/>
        </div>
        </div>
    )
}
export default Projectsmain;