import React from 'react'
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import "./QandA.css"

function QandA(props) {
    return (
        <div className="qna">
            <ContactSupportOutlinedIcon style={{color: "#727557"}} fontSize='large'/>
            <h3>{props.question}</h3>
            <p>{props.answer}</p>
        </div>
    )
}

export default QandA
