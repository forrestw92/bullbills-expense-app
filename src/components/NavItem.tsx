import { Link, useLocation } from "react-router-dom";
import React from "react";

interface NavItemProps {
  to: string;
  Icon: React.ElementType;
  text: string;
}
const NavItem = ({ to, Icon, text }: NavItemProps) => {
  const isActive = useLocation().pathname === to;
  return (
    <li className={`cursor-pointer `}>
      <Link
        to={to}
        className={`${
          isActive
            ? "bg-gradient-to-r from-blue-900 to-blue-800 shadow dark:shadow-md"
            : ""
        } flex flex-row flex-nowrap items-center py-2 px-3 w-full h-full align-middle hover:shadow-md  hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-800 font-semibold text-gray-500  dark:text-gray-400  border-none my-2 rounded-md border-2  dark:border-slate-700 hover:border-slate-500 hover:text-gray-700  dark:hover:border-slate-400 dark:hover:text-gray-300`}
      >
        <Icon className="text-2xl before:bg-blue-900 before:w-36 before:h-36 before:left-0 before:absolute " />
        <span className="pl-5 py-1.5 text-md">{text}</span>
      </Link>
    </li>
  );
};
export default NavItem;
