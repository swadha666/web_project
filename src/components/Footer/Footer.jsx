import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel suscipit quasi fugit earum ex aperiam, consectetur natus sint voluptas asperiores qui, necessitatibus, eum explicabo doloremque distinctio! Provident, magni. Ipsa, ex.</p>
           <div className="footer-social-icons">
           <img src={assets.facebook_icon} alt="" />
           <img src={assets.twitter_icon} alt="" />
           <img src={assets.linkedin_icon} alt="" />
           </div>
        </div>
        <div className="footer-content-center">
        <h2>Company</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
        </div>
        <div className="footer-content-right">
         <h2>Get In Touch</h2>
        <ul>
    <li>9812345678</li>
    <li>tomato@company.com</li>
       </ul>
        </div>
    </div>
    <hr/>
    <p className="footer-copyright">Copyright 2025 @ tomato.com- All right reserved</p>
</div>
  )
}

export default Footer
