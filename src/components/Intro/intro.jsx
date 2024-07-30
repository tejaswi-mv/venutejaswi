import React from "react";
import "./intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import profile from "../../img/nop.png";
const Intro = () => {
  const iconData = [
    {
      icon: Github, // Replace with your actual image import
      alt: 'GitHub',
      url: 'https://github.com/tejaswi-mv'
    },
    {
      icon: LinkedIn, // Replace with your actual image import
      alt: 'LinkedIn',
      url: 'https://in.linkedin.com/in/venutejaswi'
    },
    {
      icon: Instagram, // Replace with your actual image import
      alt: 'Instagram',
      url: 'https://www.instagram.com/tejiyu.kun/'
    }
  ];
  const handleClick = () => {
    window.open('https://in.linkedin.com/in/venutejaswi');
  };

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span >Hy! I Am</span>
          <span>Venu Tejaswi</span>
          <span>
            Software Developer with high level of experience in
            <br /> development
            and operations, producting the Quality work
          </span>
        </div>
        
          <button  as= 'a'  onClick ={handleClick} className="button i-button">Hire me</button>
       
        {/* social icons */}
        <div className="i-icons">
      {iconData.map((icon) => (
        <a key={icon.alt} href={icon.url} target="_blank" rel="noopener noreferrer">
          <img src={icon.icon} alt={icon.alt} />
        </a>
      ))}
    </div>
      </div>
      {/* right image side */}
     <div className="i-right">
      <img src={profile} alt="" />
    
     </div>
     
    </div>
  );
};

export default Intro;