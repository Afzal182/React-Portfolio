import React from "react";

import html from "../assets/Portfolio/html.png";
import css from "../assets/Portfolio/css.png";
import javascript from "../assets/Portfolio/javascript.png";
import reactImage from "../assets/Portfolio/reactImage.png";
import nodejs from "../assets/Portfolio/node.png";
import Mongodb from "../assets/Portfolio/Mongodb.png";
import github from "../assets/Portfolio/github.png";
import tailwind from "../assets/Portfolio/tailwind.png";

function Skill() {
  const technology = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nodejs,
      title: "Node js",
      style: "shadow-white",
    },
    {
      id: 7,
      src: Mongodb,
      title: "Mongodb",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="skill"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen flex flex-col justify-center items-center text-white"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full"
        data-aos="zoom-in-up"
      >
        <div>
          {/* Main Heading */}
          <p className="text-3xl sm:text-4xl font-bold border-b-4 border-gray-500 pb-2 inline">
            Skill
          </p>

          {/* Subheading */}
          <p className="py-4 text-sm sm:text-base">
            These are the technologies I've learned
          </p>
        </div>

        {/* Technology Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8 px-6 sm:px-0">
          {technology.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 text-sm sm:text-base">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
