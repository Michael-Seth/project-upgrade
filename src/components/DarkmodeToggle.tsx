import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || !localStorage.getItem("theme");
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <label
      htmlFor="DarkModeToggle"
      className="relative inline-flex items-center cursor-pointer"
    >
      <input
        type="checkbox"
        id="DarkModeToggle"
        className="sr-only"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <span className="w-12 h-8 bg-gray-300 rounded-full inline-flex items-center">
        <span
          className={`w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center absolute transform transition-transform ${
            darkMode ? "translate-x-4" : "translate-x-0"
          }`}
        >
          {darkMode ? <FaMoon className="text-white" /> : <FaSun className="text-yellow-500" />}
        </span>
        <span
          className={`w-12 h-8 bg-gray-300 rounded-full flex items-center justify-center ${
            darkMode ? "bg-gray-800" : "bg-gray-300"
          }`}
        />
      </span>
    </label>
  );
};

export default DarkModeToggle;
