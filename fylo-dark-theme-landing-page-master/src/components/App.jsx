import React from 'react';
import module from '../modules/App.module.scss';
import Footer from '../components/Footer';
import style from '../modules/TestimonialBox.module.scss';
import GetStartedBox from '../components/GetStartedBox';
import TestimonialBox from '../components/TestimonialBox'
import BigFeatureSection from '../components/BigFeatureSection'
import FeatureSection from '../components/FeatureSection';
import Navbar from '../components/Navbar'
import IconAccess from '../assets/images/icon-access-anywhere.svg'
import IconSecurity from '../assets/images/icon-security.svg'
import IconCallobaration from '../assets/images/icon-collaboration.svg'
import IconFile from '../assets/images/icon-any-file.svg'
import Image1 from '../assets/images/profile-1.jpg'
import Image2 from '../assets/images//profile-2.jpg'
import Image3 from '../assets/images//profile-3.jpg'

const App = () => {

  const testimonialInfo = "Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has become a well-oiled collaboration machine.";
  const testimonialBoxes = [
    { name: 'Satish Patel', imageSrc: [Image1] },
    { name: 'Bruce McKenzie', imageSrc: [Image2] },
    { name: 'Iva Boyd', imageSrc: [Image3] },
  ];

  return (
    <div style={{ backgroundColor: 'rgb(33, 41, 60)' }}>
      <Navbar />

      <div className={module.TwoColumnSection}>
      <FeatureSection
        title="Access your files, anywhere."
        info="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        imageSrc={IconAccess}
      />

      <FeatureSection
        title="Security you can trust."
        info="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        imageSrc={IconSecurity}
      />
      </div>

      <div className={module.TwoColumnSection}>
        <FeatureSection
          title="Real-time collaboration."
          info="Securely share files and folders with friends, family, and colleagues for live collaboration. No email attachments required."
          imageSrc={IconCallobaration}
        />

        <FeatureSection
          title="Store any type of file."
          info="Whether you're sharing holiday photos or work documents, Fylo has you covered, allowing for all file types to be securely stored and shared."
          imageSrc={IconFile}
        />
      </div>

      <BigFeatureSection />

      <div style={{ display: 'flex' }}>
        {testimonialBoxes.map((box, index) => (
          <TestimonialBox
            key={index}
            testimonial={testimonialInfo}
            name={box.name}
            imageSrc={box.imageSrc}
          />
        ))} 
      </div>

      <GetStartedBox />

      <Footer />    

    </div>
  );
};

export default App;