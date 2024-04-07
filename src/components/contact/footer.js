import './Contact.css'
import Socials from '../intro/Socials'

export default function Footer(){
    return(        
    <div className="madeusing" style={{backgroundColor:'white', color:'black'}}>
    <p>Made using</p>
    <Socials/>
    </div>
    )
}