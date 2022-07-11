import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

interface NavDropDownProps {
  to: string;
  text: string;
  Icon: React.ElementType;
  children: React.ReactNode;
}
const NavDropDown = ({ to, text, Icon, children }: NavDropDownProps) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = location.pathname.includes(to);
  return (
    <li className={`cursor-pointer`}>
      <Link
        to={to}
        className={`${
          isActive
            ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white shadow-lg "
            : "text-gray-500 dark:text-gray-400"
        }  transition-colors hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 flex flex-row flex-nowrap items-center py-2 px-3 w-full h-full align-middle hover:shadow-md font-semibold text-gray-500  dark:text-gray-400  border-none my-2 rounded-md border-2  dark:border-slate-700 hover:border-slate-500 hover:text-gray-700  dark:hover:border-slate-400 dark:hover:text-gray-300`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon className="text-2xl before:bg-blue-900 before:w-36 before:h-36 before:left-0 before:absolute " />
        <span className="pl-5 py-1.5 text-md">{text}</span>
        {isOpen ? (
          <FiChevronDown className="text-md ml-auto" />
        ) : (
          <FiChevronRight className="text-md ml-auto" />
        )}
      </Link>
      <ul
        className={`${
          isOpen ? "scale-y-100 max-h-80" : "scale-y-0 max-h-0"
        }  ml-4 pr-4 origin-top transition-all  bg-gray-800 rounded-md mt-2 w-full h-fit`}
      >
        {children}
      </ul>
    </li>
  );
};
export default NavDropDown;
