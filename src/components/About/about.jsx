import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./github";
import Techstack from "./techStack";
import Aboutcard from "./aboutCard";
import laptopImg from "../../img/prof2.png";
import Toolstack from "./toolStack";

function About() {
  return (
    <Container fluid className="about-section">
      
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "0px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg}  style={{height : "100vh" }} alt="about"  />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;