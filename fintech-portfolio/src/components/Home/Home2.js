import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
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
              Graduated in Fintech with a strong foundation in financial technology and regulatory frameworks.
              <br />
              <br />
              I'm a 21-year-old professional passionate about the intersection of finance and technology, specifically focusing on <b className="purple">Regtech compliance</b> and <b className="purple">risk management</b>. 
              <br />
              <br />
              My journey involves analyzing complex financial systems and ensuring they adhere to evolving global standards. I specialize in leveraging technology to streamline compliance processes and enhance organizational integrity.
              <br />
              <br />
              I am driven by the goal of building secure, transparent, and efficient financial ecosystems through innovative tech solutions.
              <br />
              <br />
              Beyond compliance, I operate as a Strategic Integrator. View my <a href="https://khushvel.com" target="_blank" rel="noreferrer" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 'bold' }}>V10 Revenue Architecture</a> to see how I integrate regulatory logic with enterprise ARR scaling.
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
                  href="https://github.com/khushvel"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:hello@khushvel.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
              
              
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/khushvel-wade"
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
        <Row style={{ justifyContent: "center", padding: "50px" }}>
          <Col md={8} className="contact-form-v10">
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <span className="purple">Initiate </span> Alignment
            </h1>
            <p>Strategic inquiry for Regtech & Revenue Systems integration.</p>
            <form 
              onSubmit={async (e) => {
                e.preventDefault();
                const btn = e.target.querySelector('button');
                btn.innerText = "VERIFYING...";
                const formData = {
                  name: "Fintech Portfolio Lead",
                  email: "N/A",
                  arr: e.target.arr.value,
                  goal: e.target.goal.value
                };
                try {
                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                  });
                  const data = await res.json();
                  btn.innerText = data.success ? "ALIGNMENT CONFIRMED" : "FAILED";
                  if(data.success) e.target.reset();
                } catch (err) {
                  btn.innerText = "SYSTEM ERROR";
                }
              }}
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <input name="arr" placeholder="CURRENT SCALE / ARR" required style={{ background: "transparent", border: "1px solid #c770fe", color: "white", padding: "10px" }} />
              <textarea name="goal" placeholder="STRATEGIC GOAL" required style={{ background: "transparent", border: "1px solid #c770fe", color: "white", padding: "10px", height: "100px" }} />
              <button className="fork-btn-inner" type="submit" style={{ padding: "10px", cursor: "pointer" }}>Send Inquiry</button>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
