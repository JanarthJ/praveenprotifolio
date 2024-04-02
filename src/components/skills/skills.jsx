import "./skills.css";
import imgback from "../../assets/background.png"

//child
function Skills(props){
    return(        
        <div className="SkillsDiv">
            <div className="innerDiv">
                <div className="frontendDiv stylefront">
                        <p>{props.role}</p>
                </div>
                <div className="backendDiv">
                    <ul>
                        {
                        props.skillList.map((data,index)=>{
                            return(
                                <li key={index}>{data}</li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </div>        
    );
}

export default Skills;