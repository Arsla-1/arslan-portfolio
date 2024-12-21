import React from "react";
import aavAcademy from "../assets/portfolio/aavAcademy.jpg";
import tickit from "../assets/portfolio/tickit.jpg";
import yaInterior from "../assets/portfolio/yaInterior.jpg";
import oasis from "../assets/portfolio/oasis.jpg";
import korpbiz from "../assets/portfolio/korpbiz.jpg";
import sbs from "../assets/portfolio/sbs.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: aavAcademy,
      url: "https://www.aavacademy.com/",
    },
    {
      id: 2,
      src: tickit,
      url: "https://tickit-todo.netlify.app/",
    },
    {
      id: 3,
      src: yaInterior,
      url: "https://yogeshs-trendy-site-f24a22.webflow.io/",
    },
    {
      id: 4,
      src: oasis,
      url: "https://demo.webwebixytech.com/oasis/",
    },
    {
      id: 5,
      src: korpbiz,
      url: "https://demo.webwebixytech.com/korpbiz/",
    },
    {
      id: 6,
      src: sbs,
      url: "https://sbs-landing-page.vercel.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">
            Checkout some of the amazing projects I've brought to life!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-0">
          {portfolio.map(({ id, src, url }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center ">
                  <button className="w-1/2 px-6 py-0.5 m-4 duration-200 hover:scale-105">
                    <a href={url}>
                      Visit
                      <i class="fa-solid fa-arrow-up-right-from-square ml-2 text-xs"></i>
                    </a>
                  </button>
                  {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">
                    Code
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
