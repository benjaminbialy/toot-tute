import React from 'react'
import "./TestimonialTemplate.css"
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';

function TestimonialTemplate(props) {
    return (
        <div className="testimonial">
            <FormatQuoteOutlinedIcon className="quote" style={{color: "#727557"}} fontSize='large'/>
            <p>{props.review}</p>
            <p className="name">{props.name}</p>
        </div>
    )
}

export default TestimonialTemplate
