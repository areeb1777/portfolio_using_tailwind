"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-3 mt-8 text-lightText dark:text-darkText transition-colors duration-300">
      <div className="container mx-auto text-center">
        <div className="mb-4 flex justify-center gap-4">
          <Link
            href="https://github.com/areeb1777"
            target="_blank"
            className="text-lightText dark:text-darkText text-2xl hover:text-lightText dark:hover:text-darkText no-underline"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/muhammad-areeb-a295192b5"
            target="_blank"
            className="text-lightText dark:text-darkText text-2xl hover:text-lightText dark:hover:text-darkText no-underline"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://x.com/areeb_17777"
            target="_blank"
            className="text-lightText dark:text-darkText text-2xl hover:text-lightText dark:hover:text-darkText no-underline"
          >
            <FaSquareXTwitter />
          </Link>
          {/* Add more social links as needed */}
        </div>
        <p className="text-sm">
          &copy; 2024 Areeb Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
