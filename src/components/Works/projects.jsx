import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projectCard";
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3486658652.
import facebook from "../../img/calcu.png";
import cal from "../../img/calcu.png";

import rec from "../../img/recom.png";
import instagram from "../../img/recom.png";
import pay from "../../img/PayPal-SmartContract.png"
import "./project.css";

function Projects() {
  return (
  <div className="project-sec">
    <div className="p-heading">
    <h1 >
         <span> My Recent</span> <strong>Works </strong>

        </h1>
        <p >
          Here are a few projects I've worked on recently.
        </p>
    </div>
    <div className="card-row">
    
       <ProjectCard
              imgPath={cal}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
               <ProjectCard
              imgPath={pay}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
               <ProjectCard
              imgPath={rec}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
    </div>
    
  </div>
    
    
  );
}

export default Projects;