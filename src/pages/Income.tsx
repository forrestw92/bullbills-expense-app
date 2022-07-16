import React from "react";
import Table from "../components/Table";
const range = (len: number): Array<number> => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const randomString = (len: number): string => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = len; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

const newBill = (): object => {
  const statusChance = Math.random();

  //random status
  function randomDate(start: Date, end: Date) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  return {
    name: randomString(6), //random string generator
    checkNumber: Math.floor(Math.random() * 4) + 1,
    dueDate: randomDate(
      new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDay() + 31
      ),
      new Date()
    ).toDateString(),
    status:
      statusChance > 0.66 ? "unpaid" : statusChance > 0.33 ? "paid" : "overdue",
    link: "https://www.google.com",
  };
};

function makeData(...lens: any): Array<object> {
  const makeDataLevel = (depth = 0): any => {
    const len = lens[depth];
    return range(len).map(() => {
      return {
        ...newBill(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}

const Income = () => {
  const data = React.useMemo(() => makeData(20), []);
  return (
    <div className="w-full">
      <Table data={data} />
    </div>
  );
};
export default Income;
