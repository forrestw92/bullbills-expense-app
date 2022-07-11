import React, { useState } from "react";
import {
  FiBarChart,
  FiDollarSign,
  FiEye,
  FiHome,
  FiSettings,
} from "react-icons/fi";
import Logo from "../images/logo.svg";
import NavDropDown from "./NavDropDown";
import NavItem from "./NavItem";
import { BiCreditCard } from "react-icons/bi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <aside
      className={`transition-all z-10 w-72 flex flex-col flex-nowrap h-auto bg-white dark:bg-gray-800 shadow-sm rounded h-full  w-0 min-w-0 hidden min-w-[18rem] md:flex md:w-72 `}
    >
      <div className="flex flex-row flex-nowrap items-center justify-center border-b-2 m-2 border-slate-900 w-72 min-w-full ">
        <img src={Logo} alt="logo" className="w-16 h-16" />
        <h1 className="pl-3 text-red-600 font-bold text-2xl">Bull Bills</h1>
      </div>
      <div
        className={`relative z-10 left-10 top-2 w-14 h-14 bg-slate-800 rounded-r-sm md:hidden flex items-center justify-center p-1 border border-slate-900`}
        onClick={handleClick}
      ></div>
      <nav className="px-4 w-72">
        <ul className="group flex flex-col flex-nowrap transition-all ">
          <NavItem to="/" Icon={FiHome} text="Home" />
          <NavDropDown to="/income" Icon={FiDollarSign} text="Income">
            <NavItem to={"/income/view"} Icon={FiEye} text={"View"} />
            <NavItem to={"/income/charts"} Icon={FiBarChart} text={"Charts"} />
          </NavDropDown>
          <NavDropDown to="/expenses" Icon={BiCreditCard} text="Expenses">
            <NavItem to={"/expenses/view"} Icon={FiEye} text={"View"} />
            <NavItem
              to={"/expenses/charts"}
              Icon={FiBarChart}
              text={"Charts"}
            />
          </NavDropDown>
          <NavItem to="/settings" Icon={FiSettings} text="Settings" />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
