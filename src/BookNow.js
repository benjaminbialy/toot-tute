import React from 'react'
import "./BookNow.css"
function BookNow() {
    return (
        <div className="book__now">
            <div className="booking--img" ></div>
            <div className="booking--info">
                <h1>How to book a session</h1>
                <p>Scheduling a tutoring session</p>
                <p>TootTute offers a wide array of tutoring in the following subjects: VCE Units 1 and 2 Specialist Math, Math Methods, Physics, Chemistry, English Language, Biology and VCE Units 3 and 4 Biology. To book a session in any of the following subjects please click the 'Book Now' button below and call my number or send me a text and we can take it from there.</p>
                <div className="booking--button">
                    <a href="tel:0402610093">Book Now</a>
                </div>
            </div>
        </div>
    )
}

export default BookNow
