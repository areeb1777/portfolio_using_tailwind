'use client'; // Add this line at the top

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

type HeroProps = {
  theme: string;
};

const Hero: React.FC<HeroProps> = ({ theme }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(100);

  const phrases = useMemo(
    () => ["JavaScript Developer", "Frontend Developer", "Web Developer"],
    []
  );

  useEffect(() => {
    const handleTyping = () => {
      setText((prev) => {
        const currentPhrase = phrases[index];
        if (isDeleting) {
          return currentPhrase.substring(0, prev.length - 1);
        } else {
          return currentPhrase.substring(0, prev.length + 1);
        }
      });

      if (!isDeleting && text === phrases[index]) {
        setTimeout(() => setIsDeleting(true), 1000);
        setDelay(50);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
        setDelay(100);
      }
    };

    const typingTimeout = setTimeout(handleTyping, delay);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, index, delay, phrases]);

  return (
    <section className={`relative font-bold flex flex-col items-center justify-center min-h-screen p-8 text-center ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <video
        key={theme}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src={theme === 'dark' ? "/dark.mp4" : "/light.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 mb-8">
        <Image
          src="/profile2.jpg"
          alt="Profile"
          width={200}
          height={200}
          priority
          className="rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 shadow-xl hover:shadow-2xl"
          style={{
            boxShadow: "0px 4px 15px rgba(255, 215, 0, 0.6)",
          }}
        />
      </div>
      <h1 className="relative z-10 text-4xl md:text-6xl font-bold mb-4 text-lightText dark:text-darkText">
        Hello, I&apos;m Areeb
      </h1>
      <p className="relative z-10 text-xl md:text-2xl mb-8 text-lightText dark:text-darkText">
        <span className="text-lightText dark:text-white">I&apos;m a </span>
        <span className="text-orange-400">{text}</span>
        <span className="border-r-2 border-gray-500 animate-blink"></span>
      </p>

      <div className="relative z-10 flex space-x-4">
        <Link
          href="#contact"
          className="bg-blue-500 px-5 py-3 rounded-full text-white transition-colors duration-300 ease-in-out hover:bg-green-500 hover:text-white no-underline font-bold"
        >
          Contact Me
        </Link>
        <a
          href="/Areeb_CV.pdf"
          download
          className="bg-gray-500 px-5 py-3 rounded-full text-white transition-colors duration-300 ease-in-out hover:bg-blue-500 hover:text-white no-underline flex items-center gap-2 font-bold"
        >
          Resume <FaArrowUpRightFromSquare />
        </a>
      </div>
    </section>
  );
};

export default Hero;
