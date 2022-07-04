import React from "react";
import Logo from "../images/logo.svg";
import {
  FiArrowDownRight,
  FiDollarSign,
  FiHome,
  FiSettings,
} from "react-icons/fi";
import { Link } from "react-router-dom";
const NavItem = ({ to, icon, text, onClick }) => {
  return (
    <li className="text-md font-semibold text-gray-400 shadow-md rounded-md border-2 border-slate-700 hover:border-slate-400 hover:text-gray-300 my-3">
      <Link
        to={to}
        className="flex flex-row flex-nowrap items-center py-1 px-3"
        onClick={onClick}
      >
        {icon}
        <span className="pl-2">{text}</span>
      </Link>
    </li>
  );
};

const Sidebar = () => {
  return (
    <div className="min-w-fit w-64 max-w-fit flex h-auto bg-slate-800 m-4  shadow-sm shadow-slate-900  rounded-lg">
      <div className="px-8">
        <div className="flex h-20 items-center justify-between">
          <img src={Logo} alt="logo" className="h-16" />
          <h1 className="text-xl font-bold text-red-600">bullBills</h1>
        </div>
        <ul className="mt-10">
          <NavItem to="/" icon={<FiHome />} text="Home" />
          <NavItem to="/income" icon={<FiDollarSign />} text="Income" />
          <NavItem to="/expenses" icon={<FiArrowDownRight />} text="Expenses" />
          <NavItem to="/settings" icon={<FiSettings />} text="Settings" />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
