import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Income from "./pages/Income";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="flex flex-row flex-nowrap h-full w-full py-1.5 px-1.5 gap-3 overflow-x-hidden">
      <Sidebar isOpen={sidebarOpen} />
      <div
        className={` transition-all  flex flex-col w-full h-full mx-auto max-w-screen-xl ${
          sidebarOpen ? "translate-x-[17rem]" : "translate-x-[0rem]"
        } lg:translate-x-0`}
      >
        <Header openSidebar={toggleSidebar} />
        <div className="m-3 p-3 rounded h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/income" element={<Income />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default App;
