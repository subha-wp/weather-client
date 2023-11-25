import React from "react";
import fetch from "node-fetch";
import Image from "next/image";
import moment from "moment-timezone";
import { fetchLocation } from "@/lib/extras";

const fetchData = async (latLon) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.latitude}&lon=${latLon.longitude}&appid=7b395a56868b4896836a1eaf5862495a&units=metric`
  );

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    city: data.name,
    timezone: data.timezone,
    country: data.sys.country,
    weather: data.weather[0],
    temp: data.main.temp,
    realFeel: data.main.feels_like,
  };
};

export default async function CurrentLocation({ fullDetails }) {
  const latLon = await fetchLocation();
  const currentLW = await fetchData(latLon);
  // console.log(currentLW);
  return (
    <div className="flex justify-center items-center w-full">
      {!fullDetails && (
        <div className="flex items-center">
          <p>{currentLW.city}</p>
          <p>-</p>
          <p> {currentLW.country}</p>
        </div>
      )}

      {fullDetails && (
        <div className="flex items-center justify-between min-w-[90%] md:min-w-[70%] rounded-md backdrop-blur-0 p-2 bg-black bg-opacity-25">
          <div className="md:text-xl font-semibold flex items-center space-x-1">
            <p>{currentLW.city}</p>
            <p>({currentLW.country})</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={`https://openweathermap.org/img/wn/${currentLW.weather.icon}@2x.png`}
              alt="img"
              className="invert -mt-4"
              width={70}
              height={50}
            />
            <small className="-mt-4">{currentLW.weather.main}</small>
          </div>
          <div>
            <p>
              <span className="md:text-2xl font-semibold">
                {currentLW.temp.toFixed(0)}&deg;
              </span>
              <small className="text-slate-100">C</small>
            </p>
            <small>Temp</small>
          </div>
          <div>
            <p>
              <span className="md:text-2xl font-semibold">
                {currentLW.realFeel.toFixed(0)}&deg;
              </span>
              <small>C</small>
            </p>
            <small>Feels</small>
          </div>
        </div>
      )}
    </div>
  );
}
