import React from "react";
import { FiSearch } from "react-icons/fi";
const Header = () => {
  return (
    <div className="h-fit w-auto bg-white dark:bg-gray-800 shadow-md rounded flex flex-row">
      <div className="relative p-2 flex items-center justify-center w-96">
        <input
          className=" bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 w-full border-none focus-visible:outline-blue-900 focus-visible:outline-none shadow-md"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <FiSearch
          className={
            "w-6 h-6 relative right-8 text-slate-400 dark:text-slate-900"
          }
        />
      </div>
    </div>
  );
};
export default Header;
