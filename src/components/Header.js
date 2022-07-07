import React from "react";
import Logo from "../images/logo.svg";
import { FiSearch } from "react-icons/fi";
const Header = () => {
  return (
    <header className="h-fit bg-white dark:bg-gray-800 shadow-md rounded flex flex-row mx-1 my-1">
      <img src={Logo} alt="logo" className="h-auto h-20 px-6 py-2" />
      <div className="relative p-2 flex items-center justify-center ">
        <input
          className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 w-full border-none focus-visible:outline-blue-900 focus-visible:outline-none shadow-md"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <FiSearch className="relative -left-5 text-gray-900" />
      </div>
    </header>
  );
};
export default Header;
