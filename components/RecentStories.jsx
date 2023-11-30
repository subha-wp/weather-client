import React from "react";
import PostCard from "./PostCard";

export default async function RecentStories({ blogs }) {
  return (
    <div>
      <h3 className="font-bold text-lg">Recent Stories</h3>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-4">
        {blogs.map((blog, idx) => {
          return (
            <div key={idx}>
              <PostCard blog={blog} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
