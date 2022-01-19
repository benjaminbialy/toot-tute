import React from 'react'
import "./StorePolicies.css"
function StorePolicies() {
    return (
        <div className="store__policies">
            <div className="store__policies--split">
                <div className="policy--img"></div>
                <div className="policies">
                    <h2>Our Store Policies</h2>
                    <p>Things You Need to Know</p>
                    <p>We founded TootTute with one goal in mind: giving our customers a fair, rewarding and enjoyable shopping and tutoring experience. We conduct business according to the same values, knowing that better service equals loyal customers. Our store policies are detailed below, please have a look and contact us if you want to learn more!</p>
                </div>
            </div>
            <div className="key--policy">A very simple policy: when you purchase our products through contacting us we will send you a secure OneDrive link so you can download the products to your chosen device. Also once you receive your product we urge you to no distribute it to others.
            </div>
        </div>
    )
}

export default StorePolicies
