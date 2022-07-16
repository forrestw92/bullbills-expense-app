import React, { useState } from "react";
import { FiCheck, FiMoreVertical } from "react-icons/fi";
import { Listbox } from "@headlessui/react";
function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
const checkData = [
  {
    id: 0,
    name: "Week 1",
    checkDate: randomDate(new Date(2020, 0, 1), new Date()),
    amount: 1000,
  },
  {
    id: 1,
    name: "Week 2",
    checkDate: randomDate(new Date(2020, 0, 1), new Date()),
    amount: 1000,
  },
  {
    id: 2,
    name: "Week 3",
    checkDate: randomDate(new Date(2020, 0, 1), new Date()),
    amount: 1000,
  },
  {
    id: 3,
    name: "Week 4",
    checkDate: randomDate(new Date(2020, 0, 1), new Date()),
    amount: 1000,
  },
  {
    id: 4,
    name: "Monthly",
    checkDate: randomDate(new Date(2020, 0, 1), new Date()),
    amount: 3000,
  },
];
const SelectCheckMenu = () => {
  const [selectedIncome, setSelectedIncome] = useState(checkData[0]);
  return (
    <Listbox value={selectedIncome} onChange={setSelectedIncome}>
      <Listbox.Button className="w-full h-full bg-slate-800 rounded-md py-2 flex items-center min-w-[12rem]">
        <FiCheck className="ml-4 text-purple-500 text-xl" />
        <span className="ml-6">{selectedIncome.name}</span>
      </Listbox.Button>
      <Listbox.Options className=" absolute z-10 my-2 rounded-md w-full shadow-lg ">
        {checkData.map((check, id) => (
          <Listbox.Option
            key={check.id}
            value={check}
            disabled={selectedIncome.id === check.id}
            tabIndex={-1}
            className={`${
              id === 0
                ? "rounded-t-md"
                : id === checkData.length - 1
                ? "rounded-b-md"
                : ""
            } h-16 w-full flex flex-row flex-wrap text-gray-300`}
          >
            {({ active, selected }) => (
              <div
                className={`${active ? "bg-slate-700" : "bg-slate-800"} ${
                  !active && selected && "bg-purple-900"
                }
                ${
                  id === 0 && "rounded-t-md"
                } flex flex-row flex-wrap w-full py-2 px-4 hover:bg-slate-700 min-w-[10rem]`}
              >
                <p className="w-1/2">{check.name}</p>
                <div className={`text-center w-1/2  text-green-500`}>
                  {(check.amount - Math.random() * 100 - 100).toLocaleString(
                    "en-US",
                    {
                      style: "currency",
                      currency: "USD",
                    }
                  )}
                </div>
                <div className="w-1/2">
                  <span className="text-sm text-blue-400">
                    {check.checkDate.toLocaleDateString()}
                  </span>
                </div>
              </div>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

const Table = ({ data }: any) => {
  return (
    <div>
      <table className="table-auto w-full ">
        <thead className="bg-slate-800">
          <tr className="text-white">
            <th className="px-4 py-2 rounded-l-md">Name</th>
            <th className="px-4 py-2">Due Date</th>
            <th className="px-4 py-2">From Account</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2 text-left">Link</th>
            <th className="px-4 py-2 rounded-r-md text-gray-400 text-center">
              More
            </th>
          </tr>
        </thead>
        <tbody className="bg-slate-900 shadow-xl">
          {data.map(
            (
              row: {
                name: string;
                dueDate: string;
                checkNumber: number;
                status: string;
                link: string;
              },
              idx: number
            ) => {
              return (
                <tr className="text-gray-400 p-5" key={idx}>
                  <td className="px-4 py-4">{row.name}</td>
                  <td className="px-4 py-2">{row.dueDate}</td>
                  <td className="py-2 relative">
                    <SelectCheckMenu />
                  </td>
                  <td className="px-4 py-2 flex">
                    <span
                      className={`px-4 py-2 w-full text-center   ${
                        row.status === "paid"
                          ? "text-blue-800"
                          : row.status === "unpaid"
                          ? "text-slate-700"
                          : "text-red-600 underline"
                      }`}
                    >
                      {row.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-4 py-2">{row.link}</td>
                  <td className="px-4 py-4">
                    <FiMoreVertical className="mx-auto transition-all hover:text-blue-500 hover:scale-125 hover:cursor-pointer text-xl rounded-xl w-6 h-6" />
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
