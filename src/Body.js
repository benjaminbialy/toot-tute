import React from 'react'
import "./Body.css"
import {useState} from "react"

var index = 0;

function Body() {
    const [slide, setSlide] = useState("https://static.wixstatic.com/media/a3c153_e48867de15e3448fb46666ec0297b5f6~mv2.jpg/v1/fill/w_1349,h_690,al_c,q_85,usm_0.66_1.00_0.01/a3c153_e48867de15e3448fb46666ec0297b5f6~mv2.webp");
    const images =[
        "https://static.wixstatic.com/media/a3c153_e48867de15e3448fb46666ec0297b5f6~mv2.jpg/v1/fill/w_1349,h_690,al_c,q_85,usm_0.66_1.00_0.01/a3c153_e48867de15e3448fb46666ec0297b5f6~mv2.webp",
        "https://static.wixstatic.com/media/37f5df_af5feabaa8f34a93b006eb72cfebb0d0~mv2.jpg/v1/fill/w_1349,h_690,al_t,q_85,usm_0.66_1.00_0.01/37f5df_af5feabaa8f34a93b006eb72cfebb0d0~mv2.webp",
        "https://static.wixstatic.com/media/37f5df_12a1055ecbfa4442a6015cd69407b003~mv2.jpg/v1/fill/w_1349,h_690,al_c,q_85,usm_0.66_1.00_0.01/37f5df_12a1055ecbfa4442a6015cd69407b003~mv2.webp",
        "https://static.wixstatic.com/media/37f5df_02c6c5ec884048b28852e374a26e9dd2~mv2.jpg/v1/fill/w_1124,h_575,al_c,q_85/37f5df_02c6c5ec884048b28852e374a26e9dd2~mv2.webp"
    ]

        const next = () => {
        if (index < 3) {
            setSlide(images[index + 1])
            index += 1
        }else if(index===3){
            setSlide(images[0])
            index = 0;}
        };
    
        const previous = () => {
            if (index <= 3 && index > 0) {
                setSlide(images[index - 1])
                index -= 1
                return console.log(index)
            }else{
                setSlide(images[3])
                index = 3;}
            };

    return (
        <div className="body">
            <div className="body--bkg"></div>
            <div className="body--img"></div>
            <div className="body--tutoring">
                <h2>Tutoring</h2>
                <p>Save More, Learn More</p>
                <p>Welcome to TootTute. Our great selection of products will cover all of your needs for VCE biology units 3 and 4, whatever and wherever they may be. Enjoy our exceptional shopping experience and contact our customer service with questions or comments.</p>
            </div>
            <div className="body--split">
                <div className="body--split--about__us">
                    <h2>About Us</h2>
                    <p>The smart way of Learning</p>
                    <p id="padding--bottom">Hi I'm Alex, a current year 12 student at St. Paul's Anglican Grammar School. I have recently finished VCE Biology in 2021 and am offering tutoring for any VCE Biology students doing units 1 &#38; 2 or 3 &#38; 4 in 2022. I have a highly sophisticated knowledge of the new 2022 study design and great approach to teaching you guys how to visualise and understand the content on a deeper level rather than just rote learning which will get you nowhere. I ranked top 3 in my cohort and am awaiting my RAW study score. I also tutor VCE units 1 	&#38; 2 Specialist Math, Math Methods, Chemistry, Physics and English Language.</p>
                </div>
                <div className="body--split--img">
                    <img alt="A book" src="https://static.wixstatic.com/media/816b56952c68425497483544f588fb5a.png/v1/fill/w_584,h_606,fp_0.50_0.50,q_85/816b56952c68425497483544f588fb5a.webp"></img>
                </div>
            </div>
            <div className="body--services">
                <h2>Services</h2>
                <p>What subject do you need help in?</p>
                <div className="body--services--split">
                    <div className="body--services--split--img">
                        <img alt="Biology diagram" src="https://static.wixstatic.com/media/37f5df_ba28249fbc0249be95135e24f4cc28e8~mv2.png/v1/fill/w_595,h_720,al_c,q_90,usm_0.66_1.00_0.01/37f5df_ba28249fbc0249be95135e24f4cc28e8~mv2.webp"></img>
                    </div>
                    <div className="body--services--split--info">
                        <h3>Book a Tutoring Session</h3>
                        <p>Visualising Learning</p>
                        <p>TootTute offers a wide array of tutoring in the following subjects: VCE Units 1 and 2 Specialist Math, Math Methods, Physics, Chemistry, English Language, Biology and VCE Units 3 and 4 Biology. To book a session in any of the following subjects please click the 'Book Now' button below and call my number or send me a text and we can take it from there. I would also like to point out that I charge $40 dollars an hour and our first session is free so you can decide if you would like to continue with me.</p>
                        <a href="Book-Now">Book Now</a>
                    </div>
                </div>
            </div>
            <div className="body--purchasing--split">
                <h2>Purchasing our Items</h2>
                <p>We do not offer our items to be purchased directly off our website rather we send you a secure link with our item so that you can download it from there once the payment has been received. So to purchase any of these products listed below contact us by shooting a message on which product you would like and we will organise it with you from there on.</p>
            </div>
            <div className="body--scroller">
                <img src={slide} alt="resources" className="body--scroller--item"></img>
                {index === 0 &&
                <div className="body--scroller--text">
                    <h2>Our list of VCE {<br/>} products</h2>
                    <a className="view--shop" href="/Shop">VIEW</a>
                </div>
                }

                <div className="scroller--buttons">
                    <div onClick={() => previous()} className="previous--button" >&#10094;</div>
                    <div onClick={() => next()} className="next--button" >&#10095;</div>
                </div>
            </div>
        </div>
    )
}

export default Body
