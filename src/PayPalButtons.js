import React, { useState, useRef, useEffect} from 'react'
import "./PayPalButtons.css"


function PayPalButtons(props) {
    const {price, access__link} = props
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)
    const paypalRef = useRef()
    
    useEffect(()=>{
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [{
                            description: "TootTute Digital Resources",
                            amount:{
                                currency: "AUD",
                                value: price
                            }
                        }],
                        return_url: "/confirmation"
                    })
                
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    setPaidFor(true)
                },
                onError: err => {
                    setError(err)
                }
            }).render(paypalRef.current)
    })

    if (paidFor){
        return(
                <div className='paypal__buttons'>Thanks for choosing TootTute!</div>
        )
    }

    if(error){
        return(
            <div className='paypal__buttons'>Error encountered, please press back and try again.</div>
        )
    }
    return(
        <div ref={paypalRef}></div>
    )

}

export default PayPalButtons
