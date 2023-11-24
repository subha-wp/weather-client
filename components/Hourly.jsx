import React from "react";
import { CiCloudDrizzle } from "react-icons/ci";

export default function Hourly() {
  const hourly = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="my-10">
      <h3 className="text-2xl font-semibold text-slate-500">Hourly Forecast</h3>
      <div className=" flex max-w-6xl overflow-x-auto">
        {hourly.map((item, idx) => {
          return (
            <div
              className=" text-white p-1 bg-gradient-to-b from-sky-400 to-sky-200 mr-2  flex flex-col items-center justify-between rounded-md"
              key={idx}
            >
              <div className="w-[150px]  h-[200px] flex flex-col items-center justify-between py-4">
                <p className="font-semibold text-xl">Now</p>
                <CiCloudDrizzle size={55} />
                <p>9°C</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
