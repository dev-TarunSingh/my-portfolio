import React from "react";

function Skills() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen  text-black p-5 pt-20">
        <h2 className="text-4xl font-bold mb-10 text-bright-blue">
          Technical Skills and Interests
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-4xl">
          <div className=" p-5 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-bright-blue">
              Languages
            </h3>
            <ul className="list-disc list-inside">
              <li>C/C++</li>
              <li>Python</li>
              <li>Java</li>
              <li>Javascript</li>
              <li>HTML+CSS</li>
            </ul>
          </div>
          <div className=" p-5 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-bright-blue">
              Libraries
            </h3>
            <ul className="list-disc list-inside">
              <li>C++ STL</li>
              <li>Python Libraries</li>
              <li>ReactJs</li>
              <li>npm libraries</li>
            </ul>
          </div>
          <div className=" p-5 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-bright-blue">
              Web Dev Tools
            </h3>
            <ul className="list-disc list-inside">
              <li>Nodejs</li>
              <li>VScode</li>
              <li>Git</li>
              <li>Github</li>
              <li>WordPress</li>
              <li>Elementor</li>
            </ul>
          </div>
          <div className=" p-5 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-bright-blue">
              Frameworks
            </h3>
            <ul className="list-disc list-inside">
              <li>ReactNative</li>
              <li>NextJS</li>
            </ul>
          </div>
          <div className=" p-5 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-bright-blue">
              Cloud/Databases
            </h3>
            <ul className="list-disc list-inside">
              <li>MongoDb</li>
              <li>Relational Database (mySql)</li>
            </ul>
          </div>
          <div className="  p-5 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-bright-blue">
              Relevant Coursework
            </h3>
            <ul className="list-disc list-inside">
              <li>Data Structures & Algorithms</li>
              <li>Operating Systems</li>
              <li>Object Oriented Programming</li>
              <li>Computer Networks</li>
              <li>Database Management System</li>
              <li>Software Engineering</li>
            </ul>
          </div>
          <div className="  p-5 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-bright-blue">
              Areas of Interest
            </h3>
            <ul className="list-disc list-inside">
              <li>Web Design and Development</li>
              <li>Mobile App Development</li>
              <li>Cloud Security</li>
            </ul>
          </div>
          <div className="  p-5 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-bright-blue">
              Soft Skills
            </h3>
            <ul className="list-disc list-inside">
              <li>Problem Solving</li>
              <li>Self-learning</li>
              <li>Presentation</li>
              <li>Adaptability</li>
              <li>Team Work</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
