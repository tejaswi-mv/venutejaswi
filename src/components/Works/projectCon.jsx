import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projectCard";
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3486658652.
import facebook from "../../img/calcu.png";
import cal from "../../img/cal.png";
import Chat from "../../img/chati.png"
import rec from "../../img/rrb.png";
import instagram from "../../img/recom.png";
import pay from "../../img/pps.png";
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
              title="PayPal Smart Contract"
              description=""
              ghLink="https://github.com/tejaswi-mv/PayPal-Smart-Contract"
              demoLink="https://amoy.polygonscan.com/address/0x805Cdc684a25AD7dea390fF57319D812Bc45737B#readContract"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rec}
              isBlog={false}
              title="Movflix"
              description=""
              ghLink="https://github.com/tejaswi-mv/movierec"
              demoLink="https://movflix.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cal}
              isBlog={false}
              title="Mac-os Calculator"
              description=""
              ghLink="https://github.com/tejaswi-mv/calculatorapp"
              demoLink="https://macoscalculator-tejaswi-mvs-projects.vercel.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chat}
              isBlog={false}
              title=""
              description=""
              ghLink="https://github.com/tejaswi-mv/Mern-Stack-Chat-Application"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

       
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
