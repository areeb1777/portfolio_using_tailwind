"use client";

import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="skills"
      className="p-8 max-w-4xl mx-auto text-center bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold mb-8 cursor-pointer hover:text-orange-400">
        Skills
      </h2>
      <div className="space-y-4">
        {/* Skill Item */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 w-32">
            <FaHtml5 className="text-2xl text-red-500" />
            <span className="text-lg font-semibold">HTML</span>
          </div>
          <div className="flex-grow">
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            90%
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 w-32">
            <FaCss3Alt className="text-2xl text-blue-500" />
            <span className="text-lg font-semibold">CSS</span>
          </div>
          <div className="flex-grow">
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            85%
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 w-32">
            <IoLogoJavascript className="text-4xl text-yellow-400" />
            <span className="text-lg font-semibold">JavaScript</span>
          </div>
          <div className="flex-grow">
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            75%
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 w-32">
            <SiTypescript className="text-4xl text-blue-500" />
            <span className="text-lg font-semibold">TypeScript</span>
          </div>
          <div className="flex-grow">
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            75%
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 w-32">
            <FaReact className="text-4xl text-blue-400" />
            <span className="text-lg font-semibold">React</span>
          </div>
          <div className="flex-grow">
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            80%
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 w-32">
            <RiTailwindCssFill className="text-4xl text-blue-400" />
            <span className="text-lg font-semibold">Tailwind</span>
          </div>
          <div className="flex-grow">
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            80%
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 w-32">
            <RiNextjsFill className="text-4xl text-white bg-black" />
            <span className="text-lg font-semibold">Next.js</span>
          </div>
          <div className="flex-grow">
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            75%
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
