import React, { useState } from 'react';
import module from '../modules/GetStartedBox.module.scss';

const GetStartedBox = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  const handleGetStartedClick = () => {
    if (!isValidEmailFormat(email)) {
      setIsValidEmail(false);
    } else {
    }
  };

  const isValidEmailFormat = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className={module.getStartedBox}>
      <div className={module.title}><h2>Get early access today</h2></div>
      <div className={module.info}>
        <p>
        It only takes a minute to sign up and our free starter tier is extremely generous.
        If you have any questions, our support team would be happy to help you.
      </p>
      </div>

      <div className={module.inputContainer}>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={handleEmailChange}
          className={!isValidEmail ? module.invalidEmail : ''}
        />
        {!isValidEmail && <p className={module.invalidEmailMessage}>Please enter a valid email address.</p>}
        <button onClick={handleGetStartedClick}>Get Started For Free</button>
      </div>
    </div>
  );
};

export default GetStartedBox;