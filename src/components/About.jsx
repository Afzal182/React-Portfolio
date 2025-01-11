import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center w-full h-full p-4">
        {/* About Me Section */}
        <div className="md:w-1/2 md:pr-8" data-aos="zoom-in-up">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline">
            About Me
          </h2>
          <p className="text-xl mt-8">
            💻 Final-Year Computer Science Student 🎓 | Tech Enthusiast 🚀 |
            Future Innovator 💡
          </p>
          <p className="text-xl mt-4">
            I am eager to kickstart my career as a Software Engineer, leveraging
            my skills and knowledge to contribute meaningfully to innovative
            projects. Ready to collaborate with diverse teams, embrace
            challenges, and continuously grow both personally and
            professionally.
          </p>
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block h-3/4 border-l-2 border-gray-500"></div>

        {/* Education Section */}
        <div className="md:w-1/2 md:pl-8 mt-10 md:mt-0" data-aos="zoom-in-up">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Education
          </h2>
          <ul className="text-xl mt-8 space-y-4">
            <li>
              🎓 <span className="font-bold">B.Tech in Computer Science</span> -
              Radharaman Engg College - Bhopal <br />
              <span className="text-gray-400">2020 - 2024</span>
            </li>
            <li>
              🏫 <span className="font-bold">Higher Secondary</span> -
              S.K.B.D.College - Bihar <br />
              <span className="text-gray-400">2018 - 2019</span>
            </li>
            <li>
              🏫 <span className="font-bold">Secondary Education</span> - MANGAL
              SINGH HIGH SCHOOL RATANPURA - Bihar <br />
              <span className="text-gray-400">2016 - 2017</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
