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
        {/* Project 7 */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg transition duration-300 hover:scale-110">
          <Image
            src="/e-commerce.png"
            width={800}
            height={800}
            alt="Project 7"
            className="rounded-t-lg mb-4"
          />
          <h3 className="font-bold text-xl">
            Avion: Elevate Your Living Space with Premium Furniture
          </h3>
          <p className="text-gray-400 mb-4 text-justify mt-3">
            Avion is a sophisticated e-commerce platform tailored to offer the
            finest furniture shopping experience. Our platform allows users to
            explore, purchase, and manage their orders with ease, all while
            ensuring top-notch security and performance.
          </p>
          <Link
            href="https://areeb-marketplace-ecommerce-with-admin-panel.vercel.app/"
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 hover:text-white no-underline"
          >
            Live Preview
          </Link>
        </div>
        {/* Project 8 */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg transition duration-300 hover:scale-110">
          <Image
            src="/governor-front-clone.png"
            width={800}
            height={800}
            alt="Project 8"
            className="rounded-t-lg mb-4"
          />
          <h3 className="font-bold text-xl">
            Governor Initiative Front Page Clone
          </h3>
          <p className="text-gray-400 mb-4 text-justify mt-3">
            This project is a meticulously crafted clone of the front page of
            the Governor Initiative website. The aim was to replicate the design
            and functionality using modern web technologies while ensuring a
            seamless and responsive user experience.
          </p>
          <Link
            href="https://assigment-02-governor-website-clone.vercel.app/"
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 hover:text-white no-underline"
          >
            Live Preview
          </Link>
        </div>
        {/* Project 9 */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg transition duration-300 hover:scale-110">
          <Image
            src="/white-pace.png"
            width={800}
            height={800}
            alt="Project 9"
            className="rounded-t-lg mb-4"
          />
          <h3 className="font-bold text-xl">
            Whitepace: Sleek and Responsive SaaS Platform
          </h3>
          <p className="text-gray-400 mb-4 text-justify mt-3">
            Whitepace is a beautifully designed SaaS platform meticulously
            crafted from a Figma design and built using Next.js15 and Tailwind
            CSS. This platform offers a seamless and fully responsive user
            experience, ensuring it looks stunning and functions flawlessly on
            all devices.
          </p>
          <Link
            href="https://nextjs-class-assigment-05-whitepace-saas.vercel.app/"
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 hover:text-white no-underline"
          >
            Live Preview
          </Link>
        </div>
        {/* Project 10 */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg transition duration-300 hover:scale-110">
          <Image
            src="/areeb-blog.png"
            width={800}
            height={800}
            alt="Project 10"
            className="rounded-t-lg mb-4"
          />
          <h3 className="font-bold text-xl">
            AREEB BLOG: Insights and Discussions
          </h3>
          <p className="text-gray-400 mb-4 text-justify mt-3">
            AREEB BLOG is a vibrant and engaging platform designed to share
            insightful articles and foster meaningful discussions. Our blog site
            is fully responsive, ensuring an optimal reading experience on all
            devices. Dive into a variety of topics, share your thoughts through
            our interactive comment system, and become a part of the AREEB BLOG
            community.
          </p>
          <Link
            href="https://areeb-blog.vercel.app/"
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 hover:text-white no-underline"
          >
            Live Preview
          </Link>
        </div>
        {/* Project 11 */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg transition duration-300 hover:scale-110">
          <Image
            src="/birthday-wish.png"
            width={800}
            height={800}
            alt="Project 11"
            className="rounded-t-lg mb-4"
          />
          <h3 className="font-bold text-xl">
            Birthday Wish: Personalized Birthday Greetings
          </h3>
          <p className="text-gray-400 mb-4 text-justify mt-3">
            Birthday Wish is a delightful and interactive web application
            designed to create and share personalized birthday greetings with
            friends and loved ones. Built with Next.js15 and Tailwind CSS, this
            application ensures a smooth and responsive experience on all
            devices, making it easy to spread joy and celebration.
          </p>
          <Link
            href="https://birthdaywishapp-beta.vercel.app/"
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 hover:text-white no-underline"
          >
            Live Preview
          </Link>
        </div>
        {/* Project 12 */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg transition duration-300 hover:scale-110">
          <Image
            src="/number-guess.png"
            width={800}
            height={800}
            alt="Project 12"
            className="rounded-t-lg mb-4"
          />
          <h3 className="font-bold text-xl">
            Number Guessing Game: Guess the Number Between 1 and 10
          </h3>
          <p className="text-gray-400 mb-4 text-justify mt-3">
            The Number Guessing Game is a fun and interactive web application
            designed to challenge your guessing skills. Players are tasked with
            guessing a randomly generated number between 1 and 10. Built with
            Next.js15 and Tailwind CSS, this game offers a smooth and responsive
            experience across all devices.
          </p>
          <Link
            href="https://number-guessing-game-zeta-rosy.vercel.app/"
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 hover:text-white no-underline"
          >
            Live Preview
          </Link>
        </div>
        {/* Project 13 */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg transition duration-300 hover:scale-110">
          <Image
            src="/weather-widget.png"
            width={800}
            height={800}
            alt="Project 12"
            className="rounded-t-lg mb-4"
          />
          <h3 className="font-bold text-xl">
            Weather Widget: Real-Time Weather Updates
          </h3>
          <p className="text-gray-400 mb-4 text-justify mt-3">
            The Weather Widget is a sleek and interactive web application
            designed to provide real-time weather updates for cities worldwide.
            Built with Next.js15 and utilizing a real-time weather API, this app
            ensures users have access to accurate and up-to-date weather
            information at their fingertips.
          </p>
          <Link
            href="https://weather-widget-app-orpin.vercel.app/"
            target="_blank"
            className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 hover:text-white no-underline"
          >
            Live Preview
          </Link>
        </div>
        {/* Project 14 */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg transition duration-300 hover:scale-110">
          <Image
            src="/countdown-timer.png"
            width={800}
            height={800}
            alt="Project 14"
            className="rounded-t-lg mb-4"
          />
          <h3 className="font-bold text-xl">
            Countdown Timer: Countdown to Your Special Moments
          </h3>
          <p className="text-gray-400 mb-4 text-justify mt-3">
            Countdown Timer is a sleek and interactive web application designed
            to help you keep track of upcoming events and special moments. Built
            with Next.js15 and Tailwind CSS, this timer offers a smooth and
            responsive experience across all devices.
          </p>
          <Link
            href="https://countdown-timer-ten-ruby.vercel.app/"
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
