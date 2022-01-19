import React from 'react'
import "./FAQ.css"
import QandA from './QandA'

function FAQ() {
    return (
        <div className="faq">
            <div className="faq--header">
                <h2>FAQs</h2>
                <p>How Can We Assist?</p>
            </div>
            <QandA question="What is your product policy?" answer="When you purchase our digital products we urge you to not distribute them to others as it affects our local business and ruins our hard work that we put into our products"/>
            <QandA question="How do we know you are a good tutor?" answer="We offer our first tutoring session free so that we can let you decide on whether you think that we are a good tutoring option for your studies and are worth your time and money. If you do not like our skills and expertise upon sitting out first free session you can let us know and give us some information for future improvements. However, if you do enjoy our teaching skills we will welcome you and organise something from their on how frequently you would like us to tutor you."/>
            <QandA question="What are the payment options?" answer="We offer payment through account transfer for all our products. However for our tutoring sessions we can organise payment through account or cash depending on what suits your needs."/>
        </div>
    )
}

export default FAQ
