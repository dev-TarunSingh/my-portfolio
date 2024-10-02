import React from "react";
import MultiActionAreaCard from "./CardStack";
import './Projects.css';
const projects = [
  {
    image: "path/to/image1.jpg",
    title: "Python PDF Password Cracker",
    description:
      "The script generates all possible passwords and attempts to decrypt a given PDF file using these passwords. It prints the correct password if found.",
  },
  {
    image: "path/to/image2.jpg",
    title: "Android App",
    description: "Created an Basic Android App to shop, sell and Manage posts.",
  },
  {
    image: "path/to/image3.jpg",
    title: "Shorturl",
    description:
      "Short URL is a mean stack project that shortens your URL and make it easy to share.",
  },
  {
    image: "path/to/image4.jpg",
    title: "Python Voice Assistant",
    description:
      "Python-Powered Virtual Assistant Jarvis is a versatile virtual assistant built using Python. It streamlines your daily tasks by opening applications, conducting web searches, and providing Current Location Mohali essential information.",
  },
  {
    image: "path/to/image4.jpg",
    title: "React dice game",
    description:
      "This a Basic Dice Game. You need to Select any number. if selected number is equal to dice number you will get same point as dice. if not you will get 0 points."
    },
    {
    image: "path/to/image4.jpg",
    title: "Todo App",
    description:
      "Developed a versatile to-do list application using HTML, CSS, and JavaScript. This application enables users to effortlessly create, edit, and delete tasks, ensuring effective task management. The app?s interface is designed to be both intuitive and visually appealing, providing a seamless user experience."
    },
    {
      image: "path/to/image4.jpg",
      title: "Foodzie",
      description:
        "This app shows food items from API and displays all the food items. You can also filter those items."
    },
    {
      image: "path/to/image4.jpg",
      title: "portfolio",
      description:
        "- My Portfolio is a dynamic web application built with React, designed to showcase my skills and projects in an engaging way. It features a clean, responsive layout that highlights my work and allows visitors to easily navigate through different sections."
    },
    {
      image: "path/to/image4.jpg",
      title: "React Calculator",
      description:
        "This is a basic calculator app. You can perform basic operations like addition, subtraction, multiplication and division."
    },
    {
      image: "path/to/image4.jpg",
      title: "React Tic Tac Toe",
      description:
        "This is a basic tic tac toe game. You can play this game with your friend."
    }
];

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="card-stack-container">
        {projects.map((project, index) => (
          <MultiActionAreaCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
