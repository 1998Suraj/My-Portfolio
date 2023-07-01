import React from "react";
import { experience } from "../portfolio";
import Fade from "react-reveal/Fade";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience">
      <h1 className="title">
        <Fade bottom cascade>
          Experience
        </Fade>
      </h1>
      <div className="fluid-container">
        <div className="row">
          <Fade bottom cascade duration={1500}>
            <div className="col-lg-7 col-md-7 text">
              <p style={{fontSize: 30, fontWeight: 16}}>{experience.p1}</p>
              <p>{experience.p2}</p>
              <p>{experience.p3}</p>
              <p>{experience.p4}</p>
              {experience.work.map((detail) => (
                  <p>⚡{detail}</p>
                ))}
            <p>{experience.p5}</p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Experience;
