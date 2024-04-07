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
                <p>
                <span>Copyright &copy; 2024 </span>
                </p>
            </div>
    </div>
    )
}