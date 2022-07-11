import { FiSearch } from "react-icons/fi";
import React from "react";

const Search = () => {
  return (
    <div className="relative align-middle flex my-auto items-center justify-center h-16">
      <input
        className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 w-full border-none shadow-md focus-visible:outline-blue-900 focus-visible:outline-none"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <FiSearch className="w-6 h-6 relative right-8 text-slate-400 dark:text-slate-900" />
    </div>
  );
};
export default Search;
