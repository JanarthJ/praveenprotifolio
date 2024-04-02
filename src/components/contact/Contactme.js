import "./Contact.css"
export default function Contactme(){
    return(
        <div className="Contactouterdiv">
            <div className="contactHead">Contact Me</div>
        <div className="contactMaindiv">
            <div className="ContactEmail" >
                <div className="contact-lets">Let's stay</div>
                <div className="contact-con">Connected</div>
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
                    <div>Send me your queries</div>
                    <div className="contactElements" >
                        <div className="contactinputDiv">
                            <label htmlFor="guestName">Name </label>
                            <input id="guestName" placeholder="Name" type="type"></input><br/>
                        </div>
                        <div className="contactinputDiv">
                            <label htmlFor="guestEmail">Email  </label>
                            <input id="guestEmail" placeholder="email" type="Email"></input><br/>
                        </div>
                        <div className="contactinputDiv">
                            <label htmlFor="guestMsg">Message </label>
                            <textarea id="guestMsg" rows={5} placeholder="Message" type="type" ></textarea><br/>
                        </div>
                    </div>
                    <div className="contactButton">
                        <button className="contactButtons">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}