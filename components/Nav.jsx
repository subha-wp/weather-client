import Link from "next/link";
import React from "react";
import { BsGlobeAmericas } from "react-icons/bs";

export default function Nav() {
  return (
    <header className="py-4 flex justify-between items-center mx-auto max-w-6xl">
      {/* logo */}
      <div className="p-1 rounded-md border border-r-4 border-b-4 border-white">
        <Link href="/">
          <h3 className="uppercase font-bold">weather 10 days</h3>
        </Link>
      </div>
      <div className="flex space-x-2 items-center">
        <BsGlobeAmericas size={24} />
        <p className="font-semibold">||</p>
        <p className=" text-xl">IN</p>
      </div>
    </header>
  );
}
