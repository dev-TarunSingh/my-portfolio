import "./App.css";
import React, { useState } from "react";

// my components
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact"

// icons
import homeicon from "./components/media/homeicon.png";
import abouticon from "./components/media/about.png";
import projectsicon from "./components/media/projects.png";
import contacticon from "./components/media/contact.png";
import download from "./components/media/download.png";

function App() {
  const [page, setPage] = useState("home");

  function changePage(page) {
    setPage(page);
    console.log(page);
  }

  let content;
  if (page === "home") {
    content = <Home />;
  } else if (page === "about") {
    content = <About />;
  } else if (page === "projects") {
    content = <Projects />;
  } else if (page === "contact") {
    content = <Contact />;
  } else {
    content = <h1>404 : Are you lost?</h1>;
  }

  return (
    <>
      <div className="Nav">
        <img
          src={homeicon}
          onClick={() => changePage("home")}
          style={{ width: 40, height: 40, margin: 5 }}
          alt="Home Icon"
        />
        <img
          src={abouticon}
          onClick={() => changePage("about")}
          style={{ width: 40, height: 40, margin: 5 }}
          alt="About Icon"
        />
        <img
          src={projectsicon}
          onClick={() => changePage("projects")}
          style={{ width: 40, height: 40, margin: 5 }}
          alt="Projects Icon"
        />
        <img
          src={contacticon}
          onClick={() => changePage("contact")}
          style={{ width: 40, height: 40, margin: 5 }}
          alt="Contact Icon"
        />
        <a
          href="/resume.pdf"
          download
          className="resume-button"
          style={{ width: 40, height: 40, margin: 5 }}
        >
          <img
            src={download}
            alt="Resume Icon"
            style={{ width: 40, height: 40 }}
          />
        </a>
      </div>

      <div className="content-box">{content}</div>
    </>
  );
}

export default App;