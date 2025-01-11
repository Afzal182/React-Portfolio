import React from "react";
import filmfusion from "../assets/Portfolio/filmfusion.png";
//import installNode from "../assets/Portfolio/node.png";
import EzeeCart from "../assets/Portfolio/EzeeCart.png";
import portfolio from "../assets/Portfolio/portfolio.png";
//import reactSmooth from "../assets/Portfolio/reactSmooth.jpg";
//import reactWeather from "../assets/Portfolio/reactWeather.jpg";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      title: "The Film Fusion",
      src: filmfusion,
      demoLink: "https://the-film-fusion.netlify.app/",
      codeLink: "https://github.com/Afzal182/The-Film-Fusion.git",
    },
    {
      id: 2,
      title: "React Portfolio",
      src: portfolio,
      demoLink: "https://afzalhashmi-com.netlify.app/",
      codeLink: "https://github.com/Afzal182/React-Portfolio.git",
    },
    {
      id: 3,
      title: "EzeeCart",
      src: EzeeCart,
      demoLink: "https://react-ecart-app.netlify.app/",
      codeLink: "https://github.com/Afzal182/Ezee-Cart-App.git",
    },
    // {
    //   id: 4,
    //   title: "Smooth Scroll in React",
    //   src: reactSmooth,
    //   demoLink: "https://www.example.com/demo4",
    //   codeLink: "https://www.example.com/code4",
    // },
    // {
    //   id: 5,
    //   title: "Node.js Installation Guide",
    //   src: installNode,
    //   demoLink: "https://www.example.com/demo5",
    //   codeLink: "https://www.example.com/code5",
    // },
    // {
    //   id: 6,
    //   title: "React Weather App",
    //   src: reactWeather,
    //   demoLink: "https://www.example.com/demo6",
    //   codeLink: "https://www.example.com/code6",
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full p-4 sm:p-6"
        data-aos="zoom-in-up"
      >
        {/* Section Heading */}
        <div className="pb-8 mt-[130px]">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-4 text-lg text-gray-300">
            Check out some of my work here
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map(({ id, title, src, demoLink, codeLink }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt={title}
                className="rounded-md duration-200 hover:scale-105 w-full"
              />
              <div className="p-4">
                <p className="text-xl font-semibold">{title}</p>
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105">
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105">
                  <a href={codeLink} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
