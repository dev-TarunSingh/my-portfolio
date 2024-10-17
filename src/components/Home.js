import React from "react";
import "./Home.css";
import MyImg from "./media/mypic.png";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <>
      <div className="Home-container">
        <div className="image">
          <img
            src={MyImg}
            className="My-DP"
            style={{ width: 350, height: 350, borderRadius: 500 }}
            alt="My DP"
          />
        </div>

        <div className="intro">
          <div className="name">
            <h1>
              Hello, My name is <br />
              <span className="My-Name" style={{ color: "red" }}>
                Tarun Singh Chauhan
              </span>
            </h1>
          </div>
          <div className="type-animation-conainer">
          <TypeAnimation
            sequence={[
              "I am a MERN Stack Developer",
              1000,
              "I am a Python Developer",
              1000,
              "I love Databases ♥",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "3em", display: "inline-block" }}
            repeat={Infinity}
          />
          </div>
        </div>
        </div>
    </>
  );
}

export default Home;
