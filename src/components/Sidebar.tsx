import React, { useState } from "react";
import {
  FiArrowDownRight,
  FiDollarSign,
  FiHome,
  FiSettings,
} from "react-icons/fi";
import { Link } from "react-router-dom";
// @ts-ignore
const NavItem = ({ to, icon, text }) => {
  return (
    <li className="text-md font-semibold text-gray-500 dark:text-gray-400 shadow dark:shadow-md rounded-md border-2 border-slate-200 dark:border-slate-700 hover:border-slate-500 hover:text-gray-700  dark:hover:border-slate-400 dark:hover:text-gray-300 my-3 ">
      <Link
        to={to}
        className="flex flex-row flex-nowrap items-center py-1 px-3 w-48"
      >
        {icon}
        <span className="pl-2">{text}</span>
      </Link>
    </li>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <aside
      className={`z-10 w-64 flex flex-col flex-nowrap h-auto bg-white dark:bg-gray-800 shadow-sm  rounded h-full mr-1 `}
    >
      <div className="px-8 py-6 mx-auto">
        <h1 className="text-xl text-red-600 text-center font-bold">
          bullBills
        </h1>
      </div>
      <div
        className={`relative z-10 left-10 top-2 w-14 h-14 bg-slate-800 rounded-r-sm md:hidden flex items-center justify-center p-1 border border-slate-900`}
        onClick={handleClick}
      ></div>
      <nav className="px-8 w">
        <ul>
          <NavItem to="/" icon={<FiHome />} text="Home" />
          <NavItem to="/income" icon={<FiDollarSign />} text="Income" />
          <NavItem to="/expenses" icon={<FiArrowDownRight />} text="Expenses" />
          <NavItem to="/settings" icon={<FiSettings />} text="Settings" />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
