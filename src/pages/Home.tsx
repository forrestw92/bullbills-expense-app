import { BiTrendingDown, BiTrendingUp } from "react-icons/bi";
import { AxisOptions, Chart } from "react-charts";
import React, { useMemo } from "react";
type MyDatum = { date: Date; stars: number; color: string };

const Home = () => {
  const data = useMemo(
    () => [
      {
        label: "React Charts",
        data: [
          {
            date: new Date(),
            stars: 23467238,
            color: "red",
          },
          {
            date: new Date().setDate(1),
            stars: 564889,
            color: "green",
          },
        ],
      },
    ],
    []
  );
  const primaryAxis = useMemo(
    (): AxisOptions<MyDatum> => ({
      getValue: (datum) => datum.date,
    }),
    []
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<MyDatum>[] => [
      {
        getValue: (datum) => datum.stars,
      },
    ],
    []
  );

  const BarChart = () => (
    <Chart
      className="text-gray-400 bg-slate-900 rounded-md shadow-2xl  text-white dark:text-white fill-blue-700"
      style={{ color: "red" }}
      options={{
        data,
        primaryAxis,
        secondaryAxes,
        dark: true,
      }}
    />
  );
  //end of bar chart data

  return (
    <div className="flex flex-col w-full text-gray-400">
      <div className="grid grid-cols-3 grid-rows-4 gap-5">
        <div className="col-span-3 lg:col-span-1  bg-slate-800 rounded-md shadow-xl transition-all hover:scale-105">
          <div className="p-10 flex flex-col flex-nowrap h-full w-full ">
            <h1 className="text-gray-300 text-2xl">Hello John,</h1>
            <p className="text-gray-400">
              You have 13 Bills in the next 7 days
            </p>
            <button className="w-fit justify-end mt-auto bg-blue-700 hover:bg-blue-800 text-white shadow-md shadow-slate-900 font-bold py-2 px-4 rounded">
              View Bills
            </button>
          </div>
        </div>

        <div className="relative col-span-3 md:col-span-1 lg:col-span-1 bg-slate-800 rounded-md shadow-xl transition-all hover:scale-105">
          <BiTrendingUp className="text-green-300 h-16 w-16 w-fit justify-center   rounded m-auto mt-10" />
          <div className=" flex flex-col flex-nowrap h-full w-full pt-5 pb-10">
            <h1 className="text-gray-300 text-4xl text-center text-green-300 ">
              +$5032
            </h1>
            <p className="text-center pt-4 text-gray-500">Income</p>
          </div>
        </div>
        <div className="relative col-span-3 md:col-span-1 lg:col-span-1 bg-slate-800 rounded-md shadow-xl transition-all hover:scale-105">
          <BiTrendingDown className="text-red-300 h-16 w-16 w-fit justify-center   rounded m-auto mt-10" />
          <div className=" flex flex-col flex-nowrap h-full w-full pt-5 pb-10">
            <h1 className="text-gray-300 text-4xl text-center text-red-300 ">
              -$1600
            </h1>
            <p className="text-center pt-4 text-gray-500">Expenses</p>
          </div>
        </div>
        <div className="col-span-3 row-span-4 lg:col-span-2 lg:row-span-2  lg:h-auto bg-purple-900 rounded-md shadow-xl p-5 shadow-inner shadow-2xl shadow-slate-900">
          <div className=" h-full fill-blue-700">
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
