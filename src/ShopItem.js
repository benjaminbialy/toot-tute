import React from 'react'
import './ShopItem.css'
import {useState} from "react"
import PayPalButtons from "./PayPalButtons.js"

function ShopItem(props) {
    const [payment, setPayment] = useState(0);

    const makePayment = () =>{
        setPayment(payment+1);
    }
    const closeMakePayment = () =>{
        setPayment(payment-1);
    }

    return (
        <div className='shopitem' style={{flexDirection: props.direction}}>
        <div className="shopitem--img" 
        style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + props.shopitem__image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
        </div>
                {payment === 0 ?
                    <div className="shopitem--info">
                        <h2>{props.idItem}</h2>
                        <h2>{props.product}</h2>
                        <p>{props.desc}</p>
                        <a onClick={() => makePayment()} className="buy__btn">BUY</a>
                    </div>:
                    <div className="shopitem--info">
                        <h2>{props.idItem}</h2>
                        <h2 style={{paddingBottom:"20%"}} >{props.product}</h2>
                        <PayPalButtons access__link={props.access__link} price={props.price}/>
                        <a onClick={() => closeMakePayment()} className="buy__btn">BACK</a>
                    </div>
                }
        </div>
    )
}

export default ShopItem
