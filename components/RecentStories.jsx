import React from "react";
import PostCard from "./PostCard";

export default function RecentStories() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <h3 className="font-bold text-lg">Recent Stories</h3>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-4">
        {data.map((item, idx) => {
          return (
            <div key={idx}>
              <PostCard />
            </div>
          );
        })}
      </div>
    </div>
  );
}
