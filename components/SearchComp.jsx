"use client";

import React from "react";
import cities from "../lib/city.list.json";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SearchComp() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);
  const router = useRouter();

  const onChange = (e) => {
    const { value } = e.target;
    setQuery(value);

    let matchingCities = [];

    if (value.length > 3) {
      for (let city of cities) {
        if (matchingCities.length >= 5) {
          break;
        }

        const match = city.name.toLowerCase().startsWith(value.toLowerCase());

        if (match) {
          const cityData = {
            ...city,
            slug: `${city.name.toLowerCase().replace(/ /g, "-")}-${city.id}`,
          };

          matchingCities.push(cityData);
          continue;
        }
      }
    }

    return setResults(matchingCities);
  };

  const handleRoute = (slug) => {
    setQuery("");
    router.push(`/weather/${slug}`);
  };

  return (
    <div className=" flex justify-center items-center  h-[200px]">
      <div className="flex  bg-white px-2 rounded-md w-[90%] md:w-[70%] flex-col ">
        <form>
          <div className="flex items-center">
            <IoSearchOutline color="black" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none p-2 text-black"
              value={query}
              onChange={onChange}
            />
          </div>
        </form>
        <div className=" w-full">
          {query.length > 3 && (
            <ul className="">
              {results.length > 0 ? (
                results.map((city) => {
                  return (
                    <li
                      key={city.slug}
                      className="text-black border-b w-full py-2"
                    >
                      <div onClick={() => handleRoute(city.slug)}>
                        <p>
                          {city.name}
                          {city.state ? `, ${city.state}` : ""}{" "}
                          <span>({city.country})</span>
                        </p>
                      </div>
                    </li>
                  );
                })
              ) : (
                <li className="search__no-results">No results found</li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
