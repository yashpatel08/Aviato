import React from 'react'
import w1 from '../image/why1.png'
import w2 from '../image/why2.png'
import w3 from '../image/why3.png'
import w4 from '../image/why4.png'
import w5 from '../image/why5.png'
import w6 from '../image/why6.png'
import s1 from '../image/s1.jpeg'
import s2 from '../image/s2.jpeg'
import s3 from '../image/s3.jpeg'
import s4 from '../image/s4.jpeg'
import c1 from '../image/c1.png'
import c2 from '../image/c2.png'

import p1 from '../image/p1.svg'
import p2 from '../image/p2.png'
import p3 from '../image/p3.png'
import p4 from '../image/p4.png'


const index = () => {
    return (
        <div className='index'>
            <div className="one" id='home'>

                <h1>
                    We bring the best of Technology to your business
                </h1>

                <p className='desc'>we have years of experience solving business problems with various technologies.</p>
                <a href='#contact' className='black-button'>Contact Us</a>

            </div>

            <div className='cards' id='about'>
                <h2>Why We ?</h2>
                <div className="card">
                    <div className='card-item'>

                        <img src={w1} alt="!" />
                        <h3>
                            Cost Optimization
                        </h3>
                        <p>
                            Experienced Google Cloud Consultants know
                            how to architect solutions for cost-efficiency,
                            avoiding overspending
                        </p>
                    </div>
                    <div className='card-item'>
                    <img src={w2} alt="!" />

                        <h3>
                            Expert Knowledge
                        </h3>
                        <p>
                            Founded by Ex-Googlers we know the technology, and how to use it to maximise the value to your business

                        </p>
                    </div>
                    <div className='card-item'>
                    <img src={w3} alt="!" />

                        <h3>
                            Security First
                        </h3>
                        <p>
                            Nobody wants to be the next Optus or Medibank. We prioritize security and always follow Google Cloud best practices
                        </p>
                    </div>
                    <div className='card-item'>
                    <img src={w4} alt="!" />

                        <h3>
                            Deep Expertise & Experience
                        </h3>
                        <p>
                            Nobody wants to be the next Optus or Medibank. We prioritize security and always follow Google Cloud best practices
                        </p>
                    </div>
                    <div className='card-item'>
                    <img src={w5} alt="!" />

                        <h3>
                            Not just a supplier
                        </h3>
                        <p>
                            A partner to build, run and scale your Google Cloud implementation to transform your business
                        </p>
                    </div>
                    <div className='card-item'>
                    <img src={w6} alt="!" />

                        <h3>
                            Strategic Vision
                        </h3>
                        <p>
                            Top Cloud Consultants understand your business and align solutions to deliver long-term value.
                        </p>
                    </div>
                </div>
            </div>


            <div className="service" id='services'>
                <h3>
                    Services We Offer
                </h3>

                <div className='card2'>
                    <div className='card-item2'>
                    <img src={s1} alt="!" className='service-img'/>

                        <h3>
                            Cloud Foundations
                        </h3>
                        <p>
                            A secure, scalable and resilient foundation is the core to ensuring success of your cloud project
                        </p>
                    </div>
                    <div className='card-item2'>
                    <img src={s2} alt="!" className='service-img'/>

                        <h3>
                            Cloud Security Reviews
                        </h3>
                        <p>
                            Periodic reviews of your cloud infrastructure compared to Google Cloud best practices, ensure cybersecurity doesn’t keep you up at night
                        </p>
                    </div>
                    <div className='card-item2'>
                    <img src={s3} alt="!" className='service-img'/>

                        <h3>
                            Data & Analytics
                        </h3>
                        <p>
                            Storing data is easy, joining data and gaining insights that are useful is where we excel
                        </p>
                    </div>
                    <div className='card-item2'>
                    <img src={s4} alt="!" className='service-img'/>

                        <h3>
                            AI & Machine Learning
                        </h3>
                        <p>
                            Want to harness the power of Google's AI tech to improve your business
                        </p>
                    </div>

                </div>

                <div className="other-service">
                    <h3>Other Services</h3>

                    <div className='other'>

                        <p>Dev Ops</p>
                        <p>Cloud Migrations</p>
                        <p>Managed Services</p>
                        <p>CI/CD</p>
                        <p>Mobile Apps</p>
                    </div>
                </div>
            </div>

            <div className='feedback' id='insight'>
                <h3>

                    What Our Clients Have To Say ?
                </h3>

                <div className='reviews'>
                    <div className='review'>
                        <h3>
                            AI Consulting Home Lending Company
                        </h3>
                        <p>7/10</p>
                        <p>"They were very consultative, with detailed and regular communication"</p>
                    </div>
                    <div className='review'>
                        <h3>
                            Mobile App Dev for P2P Sports Marketplace
                        </h3>
                        <p>8.5/10</p>
                        <p>"They made sure all my decisions were made with the most information possible"</p>
                    </div>

                </div>
            </div>

            <div className='invest' id='contact'>
                <h3>Ready To Invest In Your Company ?</h3>

                <div className="invest-items">

                    <div className='invest-item'>
                        <img src={c1} alt="!" id='c-call'/>
                        <h3>
                            Phone
                        </h3>
                        <p>

                            Give us a call +11 2 4188 9111
                        </p>
                    </div>
                    <div className='invest-item'>
                    <img src={c2} alt="!" className='c-img'/>

                        <h3>
                            Email

                        </h3>
                        <p>
                            Drop us an email on hello@aviato.consulting
                        </p>
                    </div>
                </div>
            </div>

            <div className="partnerships">
                    <h3>Partnerships</h3>

                    <div className='partner-comp'>
                        <div className='part'>
                        <img src={p1} alt="!" className='p-img'/>

                            <p>Semrush</p>
                        </div>
                        <div className='part'>
                        <img src={p2} alt="!" className='p-img'/>

                            <p>Hubspot</p>
                        </div>
                        <div className='part'>
                        <img src={p3} alt="!" className='p-img'/>

                            <p>Google Cloud</p>
                        </div>
                        <div className='part'>
                        <img src={p4} alt="!"  className='p-img'/>

                            <p>DesignRush</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default index