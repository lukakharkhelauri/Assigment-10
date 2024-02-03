import React from 'react';
import module from '../modules/Footer.module.scss'
import Logo from "../assets/images/logo.svg"
import PhoneIcon from '../assets/images/icon-phone.svg'
import EmailIcon from '../assets/images/icon-email.svg'

const Footer = () => {

  return (
    <footer className={module.footer}>
      <div className={module.footerContent}>
        <div className={module.logo}>
          <img src={Logo} alt="Logo" className={module.logo} />
        </div>
        <div className={module.textContent}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className={module.contactInfo}>
            <div className={module.infoItem}>
              <img src={PhoneIcon} alt="Phone" className={module.infoItemIcon} />
              <span>123-456-7890</span>
            </div>
            <div className={module.infoItem}>
              <img src={EmailIcon} alt="Email" className={module.infoItemIcon} />
              <span>info@example.com</span>
            </div>
          </div>
        </div>
        <div className={module.footerLinks}>
          <a href="#" className={module.link}>About Us</a>
          <a href="#" className={module.link}>Jobs</a>
          <a href="#" className={module.link}>Press</a>
          <a href="#" className={module.link}>Blog</a>
          <a href="#" className={module.link}>Contact Us</a>
          <a href="#" className={module.link}>Terms</a>
          <a href="#" className={module.link}>Privacy</a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;