import "./Contact.css"
export default function Contactme(){
    return(
        <div className="Contactouterdiv">
            <div className="contactHead">Contact Me</div>
        <div className="contactMaindiv">
            <div className="ContactEmail" >
                <span>Let's stay</span><br/>
                <span>Connected</span>
                <div className="perEmail">
                    <img src="" alt="email"></img>
                    <div>
                        Email me at <br/>
                        <span style={{color: "blue"}}>praveen17mails@gmail.com</span> 

                    </div>
                </div>
                
            </div>
            <div className="contactForm">
                <div className="contactBox" >
                <span>Send me your queries</span><br/>
                <div className="contactElements contactRows contactCols" >
                <label htmlFor="guestName">Name</label>
                <input id="guestName" placeholder="Name" type="type"></input><br/>
                <label htmlFor="guestEmail">Email</label>
                <input id="guestEmail" placeholder="email" type="Email"></input><br/>
                <label htmlFor="guestMsg">Message</label>
                <input id="guestMsg" placeholder="Message" type="type" style={{height:'30vh',width:'20vw'}}></input><br/>
                </div>
                <div className="contactButton">
                <button>Submit</button>
                <button>Reset</button>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}