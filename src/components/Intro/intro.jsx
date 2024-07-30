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


  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span >Hy! I Am</span>
          <span>Venu Tejaswi</span>
          <span>
            Frontend Developer with high level of experience
            <br /> in web designing
            and development, producting the Quality work
          </span>
        </div>
        
          <button className="button i-button">Hire me</button>
       
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
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