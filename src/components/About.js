import React, {useState} from "react";
import "./About.css";
import skillIcons from "./skill-icons";
import Certificates from "./Certificates";

function About() {
  const [showCerti, setShowCerti] = useState(false);

  

  return (
    <>
      <div className="About-container">
        <h1>About Me</h1>
        <div className="about">
          <p className="p1">
            Fast-paced learner and results-oriented, with a strong grasp of the
            MERN stack Developer. Proven ability to quickly acquire new skills
            and apply them to build high-quality web applications. Eager to
            contribute to a collaborative team environment and continuously
            improve my development expertise.
          </p>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="skills-list">
            {skillIcons.map((skill, index) => (
              <div className="skill-item" key={index}>
                <img
                  src={skill.src}
                  alt={skill.name}
                  style={{ width: 40, height: 40, margin: 5 }}
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <h1>Why am i a best fit for you?</h1>
        <button onClick={() => setShowCerti(!showCerti)} className="btn-primary1">Check</button>
        {showCerti && <Certificates setShowCerti={setShowCerti} showCerti={showCerti}/>}
      </div>
    </>
  );
}

export default About;
