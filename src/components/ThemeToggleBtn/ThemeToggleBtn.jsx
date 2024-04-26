// ThemeToggleBtn.js

import { Switch } from "@headlessui/react";
import { useTheme } from "./../theme/ThemeContext";
import Sun from "../../../public/sun.svg";
import Moon from "../../../public/moon.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ThemeToggleBtn() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Switch
      checked={darkMode}
      onChange={toggleDarkMode}
      className={classNames(
        darkMode ? "bg-indigo-600" : "bg-gray-200",
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          darkMode ? "translate-x-5" : "translate-x-0",
          "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        )}
      >
        <span
          className={classNames(
            darkMode
              ? "opacity-0 duration-100 ease-out"
              : "opacity-100 duration-200 ease-in",
            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <img src={Sun} alt="" />
        </span>
        <span
          className={classNames(
            darkMode
              ? "opacity-100 duration-200 ease-in"
              : "opacity-0 duration-100 ease-out",
            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
          )}
          aria-hidden="true"
        >
          <img src={Moon} alt="" />
        </span>
      </span>
    </Switch>
  );
}
