import React from "react";
import moment from "moment-timezone";
import Image from "next/image";

export default function Weekly({ weeklyWeather, timezone }) {
  return (
    <div className="my-10">
      <h3 className="text-2xl font-semibold text-slate-500">Weekly Forecast</h3>
      <div className="space-y-3">
        {weeklyWeather.length > 0 &&
          weeklyWeather.map((weather, index) => {
            if (index == 0) {
              return;
            }
            return (
              <div
                className="flex items-center justify-between py-4 px-2 md:px-6 text-white p-1 bg-gradient-to-r from-sky-400 to-cyan-300 rounded-md"
                key={weather.dt}
              >
                <div className="flex justify-between w-[65%] md:w-[30%]">
                  <div className="space-y-2">
                    <h3 className="texl-lg md:text-xl font-bold">
                      {moment.unix(weather.dt).tz(timezone).format("dddd")}
                    </h3>
                    <div className="flex justify-between items-center space-x-1">
                      <p>{weather.temp.max.toFixed(0)}&deg;C</p>
                      <p>{weather.temp.min.toFixed(0)}&deg;C</p>
                    </div>
                  </div>
                  <div className="flex justify-between w-[120px] items-center">
                    {/* Sunrise */}
                    <div>
                      <p className="font-semibold">Sunrise</p>
                      <small>
                        {moment.unix(weather.sunrise).tz(timezone).format("LT")}
                      </small>
                    </div>
                    {/* sunset */}
                    <div>
                      <p className="font-semibold">Sunset</p>
                      <small>
                        {moment.unix(weather.sunset).tz(timezone).format("LT")}
                      </small>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col min-w-[100px] md:min-w-[120px] items-center rounded-md backdrop-blur-md p-2 bg-white bg-opacity-10 ">
                  <Image
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                    width={75}
                    height={75}
                  />
                  <small>{weather.weather[0].description}</small>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
