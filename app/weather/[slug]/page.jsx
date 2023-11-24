import Hourly from "@/components/Hourly";
import TodayReport from "@/components/TodayReport";
import Weekly from "@/components/Weekly";
import React from "react";

export default function page() {
  return (
    <main className="my-12 mx-auto max-w-6xl px-2">
      <TodayReport />
      <Hourly />
      <Weekly />
    </main>
  );
}
