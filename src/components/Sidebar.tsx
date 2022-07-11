import React, { useState } from "react";
import {
  FiArrowDownRight,
  FiChevronRight,
  FiCircle,
  FiDollarSign,
  FiHome,
  FiSettings,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/logo.svg";

interface NavItemProps {
  to: string;
  Icon: React.ElementType;
  text: string;
  isDropdown: boolean;
}
const NavItem = ({ to, Icon, text, isDropdown }: NavItemProps) => {
  const isActive = useLocation().pathname === to;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className={`cursor-pointer `}>
      <Link
        to={to}
        className={`${
          isActive
            ? "bg-gradient-to-r from-blue-900 to-blue-800 shadow dark:shadow-md"
            : ""
        } flex flex-row flex-nowrap items-center py-2 px-3 w-full h-full align-middle hover:shadow-md hover:shadow-blue-600 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-800 font-semibold text-gray-500  dark:text-gray-400  border-none my-2 rounded-md border-2  dark:border-slate-700 hover:border-slate-500 hover:text-gray-700  dark:hover:border-slate-400 dark:hover:text-gray-300`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon className="text-2xl before:bg-blue-900 before:w-36 before:h-36 before:left-0 before:absolute " />
        <span className="pl-5 py-1.5 text-md">{text}</span>
        {isDropdown && <FiChevronRight className="text-md ml-auto" />}
      </Link>

      <ul
        className={`${
          isOpen ? "scale-y-100 max-h-80" : "scale-y-0 max-h-0"
        }  origin-top transition-all  bg-gray-800 rounded-md mt-2 w-full h-fit`}
      >
        <li className="px-4 py-4 ">
          <Link to="/" className="flex flex-row items-center">
            <FiCircle className="text-xs h-2 text-gray-400" />
            <span className="text-md pl-4 font-semibold text-gray-400">
              Home
            </span>
          </Link>
        </li>
        <li className="px-4 py-4">
          <Link to="/" className="flex flex-row items-center">
            <FiCircle className="text-xs h-2 text-gray-400" />
            <span className="text-md pl-4 font-semibold text-gray-400">
              Home
            </span>
          </Link>
        </li>
        <li className="px-4 py-4">
          <Link to="/" className="flex flex-row items-center">
            <FiCircle className="text-xs h-2 text-gray-400" />
            <span className="text-md pl-4 font-semibold text-gray-400">
              Home
            </span>
          </Link>
        </li>
      </ul>
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
      className={`z-10 w-72 flex flex-col flex-nowrap h-auto bg-white dark:bg-gray-800 shadow-sm rounded h-full`}
    >
      <div className="flex flex-row flex-nowrap items-center justify-center border-b-2 m-2 border-slate-900">
        <img src={Logo} alt="logo" className="w-16 h-16" />
        <h1 className="pl-3 text-red-600 font-bold text-2xl">Bull Bills</h1>
      </div>
      <div
        className={`relative z-10 left-10 top-2 w-14 h-14 bg-slate-800 rounded-r-sm md:hidden flex items-center justify-center p-1 border border-slate-900`}
        onClick={handleClick}
      ></div>
      <nav className="px-4 ">
        <ul className="group flex flex-col flex-nowrap transition-all ">
          <NavItem to="/" Icon={FiHome} text="Home" isDropdown={true} />
          <NavItem
            to="/income"
            Icon={FiDollarSign}
            text="Income"
            isDropdown={true}
          />
          <NavItem
            to="/expenses"
            Icon={FiArrowDownRight}
            text="Expenses"
            isDropdown={true}
          />
          <NavItem
            to="/settings"
            Icon={FiSettings}
            text="Settings"
            isDropdown={true}
          />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
