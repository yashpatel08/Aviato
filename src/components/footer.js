import React from 'react'
import logo from '../image/logo.png'


const footer = () => {
    return (
        <div className='main-foot'>
            <img className='footer-logo' src={logo} />

            <div className='foot1'>
                <p>Aviato Consulting unlease the best of Google technology on your business problems.</p>
                <p>Founded by ex-Google Cloud Consultant, and leaders to help you revolutionise your industry.</p>
            </div>
            <div className="foot2">
                <h4>Links</h4>
                <div className='lin'>
                    <a href='#home' className='links'>Home</a>
                    <a href='#services' className='links'>Services</a>
                    <a href='#insight' className='links'>Insights</a>
                    <a href='#about' className='links'>About Us</a>
                    <a href='#contact' className='links'>Contact Us</a>
                </div>
            </div>

            <div className="foot3">
                <h4>Contact us</h4>
                <div>
                    <p>Contact us</p>
                    <p>Australia, Aviato Consulting Pty Ltd, 59 Parry St, Newcastle 2300 +61 2 6188 9111

                    </p>
                    <p>India, Aviato Consulting Pvt Ltd, 53 Shree Narayandham Bungalows, Thaltej, Hebatpur Rd, India +91 9409 590 108</p>
                </div>
            </div>

            <p className='copyright'>@2024 copyright by aviato consulting. all rights reserved</p>
        </div>
    )
}

export default footer