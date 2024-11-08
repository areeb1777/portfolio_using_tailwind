"use client";

import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="projects"
      className="p-8 max-w-4xl mx-auto text-center bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold mb-8 cursor-pointer hover:text-orange-400">
        Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Project 1 */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg transition duration-300 hover:scale-110">
          <Image
            src="/youtube.png"
            width={800}
            height={800}
            alt="Project 1"
            className="rounded-t-lg mb-4"
          />
          <h3 className="font-bold text-xl">YouTube Thumbnail Designer</h3>
          <p className="text-gray-700 dark:text-gray-400 mb-4 text-justify mt-3">
            Create visually appealing YouTube thumbnails with ease. This tool
            offers a simple interface for thumbnail creation with customizable
            text, colors, and background images. Tech Stack: HTML, CSS,
            JavaScript
          </p>
          <Link
            href="https://youtube-thumbnail-design.vercel.app"
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 hover:text-white no-underline"
          >
            Live Preview
          </Link>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg transition duration-300 hover:scale-110">
          <Image
            src="/currency-convertor.png"
            width={800}
            height={800}
            alt="Project 2"
            className="rounded-t-lg mb-4"
          />
          <h3 className="font-bold text-xl">Real-Time Currency Converter</h3>
          <p className="text-gray-700 dark:text-gray-400 mb-4 text-justify mt-3">
            Convert between multiple currencies instantly with this powerful
            currency converter. Integrated with live exchange rates for accuracy
            and reliability. Tech Stack: JavaScript, REST APIs
          </p>
          <Link
            href="https://currencyconvertor-nu.vercel.app"
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 hover:text-white no-underline"
          >
            Live Preview
          </Link>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg transition duration-300 hover:scale-110">
          <Image
            src="/hackathon-milestone5.png"
            width={800}
            height={800}
            alt="Project 3"
            className="rounded-t-lg mb-4"
          />
          <h3 className="font-bold text-xl">Editable Resume Builder</h3>
          <p className="text-gray-700 dark:text-gray-400 mb-4 text-justify mt-3">
            Build and customize your resume effortlessly. This dynamic resume
            builder allows you to edit sections on the fly and share your resume
            with a unique URL. Tech Stack: TypeScript, HTML, CSS
          </p>
          <Link
            href="https://areebresume-milestone-5.vercel.app"
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 hover:text-white no-underline"
          >
            Live Preview
          </Link>
        </div>

        {/* Project 4 */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg transition duration-300 hover:scale-110">
          <Image
            src="/netflix-clone.png"
            width={800}
            height={800}
            alt="Project 4"
            className="rounded-t-lg mb-4"
          />
          <h3 className="font-bold text-xl">Netflix Clone</h3>
          <p className="text-gray-700 dark:text-gray-400 mb-4 text-justify mt-3">
            A sleek Netflix-inspired front end, showcasing a movie grid layout
            with hover effects. A visually engaging UI for video streaming
            platforms. Tech Stack: HTML, CSS
          </p>
          <Link
            href="https://netflix-clone-lyart-zeta-83.vercel.app"
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 hover:text-white no-underline"
          >
            Live Preview
          </Link>
        </div>

        {/* Project 5 */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg transition duration-300 hover:scale-110">
          <Image
            src="/amazon-clone.png"
            width={800}
            height={800}
            alt="Project 5"
            className="rounded-t-lg mb-4"
          />
          <h3 className="font-bold text-xl">Amazon Clone - Front Page</h3>
          <p className="text-gray-700 dark:text-gray-400 mb-4 text-justify mt-3">
            A replica of Amazon’s homepage with product categories. Demonstrates
            an e-commerce front-end layout. Tech Stack: HTML, CSS
          </p>
          <Link
            href="https://amazon-front-page-project.vercel.app"
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 hover:text-white no-underline"
          >
            Live Preview
          </Link>
        </div>

        {/* Project 6 */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg transition duration-300 hover:scale-110">
          <Image
            src="/computer-acessories.png"
            width={800}
            height={800}
            alt="Project 6"
            className="rounded-t-lg mb-4"
          />
          <h3 className="font-bold text-xl">Computer Accessories Store</h3>
          <p className="text-gray-400 mb-4 text-justify mt-3">
            A clean and responsive website for showcasing computer accessories.
            Designed for smooth navigation and product browsing. Tech Stack:
            HTML, CSS
          </p>
          <Link
            href="https://computer-accessories-project.vercel.app"
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 hover:text-white no-underline"
          >
            Live Preview
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
