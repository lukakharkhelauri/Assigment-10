import React from 'react';
import module from '../modules/TestimonialBox.module.scss';

const TestimonialBox = ({ testimonial, name, imageSrc }) => {
  return (
    <div className={module.testimonialBox}>
      <p className={module.testimonialText}>{testimonial}</p>
      <div className={module.authorInfo}>
        <img src={imageSrc} alt={name} className={module.authorImage} />
        <p className={module.authorName}>{name}</p>
      </div>
    </div>
  );
};

export default TestimonialBox;