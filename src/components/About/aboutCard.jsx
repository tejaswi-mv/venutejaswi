import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Venu Tejaswi </span>
            from <span className="purple"> Chirala, India.</span>
            <br />
            I am currently pursuing B.Tech in Computer Science and Engineering  at LPU.
            <br />
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:1339452608. */}
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:2522812632. */}
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:2013566787. */}
            I am a very ambitious back-end developer and dev-ops engineer
            e looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "black" }}>
            "I'm not lazy, I'm just efficient. That's why I automate everything!"

         </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;