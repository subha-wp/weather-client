import React from "react";
import moment from "moment-timezone";
import Image from "next/image";

export default function Hourly({ hourlyWeather, timezone }) {
  return (
    <div className="my-10">
      <h3 className="text-2xl font-semibold text-slate-500">Hourly Forecast</h3>
      <div className=" flex max-w-6xl overflow-x-auto">
        {hourlyWeather.length > 0 &&
          hourlyWeather.map((weather, index) => {
            return (
              <div
                className=" text-white p-1 bg-gradient-to-b from-sky-400 to-sky-200 mr-2  flex flex-col items-center justify-between rounded-md"
                key={weather.dt}
              >
                <div className="w-[150px]  h-[200px] flex flex-col items-center justify-between py-4">
                  <p className="font-semibold text-xl">
                    {index == 0
                      ? "Now"
                      : moment.unix(weather.dt).tz(timezone).format("LT")}
                  </p>
                  <div className="rounded-md backdrop-blur-md p-2 bg-white bg-opacity-10 ">
                    <Image
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt={weather.weather[0].description}
                      width={85}
                      height={85}
                    />
                  </div>
                  <p>{weather.temp.toFixed(0)}&deg;C</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
