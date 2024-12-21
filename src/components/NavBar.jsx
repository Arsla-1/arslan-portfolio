import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      id: 1,
      path: "home",
      link: "Home",
    },
    {
      id: 2,
      path: "about",
      link: "About",
    },
    {
      id: 3,
      path: "portfolio",
      link: "Portfolio",
    },
    {
      id: 4,
      path: "experience",
      link: "Experience",
    },
    {
      id: 5,
      path: "contact",
      link: "Contact",
    },
  ];

  return (
    <div className="sticky top-0 flex justify-between items-center h-20 w-full px-4 text-white bg-black">
      <div>
        <h1 className="text-5xl font-signature ml-2">Arslan</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, path }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={path} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setOpen(!open)}
        className="md:hidden cursor-pointer pr-4 z-10 text-gray-500"
      >
        {open ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {open && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, path }) => {
            return (
              <li
                key={id}
                className="py-6 px-4 cursor-pointer text-4xl text-gray-500 hover:scale-105 duration-200"
              >
                <Link
                  onClick={() => setOpen(false)}
                  to={path}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
