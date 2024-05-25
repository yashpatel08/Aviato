import React, { useState } from 'react'
import logo from '../image/logo.png'
const Navbar = () => {

    const [bool, setBool] = useState(false);


    const display = () => {

        setBool(!bool);
    }
    return (
        <div className='navv'>
            <div className='toogle-div' >
            <img className='left-logo' src={logo} />
                
            <button className='toogle' onClick={display}>x</button>
            </div>
            <div className="navbar">
                <div className='nav'>
                    <div className='nav-items'>
                        <img className='left' src={logo} />
                        <a href='#home' className='links'>Home</a>
                        <a href='#services' className='links'>Services</a>
                        <a href='#insight' className='links'>Insights</a>
                        <a href='#about' className='links'>About Us</a>
                        <a href='#contact' className='links'>Contact Us</a>
                    </div>
                    {bool &&
                        <div className='nav-items2'>
                            <a href='#home' className='links'>Home</a>
                            <a href='#services' className='links'>Services</a>
                            <a href='#insight' className='links'>Insights</a>
                            <a href='#about' className='links'>About Us</a>
                            <a href='#contact' className='links'>Contact Us</a>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar