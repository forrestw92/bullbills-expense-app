import { Link } from "react-router-dom";
import { FiCircle } from "react-icons/fi";
import React from "react";
interface NavItemDropDownProps {
  to: string;
  text: string;
}
const NavItemDropDown = ({ to, text }: NavItemDropDownProps) => {
  return (
    <li className="px-4 py-4 ">
      <Link to={to} className="flex flex-row items-center">
        <FiCircle className="text-xs h-2 text-gray-400" />
        <span className="text-md pl-4 font-semibold text-gray-400">{text}</span>
      </Link>
    </li>
  );
};
export default NavItemDropDown;
