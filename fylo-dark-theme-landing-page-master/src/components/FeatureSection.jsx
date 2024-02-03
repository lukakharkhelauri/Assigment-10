import React from 'react';
import module from '../modules/FeatureSection.module.scss';

const FeatureSection = ({ title, info, imageSrc }) => {
  return (
    <div className={module.featureSection}>
      <img src={imageSrc} alt={title} className={module.featureImage} />
      <div className={module.featureInfo}>
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default FeatureSection;