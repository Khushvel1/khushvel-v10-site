import React from "react";
import { Col, Row } from "react-bootstrap";
// Import icons from react-icons and FontAwesome
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { FaDatabase } from "react-icons/fa"; // FontAwesome generic DB icon
// import { SiRedis, SiFirebase, SiNextdotjs, SiPostgresql, SiDocker, SiSpringboot, SiCsharp, SiMysql, SiHtml5, SiOpencv, SiFastapi, SiTensorflow, SiScikitlearn, SiAndroid } from "react-icons/si"; // Include the missing icons
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiMysql,
  SiHtml5,
  SiFastapi,
  SiTypescript,
  SiAngular,
  SiExpress,
  SiDjango,
  SiFlask,
  SiPostman,
  SiGithub,
  SiAmazonaws,
  SiGooglecloud,
  SiJenkins,
  SiGitlab,
} from "react-icons/si";

import { TbBrandGolang } from "react-icons/tb";
import { FaDocker } from 'react-icons/fa'; // Docker icon
import { FaJava } from 'react-icons/fa';  // Java icon for Spring Boot

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* First section with primary technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h3>Python</h3>
      </Col> 
     
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h3>React</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h3>NodeJS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <h3>Next.js</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <h3>HTML5</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h3>JavaScript</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h3>Typescript</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
        <h3>Angular</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h3>Express.js</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
        <h3>Django</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <h3>Flask</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
        <h3>FastAPI</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <h3>MySQL</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h3>PostgreSQL</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h3>MongoDB</h3>
      </Col>
      {/* <Col  */}


      {/* Second section with other technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <h3>Docker</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <h3>Redis</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h3>Firebase</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <h3>Jenkins</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <h3>Amazon AWS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
        <h3>Google Cloud</h3>
      </Col>

      {/* The rest of the technologies you previously had */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h3>Postman</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h3>Git</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <h3>GitHub</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
        <h3>GitLab</h3>
      </Col>
    </Row>
  );
}

export default Techstack;
