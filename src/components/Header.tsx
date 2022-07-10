import React from "react";
import { FiBell, FiSearch } from "react-icons/fi";
const Header = () => {
  return (
    <div className="h-20 w-auto bg-white dark:bg-gray-800 shadow-md rounded flex flex-row px-8">
      <div className="w-1/3"></div>
      <div className="w-1/3">
        <div className="relative align-middle flex my-auto items-center justify-center h-16">
          <input
            className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 w-full border-none focus-visible:outline-blue-900 focus-visible:outline-none shadow-md"
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
      <div className="w-1/3">
        <div className="w-full h-full flex items-center justify-end">
          <div className="relative">
            <button type="button" id="notification-menu">
              <FiBell
                className="w-auto h-7 pr-4 text-gray-500"
                aria-hidden="true"
              />
              <span className="absolute right-3 -top-2 rounded-full bg-red-500 w-5 h-5 flex items-center justify-center font-bold text-white text-xs">
                <span aria-label="Notifications">9+</span>
              </span>
            </button>
          </div>
          <div className="w-4 text-gray-600">|</div>
          <div className="flex flex-col flex-nowrap text-center pr-3">
            <p className="text-sm font-bold text-gray-800 dark:text-gray-400">
              John Doe
            </p>
            <p className="text-xs font-bold text-gray-800 dark:text-gray-400">
              Admin
            </p>
          </div>
          <img
            src={"https://i.pravatar.cc/300"}
            alt="profile pic"
            className="p-1 w-16 h-16 rounded-full shadow-lg border-2 border-slate-400 dark:border-slate-700"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
