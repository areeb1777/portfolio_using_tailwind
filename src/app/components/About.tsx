"use client";

import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="p-8 max-w-4xl mx-auto text-center bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold mb-4 cursor-pointer hover:text-orange-400">
        About Me
      </h2>
      <p className="text-lg text-justify">
        I am a 21-year-old student of the Governor Sindh Kamran Khan Tessori
        Initiative for Artificial Intelligence, Web 3.0 & Metaverse, with
        expertise in modern technologies including HTML, CSS, JavaScript,
        Tailwind CSS, TypeScript, and Next.js. As a web developer, I am
        passionate about building innovative and scalable solutions that
        leverage the latest advancements in web development and emerging
        technologies. I strive to continuously improve my skills and stay
        updated with the rapidly evolving tech landscape.
      </p>
    </section>
  );
};

export default About;
