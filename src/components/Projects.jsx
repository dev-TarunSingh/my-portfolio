import React from 'react';

const projects = [
  {
    title: 'Frew - Android quick Commerce shopping App',
    description: 'MERN stack E-commerce app to see, search and buy products from nearby vendors.',
    features: [
      'JWT Authentication',
      'Products Database',
      'NodeJs server'
    ],
    technologies: 'ReactNative, NodeJS, MongoDB, ExpressJS',
    image: '/path/to/frew-image.jpg'
  },
  {
    title: 'Shorturl',
    description: 'MERN stack project that shortens your URL and makes it easy to share.',
    features: [
      'Converts URL in short and also redirects'
    ],
    technologies: 'ReactJS, NodeJS, MongoDB, ExpressJS',
    image: '/path/to/shorturl-image.jpg'
  },
  {
    title: 'Python PDF Password Cracker',
    description: 'The script generates all possible passwords and attempts to decrypt a given PDF file using these passwords.',
    technologies: 'Python, PyPDF, numpy',
    image: '/path/to/pdf-cracker-image.jpg'
  },
  {
    title: 'Python Voice Assistant',
    description: 'It streamlines your daily tasks by opening applications, conducting web searches, and providing information.',
    features: [
      'Tracking world-wide cases using google maps and live API stats and datasets'
    ],
    technologies: 'Python, speech recognition, pyttsx3',
    image: '/path/to/voice-assistant-image.jpg'
  },
  {
    title: 'React Dice Game',
    description: 'A Basic Dice Game. You need to select any number. If the selected number is equal to the dice number, you will get the same point as the dice.',
    technologies: 'ReactJS',
    image: '/path/to/dice-game-image.jpg'
  }
];

function Projects() {
  return (
    <div className="p-5 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-5" />
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="mb-3">{project.description}</p>
            {project.features && (
              <ul className="list-disc list-inside mb-3">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            )}
            <p className="font-semibold">Technologies Used: {project.technologies}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;