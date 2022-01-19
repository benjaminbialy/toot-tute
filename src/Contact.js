import React from 'react'
import "./Contact.css"

function Contact(props) {
    return (
        <div className="contact" style={{backgroundColor: props.bkgCol}}>
            <div className="contact--info">
                <h2>Contact</h2>
                <p>We’d love to hear from you! Get in touch, and we’ll reply promptly. Ask us enquiries you may have about us or if you would like any help with your VCE studies.</p>
            </div>
            <form action="mailto:contact@yourdomain.com" method="POST" encType="text/plain" name="EmailTestForm">
                <label  for="name">Name *</label>
                <input style={{backgroundColor: props.bkgCol}}  type="text" id="Name" name="Name"required/>
                <label for="subject">Subject *</label>
                <input style={{backgroundColor: props.bkgCol}} type="text" id="subject" name="subject" required/>
                <label for="message">Message *</label>
                <input style={{backgroundColor: props.bkgCol}} type="text" id="subject" name="message" required/>
                <input type="submit" value="Submit" id="submit--button"/>
            </form>
        </div>
    )
}

export default Contact
