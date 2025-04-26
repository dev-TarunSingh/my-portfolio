import React from "react";
import profilePic from "../Mypic.jpg";
import { Typewriter } from "react-simple-typewriter";
import resumePdf from "../assets/TarunResume2025.pdf";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Tarun Singh Chauhan - Web Developer</title>
        <meta
          name="description"
          content="Hi, I'm Tarun Singh Chauhan — a passionate Web Developer skilled in React, MERN, and more. Check out my portfolio or Hire me for your next project!"
        />
        <meta
          name="keywords"
          content="Web Developer, React Developer, MERN Stack, Frontend Developer, Freelance Web Developer, Portfolio, Freelance, Web Development, MERN Stack, React, React Native, Full-stack Development, Node.js, JavaScript, MongoDB, Express.js, Python, Python Scripting, Software Engineering, Cloud Computing, Cloud Security, Mobile App Development, Web Design, UI/UX, Agile Development, GitHub, Git, GitLab, DevOps, Microservices, APIs, E-commerce, Digital Transformation, Automation, AI, Machine Learning, Data Science, Data Analysis, Blockchain, IoT, SaaS, FinTech, Cybersecurity, Mobile Solutions, Cross-platform Development, AWS, Firebase, Google Cloud, Project Management, Agile, Scrum, SEO, Digital Marketing, Content Management, Database Management, Python Libraries, MySQL, NoSQL, Firebase, Chatbots, DevOps Tools, Quality Assurance, UI/UX Design, Product Management, CI/CD, Software Testing, SaaS, Startups, Internship, Remote Jobs, Frontend, Backend, Job Opportunities, Portfolio, GitHub Repositories, Job Portals, Freelance Opportunities."
        />
        <meta name="author" content="Tarun Singh Chauhan" />
        <meta
          property="og:title"
          content="Tarun Singh Chauhan - Web Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore my projects, skills, and work. Let's build something amazing together!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://taruncodes.tech" />
        <meta
          property="og:image"
          content="https://taruncodes.tech/preview-image.jpg"
        />
        <link rel="canonical" href="https://taruncodes.tech/" />
      </Helmet>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-5">
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
