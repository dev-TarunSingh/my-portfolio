import React from "react";
import profilePic from "../Mypic.jpg";
import { Typewriter } from "react-simple-typewriter";
import resumePdf from "../assets/TarunResume2025.pdf";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-5">
        <img
          src={profilePic}
          alt="Profile"
          className="w-80 h-80 aspect-square rounded-full mb-5"
        />
        <h1 className="text-5xl font-bold mb-5">Hi, I'm Tarun.</h1>
        <p className="text-xl mb-5">A passionate developer.</p>
        <p className="text-lg mb-10 text-center max-w-2xl">
          Motivated Computer Science student skilled in MERN stack, Python
          scripting, and React Native. Strong foundation in data structures,
          algorithms, and database management, with experience in delivering
          end-to-end projects.
        </p>
        <div className="text-2xl mb-5">
          <Typewriter
            loop={false}
            words={[
              "I'm a MERN Stack Developer",
              "I'm a Python Developer as Well.",
              "Looking for new opportunities",
              "Let's build something great together!",
            ]}
          />
        </div>
        <a
          href={resumePdf}
          download="Tarun_Resume.pdf"
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Download Resume
        </a>
      </div>
    </>
  );
}

export default Home;
