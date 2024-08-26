import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="dark:bg-black">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-12">
        <div className="flex flex-col items-start justify-between pt-16 pb-6 gap-y-12 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-black dark:text-white">
              <div>
                <p className="font-semibold leading-6 text-black dark:text-white uppercase">
                  Michael
                </p>
                <p className="mt-1 text-sm">Software Engineer</p>
              </div>
            </div>
            <nav className="flex gap-8 mt-11">
              <div className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 dark:text-gray-300 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <span className="relative">Home</span>
                </Link>
              </div>
              <div className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 dark:text-gray-300 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]">
                <Link
                  to="techStack"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <span className="relative">Tech Stack</span>
                </Link>
              </div>
              <div className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 dark:text-gray-300 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]">
                <Link
                  to="profile"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <span className="relative">Profile</span>
                </Link>
              </div>
              <div className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 dark:text-gray-300 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <span className="relative">Projects</span>
                </Link>
              </div>
              {/* <a
                className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-500 dark:text-gray-300 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]"
                href="#"
              >
                <span className="relative">Socials</span>
              </a> */}
            </nav>
          </div>
          <div className="relative flex items-center self-stretch p-4 -mx-4 transition-colors group hover:bg-gray-100 dark:hover:bg-gray-900 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex items-center justify-center flex-none w-24 h-24 bg-black dark:bg-slate-100 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                width="34px"
                height="34px"
              >
                <path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z" />
              </svg>
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-black dark:text-white">
                <a
                  href="https://michaelosas.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="absolute inset-0 sm:rounded-2xl"></span>View
                  More Projects
                </a>
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300 hover:text-blue-600">
                Explore my diverse portfolio to discover a wide range of
                completed projects.
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 pb-2 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-2 pt-8 border-t border-gray-200 dark:border-gray-900">
          <div className="flex justify-center space-x-6 md:order-2">
            <span className="inline-flex justify-center w-full gap-3 lg:ml-auto md:justify-start md:w-auto">
              <a
                href="https://github.com/Michael-Seth"
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 transition fill-black dark:fill-white hover:text-blue-500"
              >
                <span className="sr-only">github</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/michaelosas78"
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 transition fill-black dark:fill-white hover:text-blue-500"
              >
                <span className="sr-only">twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="24px"
                  height="24px"
                >
                  <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/_michael_osas/"
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 transition fill-black dark:fill-white hover:text-blue-500"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="24px"
                  height="24px"
                >
                  <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/michael-osas"
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 transition fill-black dark:fill-white hover:text-blue-500"
              >
                <span className="sr-only">Linkedin</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="24px"
                  height="24px"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                </svg>
              </a>
            </span>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-base text-center text-gray-400">
              <span className="mx-auto mt-2 text-sm text-gray-500 dark:text-gray-300">
                Copyright © 2018 - 2024 | All rights reserved.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
