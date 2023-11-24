import React from "react";

export default function TodayReport() {
  return (
    <div className="flex justify-between items-center rounded-md bg-gradient-to-r from-indigo-300 to-purple-400 min-w-[450px] py-2 px-4 text-white font-medium">
      {/* left side */}
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">Kolkata (IN)</h3>
        <div className="flex justify-between items-center">
          <p>11°C</p>
          <p>4°C</p>
        </div>
        <div className="flex justify-between items-center">
          {/* Sunrise */}
          <div>
            <p>Sunrise</p>
            <small>7:32 AM</small>
          </div>
          {/* sunset */}
          <div>
            <p>Sunset</p>
            <small>7:32 PM</small>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div>Icon</div>
    </div>
  );
}
