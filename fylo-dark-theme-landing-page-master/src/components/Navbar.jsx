import React from 'react';
import Logo from "../assets/images/logo.svg"
import module from '../modules/Navbar.module.scss'; 
import MainIllustration from "../assets/images/illustration-intro.png"

const Navbar = () => {
    return (
        <div>
        <nav className={module.navbar}>
          <div className={module.logoContainer}>
            <img src={Logo} alt="Logo" className={module.logo} />
          </div>
          <div className={module.menuContainer}>
            <div className={module.menuItem}>Features</div>
            <div className={module.menuItem}>Team</div>
            <div className={module.menuItem}>Sign In</div>
          </div>
        </nav>
  
        <div className={module.introContainer}>
          <img src={MainIllustration} alt="Illustration" className={module.introImage} />
          <div className={module.introText}>
            <h2>All your files in one source location, accessible anywhere.</h2>
            <p>Filo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
            <button className={module.getStartedButton}>Get Started</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;