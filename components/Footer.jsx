import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="py-10 border-t ">
      <div className="px-2 mx-auto  max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <div className="p-1 rounded-md border border-r-4 border-b-4 w-fit">
              <Link href="/">
                <h3 className="uppercase font-bold">weather 10 days</h3>
              </Link>
            </div>

            <p className="text-base leading-relaxed text-gray-600 mt-7 md:max-w-[350px]">
              <span className="font-semibold">Weather10Days.com</span>
              Your quick and reliable source for 10-day weather forecasts. Stay
              informed on temperature, precipitation, and wind speed to plan
              your week effortlessly.
            </p>
          </div>

          <div className="mt-2 md:mt-0">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Help
            </p>

            <ul className="mt-2 space-y-4">
              <li>
                <Link
                  href="/privacy-policy"
                  title=""
                  className="hover:font-semibold text-[16px]"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-and-conditions"
                  title=""
                  className="hover:font-semibold text-[16px]"
                >
                  {" "}
                  Terms & Conditions{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600 ">
          © Copyright {year} , All Rights Reserved by{" "}
          <span className="font-semibold">
            {" "}
            <Link href="/">Weather10Days.com</Link>
          </span>
        </p>
      </div>
    </footer>
  );
}
