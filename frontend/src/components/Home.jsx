import React from "react";
import { motion } from "framer-motion";
import HeroCanvas from "./three/HeroCanvas";
import profilePic from "../Mypic.jpg";
import resumePdf from "../assets/TarunResume2025.pdf";
import { Typewriter } from "react-simple-typewriter";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <section id="home" className="min-h-screen scroll-mt-28 flex items-center py-10 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
            >
              I build digital products that help businesses grow revenue
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-lg text-gray-600 mb-6 max-w-xl"
            >
              I’m Tarun — a full‑stack developer specializing in creating
              scalable web apps and polished UIs. I partner with startups and
              agencies to deliver products with measurable business impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="mailto:tarun@example.com?subject=Inquiry%20about%20project"
                aria-label="Book a discovery call"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-cyan to-brand-violet text-white font-semibold rounded-full shadow-lg hover:opacity-95"
              >
                Book a Discovery Call
              </a>

              <a
                href={resumePdf}
                download="Tarun_Resume.pdf"
                className="inline-flex items-center px-5 py-3 border border-gray-200 rounded-full hover:bg-gray-50"
              >
                Download Resume
              </a>
            </motion.div>

            <div className="mt-8 flex items-center gap-4">
              <motion.img src={profilePic} alt="Tarun" whileHover={{ scale: 1.06 }} transition={{ type: 'spring', stiffness: 280 }} className="w-16 h-16 rounded-full shadow" />
              <div>
                <div className="text-sm text-gray-500">Available for</div>
                <div className="font-medium">Freelance, Retainer & Full‑time</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-4 shadow-xl" role="img" aria-hidden="true">
              <HeroCanvas />
            </motion.div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="text-sm text-gray-500 mb-2">Highlighted skills</div>
          <div className="inline-flex flex-wrap gap-3 justify-center">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">TypeScript</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Design Systems</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Performance</span>
          </div>

          <div className="mt-8 mx-auto max-w-3xl bg-gradient-to-r from-white/60 to-white/30 border border-gray-100 rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <div className="text-sm text-gray-500">Trusted by startups & agencies</div>
                <div className="text-xl font-semibold mt-1">Premium projects & retainers</div>
                <p className="text-gray-600 mt-2 max-w-xl">
                  Focused on projects that value product-market fit and measurable growth — retainer engagements available for long-term partnerships.
                </p>
              </div>
              <div className="flex gap-3">
                <a href="mailto:tarun@example.com?subject=Premium%20Project" aria-label="Contact for premium project" className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-brand-cyan to-brand-violet text-white rounded-full font-semibold shadow">Work with me</a>
                <a href="#projects" className="inline-flex items-center px-4 py-3 border rounded-full">See case studies</a>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-10">
          <Testimonials />
        </div>
      </div>
    </section>
  );
}

export default Home;
