import React from "react";
import { Tweet } from "react-tweet";

export default async function TwitterBox({ posts }) {
  return (
    <div>
      <h3>Recent Tweets</h3>
      <div className="overflow-x-auto w-6xl flex items-start space-x-3">
        {posts.map((post, idx) => {
          //   console.log(post);
          const id = post.title.rendered;
          return (
            <div key={idx} className="w-[350px]">
              <Tweet id={id} />
            </div>
          );
        })}
      </div>
      <div className="md:hidden space-y-3">
        {posts.map((post, idx) => {
          //   console.log(post);
          const id = post.title.rendered;
          return (
            <div key={idx} className="w-[350px]">
              <Tweet id={id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
