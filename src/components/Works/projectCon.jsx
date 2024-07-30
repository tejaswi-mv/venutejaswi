import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projectCard";
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3486658652.
import facebook from "../../img/calcu.png";
import cal from "../../img/calcu.png";

import rec from "../../img/recom.png";
import instagram from "../../img/recom.png";
import pay from "../../img/PayPal-SmartContract.png"
import "./proj.css";

function Projects() {
  return (
    <Container fluid className="project-section">
     
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pay}
              isBlog={false}
              title="Chatify"
              description=""
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rec}
              isBlog={false}
              title="Bits-0f-C0de"
              description=""
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://movflix.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cal}
              isBlog={false}
              title="Editor.io"
              description=""
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cal}
              isBlog={false}
              title="Editor.io"
              description=""
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

       
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
