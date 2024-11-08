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
        <div className="flex items-center justify-between">
          <FaHtml5 className="mr-2 text-2xl text-red-500" />
          <span className="text-lg font-semibold">HTML</span>
          <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full mx-4 overflow-hidden">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            90%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <FaCss3Alt className="mr-2 text-2xl text-blue-500" />
          <span className="text-lg font-semibold">CSS</span>
          <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full mx-4 overflow-hidden">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            85%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <IoLogoJavascript className="mr-2 text-4xl text-yellow-400" />
          <span className="text-lg font-semibold">JavaScript</span>
          <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full mx-4 overflow-hidden">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            75%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <SiTypescript className="mr-2 text-4xl text-blue-500" />
          <span className="text-lg font-semibold">TypeScript</span>
          <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full mx-4 overflow-hidden">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            75%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <FaReact className="mr-2 text-4xl text-blue-400" />
          <span className="text-lg font-semibold">React</span>
          <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full mx-4 overflow-hidden">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            80%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <RiTailwindCssFill className="mr-2 text-4xl text-blue-400" />
          <span className="text-lg font-semibold">Tailwind</span>
          <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full mx-4 overflow-hidden">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            80%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <RiNextjsFill className="mr-2 text-4xl text-white bg-black" />
          <span className="text-lg font-semibold">Next.js</span>
          <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full mx-4 overflow-hidden">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: "75%" }}
            ></div>
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
