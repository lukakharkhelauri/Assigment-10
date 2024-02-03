import React from 'react';
import module from '../modules/BigFeatureSection.module.scss';
import IllustrationProductive from '../assets/images/illustration-stay-productive.png'

const BigFeatureSection = () => {
  return (
    <div className={module.bigFeatureSection}>
      <div className={module.leftSide}>
        <img src={IllustrationProductive} alt="Large Image" className={module.largeImage} />
      </div>
      <div className={module.rightSide}>
      <div className={module.rightSideTitle}> 
      <h2>Stay productive, wherever you are.</h2> 
      </div>
      <div className={module.rightSideInfo}>  
        <p>
          Never let location be an issue when accessing your files. Fylo has you covered for all your file storage needs.
        </p>
        </div>
        <div className={module.infoSeparator} />

        <div className={module.infoSecondPart}>
        <p>
          Securely share files and folders with friends, family, and colleagues for live collaboration. No email attachments required.
          illustration-stay-productive        
        </p>
        </div>
      </div>
    </div>
  );
};

export default BigFeatureSection;