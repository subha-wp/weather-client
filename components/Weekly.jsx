import React from "react";
import { CiCloudDrizzle } from "react-icons/ci";

export default function Weekly() {
  const weekly = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="my-10">
      <h3 className="text-2xl font-semibold text-slate-500">Weekly Forecast</h3>
      <div className="space-y-3">
        {weekly.map((item, idx) => {
          return (
            <div
              className="flex justify-between py-4 px-2 md:px-6 text-white p-1 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-md"
              key={idx}
            >
              <div className="flex justify-between w-[70%] md:w-[30%]">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Sunday</h3>
                  <div className="flex justify-between items-center">
                    <p>11°C</p>
                    <p>4°C</p>
                  </div>
                </div>
                <div className="flex justify-between w-[150px] items-center">
                  {/* Sunrise */}
                  <div>
                    <p className="font-semibold">Sunrise</p>
                    <small>7:32 AM</small>
                  </div>
                  {/* sunset */}
                  <div>
                    <p className="font-semibold">Sunset</p>
                    <small>7:32 PM</small>
                  </div>
                </div>
              </div>
              <div>
                <CiCloudDrizzle size={55} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
