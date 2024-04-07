import './Contact.css';
import MadeBy from './madeUsing';

export default function Footer(){
    return(        
    <div className="madeusing" 
        style={{
            backgroundColor:'white', 
            color:'black',            
        }}>
            <div style={{margin:"auto"}}>
                <p style={{textAlign:"center"}}>Made using</p>
                <MadeBy/>
                <p style={{textAlign:"center"}}>Copyright &copy; 2024</p>
            </div>
    </div>
    )
}