import React from "react";
import { FiBell, FiMenu } from "react-icons/fi";
import { BiCreditCard, BiTrendingDown, BiTrendingUp } from "react-icons/bi";
import Search from "./Search";

const Notifications = () => {
  return (
    <button type="button" id="notification-menu" className="relative p-3">
      <FiBell className="w-full h-7 text-gray-500" aria-hidden="true" />
      <span className="absolute top-0 animate-bounce right-1.5 rounded-full bg-red-500 w-5 h-5  flex items-center justify-center font-bold text-white text-xs">
        <span aria-label="Notifications" className="text-xs">
          9+
        </span>
      </span>
    </button>
  );
};

const AccountAvatar = () => {
  return (
    <img
      src={"https://i.pravatar.cc/300"}
      alt="profile pic"
      className="p-1 w-16 h-16 rounded-full shadow-lg border-2 border-slate-400 dark:border-slate-700"
    />
  );
};
const AccountInfo = () => {
  return (
    <div className="flex flex-col flex-nowrap text-center p-3">
      <p className="text-sm font-bold text-gray-800 dark:text-gray-400">
        John Doe
      </p>
      <p className="text-xs font-bold text-gray-800 dark:text-gray-400">
        Admin
      </p>
    </div>
  );
};
const HeaderStatsInfo = () => {
  return (
    <div className="flex flex-row items-center align-middle items-center h-16 gap-5">
      <div className="flex flex-row">
        <BiTrendingUp className="text-2xl text-green-600" />
        <span className="text-gray-400 ml-2 text-green-600">$5032</span>
      </div>
      <div className="flex flex-row">
        <BiTrendingDown className="text-2xl text-red-600" />
        <span className="text-gray-400 ml-2 text-red-600">-$1600</span>
      </div>
      <div className="flex flex-row">
        <BiCreditCard className="text-2xl text-purple-600" />
        <span className="text-gray-400 ml-2 text-purple-600">9</span>
      </div>
    </div>
  );
};
interface HeaderProps {
  openSidebar: Function;
}
const Header = ({ openSidebar }: HeaderProps) => {
  return (
    <div className="h-20 w-auto bg-white dark:bg-gray-800 shadow-md rounded flex flex-row px-8 align-middle items-center">
      <div className="w-1/3 ">
        <div className="hidden lg:block">
          <HeaderStatsInfo />
        </div>
        <div className="block lg:hidden">
          <button
            type="button"
            className="relative p-3"
            onClick={() => openSidebar()}
          >
            <FiMenu className="w-full h-7 text-red-500" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="hidden w-1/2 md:block lg:w-1/3">
        <Search />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <div className="w-full h-full flex items-center justify-end h-16 ml-auto">
          <Notifications />
          <AccountInfo />
          <div className="w-4 text-gray-600">|</div>
          <AccountAvatar />
        </div>
      </div>
    </div>
  );
};
export default Header;
