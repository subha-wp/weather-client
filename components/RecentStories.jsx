import React from "react";
import PostCard from "./PostCard";

const fetchBlogs = async () => {
  const res = await fetch(
    "https://sever.weather10days.com/wp-json/wp/v2/posts"
  );
  const data = await res.json();
  const slug = data.slug;
  const modifiedTime = data.modified;
  // const title = data.title.rendered;
  // const content = data.content.rendered;
  // const excerpt = data.excerpt.rendered;

  return data;
};

export default async function RecentStories() {
  const blogs = await fetchBlogs();

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
