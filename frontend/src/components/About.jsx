import React from "react";

function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen text-black p-5 pt-0 md:pt-5">
        <h2 className="text-4xl font-bold mb-10 mt-20 text-bright-blue ">
          About Me
        </h2>
        <div
          className="p-5 rounded-3xl shadow-lg w-full max-w-4xl mb-5 
        "
        >
          <h3 className="text-2xl font-bold mb-3 text-bright-blue ">
            Experience
          </h3>
          <ul className="list-disc list-inside">
            <li>
              Penthara Technologies (Jan - Feb 2025)
              <br />
              On-Site
              <br />– Worked on developing and optimizing web applications using
              modern JavaScript frameworks.
              <br />– Gained hands-on experience with cloud-based deployment and
              CI/CD pipelines.
            </li>
            <li>
              CodeAlpha (July - Sept 2024)
              <br />
              Online
              <br />– Built and optimized Python-based projects, enhancing
              problem-solving and algorithmic skills.
              <br />– Developed automation scripts and small web applications.
            </li>
            <li>
              Oasis Infobyte (Aug - Sept 2022)
              <br />
              Online
              <br />– Created responsive web pages using HTML, CSS, JavaScript,
              and Bootstrap.
              <br />– Contributed to landing pages and improved UI/UX
              understanding.
              <br />– Gained knowledge of web development fundamentals and the
              internet.
            </li>
          </ul>
        </div>
        <div className=" p-5 rounded-3xl shadow-lg w-full max-w-4xl mb-5 ">
          <h3 className="text-2xl font-bold mb-3 text-bright-blue">
            Education
          </h3>
          <ul className="list-disc list-inside">
            <li>
              Bachelor of Computer Applications (2022 - Present)
              <br />
              Chandigarh Group of Colleges, Mohali
            </li>
            <li>
              12th (2021)
              <br />
              Army Public School No. 1, Roorkee
            </li>
            <li>
              10th (2019)
              <br />
              Army Public School No. 1, Roorkee
            </li>
          </ul>
        </div>
        <div className=" p-5 rounded-3xl shadow-lg w-full max-w-4xl mb-5 ">
          <h3 className="text-2xl font-bold mb-3 text-bright-blue ">
            Achievements
          </h3>
          <ul className="list-disc list-inside">
            <li>
              Completed CS50 by Harvard
              <br />
              Gained in-depth knowledge of programming, data structures, and
              algorithms.
              <br />
              Completed a final project demonstrating practical application of
              learned skills.
            </li>
            <li>
              First Place in Python PDF Password Cracking Competition
              <br />
              Demonstrated expertise in Python scripting, cryptography, and
              ethical hacking concepts.
            </li>
            <li>
              Completed AI Essentials by Google
              <br />
              Learned key AI concepts and their applications in various domains.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
