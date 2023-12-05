import { getTimeElapsed } from "@/lib/extras";
import Image from "next/image";
import React from "react";
import xml2js from "xml2js";

async function fetchNews() {
  const res = await fetch(
    "https://moxie.foxweather.com/google-publisher/weather-news.xml"
  );
  const xml = await res.text();
  const json = await new xml2js.Parser().parseStringPromise(xml);
  // console.log(json.rss.channel[0].item);
  const newsData = json.rss.channel[0].item;
  return newsData;
}

export default async function WeatherFeed() {
  const news = await fetchNews();
  return (
    <div>
      <h3>Feed From Fox Weather</h3>
      <div className="flex w-6xl overflow-x-auto space-x-2">
        {news.slice(0, 10).map((news, idx) => {
          // console.log(news);
          const tempTime = news.pubDate[0];
          const time = getTimeElapsed(tempTime);
          const image = news["media:content"][0];
          const imageUrl = image["$"].url;
          return (
            <div
              key={idx}
              className="border-2 rounded-md p-1 w-[305px]  my-2 flex flex-col"
            >
              <div className="relative">
                <Image
                  src={imageUrl}
                  width={300}
                  height={168}
                  className="self-center"
                  alt={`weather 10 days - ${news.title[0]}`}
                />
                <small className="absolute text-[9px] p-1 font-semibold text-white bg-red-500 rounded-md top-1 left-1">
                  Weather News
                </small>
              </div>
              <small className="px-1 bg-slate-100 font-semibold my-1 w-fit">
                {time}
              </small>
              <h4 className="w-[300px] text-lg font-bold">{news.title[0]}</h4>
              <p className="font-medium text-[16px]">{news.description[0]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
