'use client'; // Add this line at the top

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [theme, setTheme] = useState<string>("dark");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const header = document.getElementById("header");

    const onScroll = () => {
      if (header) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
          header.style.top = "-80px";
        } else {
          header.style.top = "0";
        }
        lastScrollTop = scrollTop;
      }
    };

    window.addEventListener("scroll", onScroll);

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.documentElement.classList.add(storedTheme);
      setTheme(storedTheme);
    } else {
      document.documentElement.classList.add("dark");
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      id="header"
      className="bg-gray-100 dark:bg-gray-800 p-4 sticky top-0 z-50 transition-top duration-300"
    >
      <nav className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-dancingScript text-lightText dark:text-darkText ml-4"
        >
          Areeb Portfolio
        </Link>
        
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center space-x-2 md:hidden"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-5 mr-5">
          <li>
            <Link
              href="#about"
              className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              Contact
            </Link>
          </li>
        </ul>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-gray-100 dark:bg-gray-800 flex flex-col items-center space-y-4 py-4 md:hidden">
            <li>
              <Link
                href="#about"
                className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white"
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
        
        {/* Dark Mode Toggle Button for Desktop */}
        <button
          onClick={toggleTheme}
          className="hidden md:flex text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center space-x-2"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
