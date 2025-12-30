import React from "react";
import { motion } from "framer-motion";

const SKILL_GROUPS = [
  { title: 'Languages', skills: ['C/C++', 'Python', 'Java', 'JavaScript', 'HTML/CSS'] },
  { title: 'Frameworks & Libs', skills: ['React', 'React Native', 'Next.js', 'Redux'] },
  { title: 'Tools & DB', skills: ['Node.js', 'MongoDB', 'MySQL', 'Git', 'VScode'] },
  { title: 'Cloud', skills: ['AWS', 'Firebase'] },
  { title: 'Interests', skills: ['Performance', 'Design Systems', 'Cloud Security'] },
  { title: 'Soft Skills', skills: ['Problem Solving', 'Communication', 'Adaptability'] },
]

function Skills() {
  return (
    <section id="skills" className="py-16 bg-white scroll-mt-28">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} className="text-3xl font-extrabold text-center mb-8">Technical Skills & Interests</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {SKILL_GROUPS.map((g, idx) => (
            <motion.div key={idx} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay: idx * 0.04}} className="bg-white rounded-2xl shadow-md p-5">
              <h3 className="text-lg font-semibold mb-3 text-brand-cyan">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
