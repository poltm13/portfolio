import React from "react";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <div className="about">
      <Fade right>
        <h1>About Me</h1>
      </Fade>
      <Fade bottom>
        <h3>
          I'm a Telecommunications Engineering student at UPC taking the
          Audiovisual Systems specialization.
        </h3>
        <h3>
          I consider myself a passionate person about new technology and I'm
          seeking to expand my training and knowledge in the workplace.
        </h3>
        <h3>
          My main interests are voice and image processing as well as Front-End
          Web Development, and I'm always looking for opportunities to continue
          learning and eventually be able to play a role of Full Stack Web
          Developer.
        </h3>
      </Fade>
    </div>
  );
}
