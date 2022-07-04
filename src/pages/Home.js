import React from "react";
import { FiDollarSign } from "react-icons/fi";

const Home = () => {
  return (
    <div className="flex flex-col py-10 w-full lg:flex-row">
      <div className="px-2 py-5 lg:py-0 w-full">
        <div className="flex flex-col text-center bg-slate-700 shadow-green-500 shadow-sm rounded-md py-4 border-t-8 border-t-green-700 text-green-600">
          <FiDollarSign className="text-green-600 m-auto text-6xl mb-4" />
          <p className=" text-4xl font-bold mx-7 mt-4">+$6200</p>
          <h1 className="pt-5 text-slate-400 uppercase">Income</h1>
        </div>
      </div>
      <div className="px-2 py-5 lg:py-0 w-full">
        <div className="flex flex-col text-center bg-slate-700 shadow-red-500 shadow-sm rounded-md py-4 border-t-8 border-t-red-700 text-red-600">
          <FiDollarSign className="text-red-600 m-auto text-6xl mb-4" />
          <p className=" text-4xl font-bold mx-7 mt-4">-$3200</p>
          <h1 className="pt-5 text-slate-400 uppercase">Expenses</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
