import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto atque
          animi harum, labore ducimus inventore amet reiciendis obcaecati
          possimus perspiciatis sunt. Nam recusandae esse omnis, praesentium
          necessitatibus quia molestias repellendus quaerat autem dolorem
          exercitationem sunt deleniti illo odio magnam dicta saepe, hic, unde
          temporibus enim ab sit dolore. Officiis, veniam?
        </p>
        <br />
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          aliquam officiis, placeat laudantium nihil possimus sit est doloribus
          blanditiis sint ipsa recusandae perferendis libero? Delectus magnam
          quo sequi, quibusdam voluptatem ex. Nihil est facilis nobis magnam
          alias cupiditate voluptatibus nesciunt dolorem. Quasi ea sunt tenetur
          molestiae omnis quia unde ipsam!
        </p>
      </div>
    </div>
  );
};

export default About;
