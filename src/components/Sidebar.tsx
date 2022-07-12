import React from "react";
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

interface SidebarProps {
  isOpen: boolean;
}
const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <aside
      className={`transition-all absolute lg:relative shadow-2xl shadow-slate-900 border-2 rounded-md border-slate-800 z-10 h-full flex w-auto dark:bg-slate-800 w-[16rem]  ${
        !isOpen ? "translate-x-[-18rem] lg:translate-x-0" : "translate-x-0"
      }`}
    >
      <div
        className={`transition-all duration-1000  flex-col flex-nowrap flex z-10  flex-col flex-nowrap h-auto shadow-sm rounded h-full w-[16rem]  transition-all ${
          !isOpen && "hidden"
        } lg:flex`}
      >
        <div className="flex flex-row flex-nowrap items-center justify-center mt-2 mb-8 h-16 align-middle">
          <img src={Logo} alt="logo" className="w-16 h-16" />
          <h1 className="pl-3 text-red-600 font-bold text-2xl">Bull Bills</h1>
        </div>
        <nav className="px-4 w-auto">
          <ul className="group flex flex-col flex-nowrap transition-all ">
            <NavItem to="/" Icon={FiHome} text="Home" />
            <NavDropDown to="/income" Icon={FiDollarSign} text="Income">
              <NavItem to={"/income/view"} Icon={FiEye} text={"View"} />
              <NavItem
                to={"/income/charts"}
                Icon={FiBarChart}
                text={"Charts"}
              />
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
      </div>
    </aside>
  );
};

export default Sidebar;
