import React from "react";
import Image from "../assets/HeroImage4.jpg";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2
            className="text-4xl sm:text-6xl mt-8 font-bold text-white"
            data-aos="zoom-in-up"
          >
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md" data-aos="zoom-in-up">
            A Software Developer (MERN Stack) specializes in building and
            maintaining web applications using the MERN stack:
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group hover:rotate-90 duration-300">
                <HiArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-8" data-aos="zoom-in-up">
          <img
            src={Image}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
