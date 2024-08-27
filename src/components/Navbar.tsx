import { useState } from "react";
import profileIcon from "../../public/myFavIcon.ico";
import { Link } from "react-scroll";
import DarkModeToggle from "./DarkmodeToggle";

function Navbar() {
  const [isElementVisible, setIsElementVisible] = useState(false);
  const [toggleNavbar, setToggleNavbar] = useState(true);
  const toggle = () => {
    setToggleNavbar(!toggleNavbar);
  };
  const closeToggle = () => {
    setToggleNavbar(true);
  };

  const toggleElementVisibility = () => {
    setIsElementVisible(!isElementVisible);
  };

  return (
    <header className="bg-white dark:bg-gray-950 fixed top-0 w-full z-10">
      <div className="w-full mx-auto border-b dark:border-gray-800 2xl:max-w-7xl">
        <div className="relative flex flex-col w-full p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <button
              type="button"
              className="flex bg-white rounded-full focus:outline-none"
              id="user-menu-button"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="object-cover w-10 h-10 rounded-full bg-gray-900 dark:bg-slate-100"
                src={profileIcon}
                alt="Michael Osas"
              />
            </button>

            <div className="flex flex-row items-center">
              
              <div className="sm:hidden">{toggleNavbar && <DarkModeToggle />}</div>

              <button
                onClick={toggle}
                className="inline-flex items-center justify-center p-2 text-gray-400 dark:text-white hover:text-black dark:hover:text-white focus:outline-none focus:text-black dark:focus:text-white md:hidden"
              >
                <svg
                  className="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                  <path
                    className="hidden"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {isElementVisible && (
            <a
              className="md:hidden"
              target="_blank"
              rel="noreferrer"
              href="https://calendar.app.google/bBeCZXMknVz2FArE7"
            >
              <div className="absolute top-[80%] right-[5%] z-10 w-56 py-4 cursor-pointer mt-2 bg-white dark:bg-gray-950 rounded-md shadow-lg ring-1 ring-black dark:ring-gray-400 ring-opacity-5 active:outline-gray-100 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="20px"
                  height="20px"
                >
                  <rect
                    width="16"
                    height="16"
                    x="12"
                    y="16"
                    //className="bg-white"
                    fill="#fff"
                    transform="rotate(-90 20 24)"
                  />
                  <polygon
                    fill="#1e88e5"
                    points="3,17 3,31 8,32 13,31 13,17 8,16"
                  />
                  <path
                    fill="#4caf50"
                    d="M37,24v14c0,1.657-1.343,3-3,3H13l-1-5l1-5h14v-7l5-1L37,24z"
                  />
                  <path
                    fill="#fbc02d"
                    d="M37,10v14H27v-7H13l-1-5l1-5h21C35.657,7,37,8.343,37,10z"
                  />
                  <path
                    fill="#1565c0"
                    d="M13,31v10H6c-1.657,0-3-1.343-3-3v-7H13z"
                  />
                  <polygon fill="#e53935" points="13,7 13,17 3,17" />
                  <polygon
                    fill="#2e7d32"
                    points="38,24 37,32.45 27,24 37,15.55"
                  />
                  <path
                    fill="#4caf50"
                    d="M46,10.11v27.78c0,0.84-0.98,1.31-1.63,0.78L37,32.45v-16.9l7.37-6.22C45.02,8.8,46,9.27,46,10.11z"
                  />
                </svg>
                <span className="block pl-3 text-sm text-gray-700 dark:text-gray-100 font-[600]">
                  Schedule a Meeting
                </span>
              </div>
            </a>
          )}
          <nav
            className={`${
              toggleNavbar ? "hidden" : "block"
            } flex-col items-center flex-grow text-right space-y-4 md:space-y-0 pt-4 md:pt-0 md:pb-0 md:flex md:justify-end md:flex-row`}
          >
            <div className="px-2 py-2 text-sm text-gray-500 dark:text-gray-50 hover:cursor-pointer lg:px-6 md:px-3 hover:text-blue-600 lg:ml-auto">
              <Link
                onClick={closeToggle}
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Home
              </Link>
            </div>
            <div className="px-2 py-2 text-sm text-gray-500 dark:text-gray-50 hover:cursor-pointer lg:px-6 md:px-3 hover:text-blue-600">
              <Link
                onClick={closeToggle}
                to="techStack"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Tech Stack
              </Link>
            </div>
            <div className="px-2 py-2 text-sm text-gray-500 dark:text-gray-50 hover:cursor-pointer lg:px-6 md:px-3 hover:text-blue-600">
              <Link
                onClick={closeToggle}
                to="profile"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Profile
              </Link>
            </div>
            <div className="px-2 py-2 text-sm text-gray-500 dark:text-gray-50 hover:cursor-pointer lg:px-6 md:px-3 hover:text-blue-600">
              <Link
                onClick={closeToggle}
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Projects
              </Link>
            </div>
            <div className="px-2 py-2 text-sm text-gray-500 dark:text-gray-50 hover:cursor-pointer lg:px-6 md:px-3 hover:text-blue-600">
              <Link
                onClick={closeToggle}
                to="footer"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Socials
              </Link>
            </div>

            <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
              {toggleNavbar && <DarkModeToggle />}
              
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
