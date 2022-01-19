import React, {useState} from 'react'
import "./Header.css"

function Header() {
    const [drop, setDrop] = useState(0)

    const dropdownToggle = () => {
        console.log("clicked")
        if(drop === 0){
            setDrop(1)
        }else{
            setDrop(0)
        }
    }

    return (
        <div className="header">
            <div className="header--left">
                <a href="/">TootTute</a>
            </div>
            <div className="header--right">
                <ul className="header--right--items">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="Book-Now">Book Now</a>
                    </li>
                    <li>
                        <a href="Shop">Shop</a>
                    </li>
                    <li>
                        <a href="Testimonials">Testimonials</a>
                    </li>
                    <li>
                        <a href="FAQ">FAQ</a>
                    </li>
                    <li>
                        <a href="Contact">Contact</a>
                    </li>
                    <li>
                        <a href="Store-Policies">Store Policies</a>
                    </li>
                    <li>0402610093</li>
                </ul>
                        <ul>
                            <div className="dropdown">
                            <li>
                                <button onClick={() => dropdownToggle()} className='menu'>Menu</button>
                            </li>
                                    { drop === 1 &&
                                    <div className="dropdown--menu">
                                        <a href="/">Home</a>
                                        <a href="Book-Now">Book Now</a>
                                        <a href="Shop">Shop</a>
                                        <a href="Testimonials">Testimonials</a>
                                        <a href="FAQ">FAQ</a>                    
                                        <a href="Contact">Contact</a>                        
                                        <a href="Store-Policies">Store Policies</a>
                                    </div>}
                            </div>
                        </ul>
                    </div>
            </div>
    )
}

export default Header
