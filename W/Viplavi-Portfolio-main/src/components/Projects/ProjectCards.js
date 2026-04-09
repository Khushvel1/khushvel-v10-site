import React, { useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
  
    }
    
   

  const pauseVideo = () => {
    setIsVideoPlaying(false);
  
  };
  const CardIMG = () =>
  {
    return <Card.Img
    variant="top"
    src={props.imgPath}
    alt="card-img"
    
  />
  }

  const Video = () =>
  {

   return ( <video
        
          src={`${process.env.PUBLIC_URL}/${props.video}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "500px",
            height:"300px",
            objectFit: "cover",
            display: isVideoPlaying ? "block" : "none",

           
          }}

          
        autoPlay loop ></video>)
  }

  return (
    <Card className="project-card-view">
      <div
    className="w-[200px] h-[300px] m-1 pr-2 rounded-lg cursor-pointer hover:bg-gray-600"
    onMouseEnter={playVideo}
    onMouseLeave={pauseVideo}
  > 
        {/* Card image with video */}
        
        {isVideoPlaying && props.isvideoPresent ? <Video  /> : <CardIMG />}

        {/* Video overlay */}
        
      </div>

      <Card.Body>
        <Card.Title style={{ color: 'black' }}>{props.title}</Card.Title>
    
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
       { props.isGitHubPresent &&
       <><Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        </>
       }
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Live"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
