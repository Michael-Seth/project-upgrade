import React, { useEffect, useState } from "react";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
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
      className="relative inline-block h-8 w-10 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
    >
      <input
        type="checkbox"
        id="DarkModeToggle"
        className="peer sr-only"
        checked={darkMode}
        onChange={toggleDarkMode}
      />

      <span className="absolute inset-0 m-auto h-1 rounded-full bg-gray-300"></span>

      <span className="absolute inset-y-0 start-0 m-auto size-5 rounded-full bg-slate-800 transition-all peer-checked:start-6 peer-checked:[&_>_*]:scale-0">
        <span className="absolute inset-0 m-auto size-3 rounded-full bg-gray-200 transition">
        </span>
      </span>
    </label>
  );
};

export default DarkModeToggle;
