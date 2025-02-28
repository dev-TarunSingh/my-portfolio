import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5 pt-20 md:pt-5">
      <h2 className="text-4xl font-bold mb-10 mt-20">About Me</h2>
      <div className="bg-gray-800 p-5 rounded-lg shadow-lg w-full max-w-4xl mb-5">
        <h3 className="text-2xl font-bold mb-3">Experience</h3>
        <ul className="list-disc list-inside">
          <li>CodeAlpha July - September 2024<br />Online<br />– Developed and implemented Python-based solutions during a Code Alpha internship, gaining practical experience in software development.</li>
          <li>Oasis Infobyte Aug 2022 - September 2022<br />Online<br />– Gained hands-on experience in HTML, CSS, JavaScript and Bootstrap.<br />– Contributed to Several landing Pages with and gained proficiency in my skills.<br />– Understood concept of Web & Internet.</li>
        </ul>
      </div>
      <div className="bg-gray-800 p-5 rounded-lg shadow-lg w-full max-w-4xl mb-5">
        <h3 className="text-2xl font-bold mb-3">Education</h3>
        <ul className="list-disc list-inside">
          <li>Bachelor of Computer Applications 2022-current<br />Chandigarh Group of colleges, Mohali</li>
          <li>12th 2021<br />Army Public School No. 1, Roorkee</li>
          <li>10th 2019<br />Army Public School No. 1, Roorkee</li>
        </ul>
      </div>
      <div className="bg-gray-800 p-5 rounded-lg shadow-lg w-full max-w-4xl mb-5">
        <h3 className="text-2xl font-bold mb-3">Achievements</h3>
        <ul className="list-disc list-inside">
          <li>Completed CS50<br />Completed Harvard University’s CS50: Introduction to Computer Science and received a completion certificate. Gained a foundational understanding of computer science concepts, including programming, data structures, and algorithms. Completed a final project using best practices and gained skills.</li>
          <li>First Position in Python PDF password cracking competition<br />Awarded first place in a PDF password cracking competition, demonstrating proficiency in Python scripting and cryptography concepts.</li>
        </ul>
      </div>
      
      <a 
        href="/path/to/resume.pdf" 
        download 
        className="mt-5 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700"
      >
        Download Resume
      </a>
    </div>
  );
}

export default About;
