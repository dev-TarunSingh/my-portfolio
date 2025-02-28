import React from "react";
import profilePic from "../../public/Mypic.jpg";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center">
      <img
        src={profilePic}
        alt="Profile"
        className="w-32 h-32 rounded-full mb-5"
      />
      <h1 className="text-5xl font-bold mb-5">Hi, I'm Tarun.</h1>
      <p className="text-xl mb-5">A passionate developer.</p>
      <p className="text-lg mb-10 text-center max-w-2xl">
        Motivated Computer Science student skilled in MERN stack, Python
        scripting, and React Native. Strong foundation in data
        structures, algorithms, and database management, with experience in
        delivering end-to-end projects.
      </p>
      <div className="text-2xl">
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
    </div>
  );
}

export default Home;
