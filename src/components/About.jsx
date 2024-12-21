import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-8 lg:pt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl">
          Hi, I’m Arslan Shahid, a passionate Full-Stack Web Developer with
          expertise in HTML, CSS, JavaScript, React, Node.js, MongoDB and CMS
          platforms. I thrive on building innovative and user-friendly digital
          solutions that solve real-world problems.
        </p>
        <br />
        <p className="text-xl">
          With more than 1 year of professional experience, I’ve had the
          opportunity to work on dynamic web applications, contributing to both
          front-end and back-end development.
        </p>
        <br />
        <p className="text-xl">
          When I’m not coding, I love exploring new tech trends, reading books,
          and learning foreign languages. I’m always eager to learn and embrace
          challenges that push my boundaries. Feel free to connect with me and
          let’s create something amazing together!
        </p>
      </div>
    </div>
  );
};

export default About;
