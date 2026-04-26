import phoneLogo from "../assets/phone.png"
import mailLogo from "../assets/mail.png"
import qualiLogo from "../assets/qualification.png"
import positionLogo from "../assets/position.png"

function MainBody(probs){
    return(
        <div className="staff-card">
            <div className="image-box">
                <img className="staffImage" src={probs.entry.image.src} alt={probs.entry.image.alt} />
            </div>
            
            <div className="contact-wrapper">
                <h3>{probs.entry.name}</h3>
                <div className="contact-phone">
                    <img className="icons" src={positionLogo} alt="position logo" />
                    <span>{probs.entry.position}</span>
                </div>
                <div className="contact-phone">
                    <img className="icons" src={qualiLogo} alt="Education logo" />
                    <span>{probs.entry.education}</span>
                </div>
                <div className="contact-phone">
                    <img className="icons" src={phoneLogo} alt="phone logo" />
                    <span>{probs.entry.phone}</span>
                </div>
                <div className="contact-phone">
                    <img className="icons" src={mailLogo} alt="mail logo" />
                    <span>{probs.entry.email}</span>
                </div>
            </div>
        </div>
    )
}

export default MainBody