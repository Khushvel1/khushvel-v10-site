import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import Techstack from "../About/Techstack";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description" id="about">
            <h1 style={{ fontSize: "2.6em" }}>
           <span className="purple"> About </span> Me
            </h1>
            <p className="home-about-body">
              Masters : Advanced Computing - Distinction
              <br />
              Masters : Computer Applications - Distinction
              <br />
              Bachelors : Computer Applications - Distinction
              <br />
  
          
              <br />
              <br />
              I'm a Full Stack Software Engineer with a Master's in Advanced Computing from Birkbeck, University of London and 2+ years of hands-on experience building scalable web applications using React.js, Node.js, Django, PostgreSQL, and AWS. I’ve delivered real-world solutions across fintech, e-commerce, and SaaS, specializing in REST APIs, CI/CD, system design, and cloud deployment. I’m passionate about clean code, user-focused development, and creating impactful products through cross-functional collaboration.

            </p>
           
          </Col>
        

        </Row>
        <Row >
          <h1 className="tech-stack"><span className="purple">Tech Stack</span></h1>
          <Techstack />
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ViplaviWade/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:wadeviplavi@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
              
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/viplaviwade/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
