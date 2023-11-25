import Hourly from "@/components/Hourly";
import TodayReport from "@/components/TodayReport";
import Weekly from "@/components/Weekly";
import React from "react";
import cities from "../../../lib/city.list.json";
import moment from "moment-timezone";

const fetchData = async (city) => {
  if (!city) {
    return {
      notFound: true,
    };
  }
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=2df78e30ce5a459e8dfe10a71dfdb97e&exclude=minutely&units=metric`
  );

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const getHourlyWeather = (hourlyData, timezone) => {
    const endOfDay = moment().tz(timezone).endOf("day").valueOf();
    const eodTimeStamp = Math.floor(endOfDay / 1000);

    const todaysData = hourlyData.filter((data) => data.dt < eodTimeStamp);

    return todaysData;
  };

  const hourlyWeather = getHourlyWeather(data.hourly, data.timezone);

  const weeklyWeather = data.daily;

  return {
    props: {
      city: city,
      timezone: data.timezone,
      currentWeather: data.current,
      hourlyWeather: hourlyWeather,
      weeklyWeather: weeklyWeather,
    }, // will be passed to the page component as props
  };
};

export default async function page({ params }) {
  const getCityId = (param) => {
    const cityParam = param.trim();
    // get the id of the city
    const splitCity = cityParam.split("-");
    const id = splitCity[splitCity.length - 1];

    if (!id) {
      return null;
    }

    const city = cities.find((city) => city.id.toString() == id);

    if (city) {
      return city;
    } else {
      return null;
    }
  };
  const cityName = getCityId(params.city);

  const data = await fetchData(cityName);

  const { city, timezone, currentWeather, hourlyWeather, weeklyWeather } =
    data.props;

  return (
    <main className="my-12 mx-auto max-w-6xl px-2">
      <TodayReport city={city} weather={weeklyWeather[0]} timezone={timezone} />
      <Hourly hourlyWeather={hourlyWeather} timezone={timezone} />
      <Weekly weeklyWeather={weeklyWeather} timezone={timezone} />
    </main>
  );
}
