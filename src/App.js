import Sidebar from "./components/Sidebar";
import { FiDollarSign } from "react-icons/fi";

function App() {
  return (
    <div className="flex flex-nowrap h-full min-h-screen  bg-slate-900">
      <Sidebar />
      <main className="flex flex-row flex-wrap h-full w-full px-10 max-w-screen-xl mx-auto ">
        <div className="px-2 py-10 w-full md:w-2/5">
          <div className="flex flex-col text-center bg-slate-700 shadow-green-500 shadow-sm rounded-md py-4 border-t-8 border-t-green-700 text-green-600">
            <FiDollarSign className="text-green-600 m-auto text-6xl mb-4" />
            <p className=" text-4xl font-bold mx-7 mt-4">+$6200</p>
            <h1 className="pt-5 text-slate-400 uppercase">Income</h1>
          </div>
        </div>
        <div className="px-2 py-10 w-full md:w-2/5">
          <div className="flex flex-col text-center bg-slate-700 shadow-red-500 shadow-sm rounded-md py-4 border-t-8 border-t-red-700 text-red-600">
            <FiDollarSign className="text-red-600 m-auto text-6xl mb-4" />
            <p className=" text-4xl font-bold mx-7 mt-4">-$3200</p>
            <h1 className="pt-5 text-slate-400 uppercase">Expenses</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
