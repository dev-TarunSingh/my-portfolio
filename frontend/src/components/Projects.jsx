import React from "react";
import ActlocalImage from "../assets/actlocal.png";
// import frewImage from '../assets/frew.jpg';
import shorturlImage from "../assets/shorturl.png";
import pdfCrackerImage from "../assets/pdf-cracker.png";
import voiceAssistantImage from "../assets/voice-assistant.png";
import diceGameImage from "../assets/dice-game.png";

const projects = [
  {
    title: "ActLocal - Hyperlocal Service Marketplace",
    description:
      "A MERN stack mobile application that connects customers with nearby service providers for quick and reliable service bookings.",
    features: [
      "Geolocation-based provider search",
      "Verified provider badges and profiles",
      "In-app real-time chat and booking system",
      "Dashboard for providers to manage services",
    ],
    technologies: "React Native, NodeJS, ExpressJS, MongoDB (GeoJSON)",
    image: ActlocalImage, // Replace with actual image or local import if you have one
    link: "https://actlocal.live", // Replace with your actual GitHub or live demo link
  },
  {
    title: "Frew - Android quick Commerce shopping App",
    description:
      "MERN stack E-commerce app to see, search and buy products from nearby vendors.",
    features: ["JWT Authentication", "Products Database", "NodeJs server"],
    technologies: "ReactNative, NodeJS, MongoDB, ExpressJS",
    image: "https://imgur.com/HLTDtBf.png",
    link: "https://github.com/dev-TarunSingh/Frew-Android",
  },
  {
    title: "Shorturl",
    description:
      "MERN stack project that shortens your URL and makes it easy to share.",
    features: ["Converts URL in short and also redirects"],
    technologies: "ReactJS, NodeJS, MongoDB, ExpressJS",
    image: shorturlImage,
    link: "https://github.com/dev-TarunSingh/Shorturl_MERN",
  },
  {
    title: "Python PDF Password Cracker",
    description:
      "The script generates all possible passwords and attempts to decrypt a given PDF file using these passwords.",
    technologies: "Python, PyPDF, numpy",
    image: pdfCrackerImage,
    link: "https://github.com/dev-TarunSingh/Python",
  },
  {
    title: "Python Voice Assistant",
    description:
      "It streamlines your daily tasks by opening applications, conducting web searches, and providing information.",
    features: [
      "Tracking world-wide cases using google maps and live API stats and datasets",
    ],
    technologies: "Python, speech recognition, pyttsx3",
    image: voiceAssistantImage,
    link: "https://github.com/dev-TarunSingh/Python",
  },
  {
    title: "React Dice Game",
    description:
      "A Basic Dice Game. You need to select any number. If the selected number is equal to the dice number, you will get the same point as the dice.",
    technologies: "ReactJS",
    image: diceGameImage,
    link: "https://github.com/dev-TarunSingh/React-JS/tree/master/dice",
  },
];

function Projects() {
  return (
    <>
      <div className="p-5 pt-20 text-black">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" p-5 rounded-4xl shadow-lg flex flex-col lg:blur-none shadow-lg backdrop-blur-md"
            >
              <div className="aspect-w-16 aspect-h-9 mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="mb-3">{project.description}</p>
              {project.features && (
                <ul className="list-disc list-inside mb-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              )}
              <p className="font-semibold mb-4">
                Technologies Used: {project.technologies}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-center inline-block rounded-3xl shadow-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 transition duration-300"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
