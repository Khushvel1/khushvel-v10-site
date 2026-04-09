import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Netflix from "../../Assets/Projects/Netflix-Symbol.png";
import swiggy from "../../Assets/Projects/swiggy.jpg";
import cv from "../../Assets/Projects/computervision.jpg";
import chatify from "../../Assets/Projects/data-analysis.jpg";
import mask from "../../Assets/Projects/masknomask.jpg";
import hotel from "../../Assets/Projects/blackclover.png";
import resume from "../../Assets/Projects/dreamer-jan-18.png"
import chatAI from "../../Assets/Projects/chatAI.jpg"
import mi from "../../Assets/Projects/Mandelpart2_red.png"
import hotell from "../../Assets/Projects/hotell.jpg"
import ResumeMatcher from "../../Assets/Projects/ResumeMatcher.png"
import mappingmuseums from "../../Assets/Projects/mapping-museums.webp"
import oscar from "../../Assets/Projects/oscar.avif"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Software as a Service Backend App "
              description="Built a full-stack SaaS platform inspired by Piazza to simulate a Q&A forum system with real-time interaction. 
              Developed the backend using Next.js (T3 Stack) and implemented Clerk for secure user authentication and role-based access 
              control. Leveraged Prisma ORM with PlanetScale for scalable relational database management and schema migrations. Designed 
              a modular architecture supporting user-created threads, question-answer interactions, and dynamic content updates. Applied 
              Tailwind CSS for a responsive and accessible UI, and deployed the app on Vercel with CI/CD enabled for smooth development 
              workflows. This project demonstrates strong skills in SaaS architecture, authentication systems, backend development, 
              database modeling, and cloud deployment. 🚀💻🔐"
              ghLink="https://github.com/ViplaviWade/Piazza"
              isvideoPresent = {true}
              isGitHubPresent = {true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mappingmuseums}
              isBlog={false}
              title="Mapping Museums"
              description="Designed and executed a full-scale data migration project to convert UK museum records (1960–2020) from
               RDF to a structured PostgreSQL database. Utilized Python, Pandas, and NumPy to clean and transform large datasets, 
               standardize formats, and ensure data consistency. Developed robust SQL queries to load and validate over 4000+ 
               museum entries, enabling efficient storage, retrieval, and analysis. Implemented mechanisms to detect, track, and 
               apply updates from existing databases, ensuring ongoing data integrity. This project highlights strong data 
               engineering skills and a deep understanding of semantic web data, ETL pipelines, and relational modeling. 🏛️🐍🗃️"
              ghLink="https://github.com/ViplaviWade/Mapping-Museums"
              isvideoPresent = {true}
              isGitHubPresent = {true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oscar}
              isBlog={false}
              title="Academy Awards Data Query Tool"
              description="An interactive web application designed to explore Academy Awards data (1960–2010) through dynamic 
              queries and real-time results. Built using HTML, CSS, and JavaScript on the frontend, and powered by a Node.js + 
              Express backend, the app enables users to filter Oscar nominations by year, category, nominee, and winner status. 
              Client-side scripting with the Fetch API ensures responsive data retrieval, while server-side logic parses and 
              filters a JSON dataset to return precise results. The application features robust input validation, dynamic table 
              rendering, and user-friendly query controls, offering an engaging experience for film enthusiasts and data explorers 
              alike. 🏆🎬🖥️"  
              ghLink="https://github.com/ViplaviWade/Oscars-Academy-Awards-WebApp"
              isGitHubPresent = {true}         
              isvideoPresent = {true}  
            />
          </Col>          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
