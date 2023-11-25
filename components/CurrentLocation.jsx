import React from "react";
import fetch from "node-fetch";
import Image from "next/image";
import { fetchLocation } from "@/lib/extras";
import { cookies } from "next/headers";
import SetCookie from "./SetCookie";

const fetchData = async (latitude, longitude) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7b395a56868b4896836a1eaf5862495a&units=metric`
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

export default async function CurrentLocation({ params, fullDetails }) {
  const tempLat = cookies().get("lat");
  const tempLon = cookies().get("lon");
  const latitude = tempLat === undefined ? "28.61282" : tempLat.value;
  const longitude = tempLon === undefined ? "77.23114" : tempLon.value;
  const currentLW = await fetchData(latitude, longitude);

  return (
    <div className="flex justify-center items-center w-full">
      <SetCookie />
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
