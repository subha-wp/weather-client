import React from "react";
import moment from "moment-timezone";
import Image from "next/image";

export default function TodayReport({ city, weather, timezone }) {
  // console.log("page", weather);
  return (
    <div className="flex justify-between items-center rounded-md bg-gradient-to-r from-indigo-300 to-purple-400 min-w-[80%] py-2 px-4 text-white font-medium">
      {/* left side */}
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">
          {city.name} ({city.country})
        </h3>
        <div className="flex justify-between items-center">
          <p>{weather.temp.max.toFixed(0)}&deg;C</p>
          <p>{weather.temp.min.toFixed(0)}&deg;C</p>
        </div>
        <div className="flex justify-between items-center">
          {/* Sunrise */}
          <div>
            <p>Sunrise</p>
            <small>
              {moment.unix(weather.sunrise).tz(timezone).format("LT")}
            </small>
          </div>
          {/* sunset */}
          <div>
            <p>Sunset</p>
            <small>
              {moment.unix(weather.sunset).tz(timezone).format("LT")}
            </small>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="rounded-md backdrop-blur-md p-2 bg-white bg-opacity-10 ">
        <Image
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Weather Icon"
          width={85}
          height={85}
        />
      </div>
    </div>
  );
}
