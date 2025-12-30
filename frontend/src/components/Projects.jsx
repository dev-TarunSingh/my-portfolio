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

import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="py-16 scroll-mt-28">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold text-center mb-10">Projects</motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article key={index} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} whileHover={{ y: -6 }} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
              <div className="relative">
                <img loading="lazy" src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-2">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-sm">Live ↗</a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-sm">Code</a>
                  </div>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{project.description}</p>

                {project.features && (
                  <ul className="mb-3 text-sm text-gray-700 space-y-1">
                    {project.features.slice(0, 3).map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                )}

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-500">{project.technologies}</div>
                  <div className="flex gap-2">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full bg-gradient-to-r from-brand-cyan to-brand-violet text-white text-sm">View</a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full border text-sm">Details</a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
