import React from 'react'
import TestimonialTemplate from './TestimonialTemplate.js'
import "./Testimonials.css"

function Testimonials() {
    return (
        <div className="testimonials">
            <div className="testimonials--header">
                <h2>Honest Accounts</h2>
                <p>Word of Mouth</p>
            </div>
            <div className="testimonials--container">
            <TestimonialTemplate name= "Benjamin Bialy" review="Alex assisted greatly in my learning of various complex mathematical concepts such as geometric proofs, teaching me how to approach them in a simple and easy way so that I could do well in my test. He did so in a very calm and professional manner."/>
            <TestimonialTemplate name= "Noah Clark" review="Very knowledgable in VCE Biology units 3 and 4, he helped me with understanding the complexities of the humoral and cell mediated adaptive immune responses in such a simple and basic way that I was able to beast my SAC and get a 95%. I highly recommend Alex as a biology tutor."/>
            <TestimonialTemplate name= "Sofia Bikicki" review="Alex is a highly intelligent individual who helped me to understand the more complex concepts in biology in the simplest ways. His engaging and friendly nature aided me to achieve A+ results all year round and finished my exam with confidence!"/>
            </div>
            
        </div>
    )
}

export default Testimonials
