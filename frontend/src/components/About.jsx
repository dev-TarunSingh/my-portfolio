import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="text-4xl font-extrabold text-center mb-8 text-brand-violet">About Me</motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <motion.article initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.05}} className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3 text-brand-cyan">Experience</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <div className="font-medium">Penthara Technologies <span className="text-sm text-gray-500">• Jan - Feb 2025</span></div>
                <div className="text-sm">Worked on optimizing web apps, CI/CD and deployments.</div>
              </li>
              <li>
                <div className="font-medium">CodeAlpha <span className="text-sm text-gray-500">• Jul - Sep 2024</span></div>
                <div className="text-sm">Built Python automation and web projects; improved performance.</div>
              </li>
              <li>
                <div className="font-medium">Oasis Infobyte <span className="text-sm text-gray-500">• Aug - Sep 2022</span></div>
                <div className="text-sm">Contributed to responsive UI and landing pages.</div>
              </li>
            </ul>
          </motion.article>

          <motion.article initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.12}} className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3 text-brand-cyan">Education</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <div className="font-medium">BCA — Chandigarh Group of Colleges</div>
                <div className="text-sm">2022 - present</div>
              </li>
              <li>
                <div className="font-medium">12th — Army Public School No.1</div>
                <div className="text-sm">2021</div>
              </li>
            </ul>
          </motion.article>

          <motion.article initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.18}} className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-3 text-brand-cyan">Achievements</h3>
            <ul className="space-y-3 text-gray-700">
              <li><div className="font-medium">CS50 — Harvard</div><div className="text-sm">Fundamentals of computer science and a strong final project.</div></li>
              <li><div className="font-medium">Python PDF Competition — 1st Place</div><div className="text-sm">Demonstrated advanced scripting skills.</div></li>
              <li><div className="font-medium">AI Essentials — Google</div><div className="text-sm">Introductory AI foundation coursework.</div></li>
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default About;
