import { getTimeElapsed } from "@/lib/extras";
import Image from "next/image";
import React from "react";

const fetchImage = async (link) => {
  const res = await fetch(link);
  const data = await res.json();
  return data.source_url;
};

const fetchBlog = async (slug) => {
  console.log(slug);
  const res = await fetch(
    "https://sever.weather10days.com/wp-json/wp/v2/posts"
  );
  const data = await res.json();
  const post = data.filter((post, idx) => {
    return post.slug === slug;
  });
  const filteredPost = post[0];

  const modifiedTime = filteredPost.modified;
  const title = filteredPost.title.rendered;
  const content = filteredPost.content.rendered;
  const excerpt = filteredPost.excerpt.rendered;
  const imgLink = `https://sever.weather10days.com/wp-json/wp/v2/media/${filteredPost.featured_media}`;
  const img = await fetchImage(imgLink);
  console.log(img);

  return {
    title,
    content,
    modifiedTime,
    img,
  };
};

export default async function page({ params }) {
  const slug = params.slug;
  const blog = await fetchBlog(slug);

  const time = getTimeElapsed(blog.modifiedTime);

  const coverImg = blog.img;
  return (
    <div>
      <>
        <div className="md:flex md:space-x-12 p-2 md:p-4 mb-20 mx-auto max-w-6xl">
          <div className="md:max-w-[70%] space-y-3">
            <h1 className="text-2xl font-bold">{blog.title}</h1>
            <small className="bg-slate-100 rounded-md w-fit px-2">{time}</small>
            <Image
              src={coverImg}
              width={600}
              height={400}
              alt="rty"
              className="rounded-md w-full"
            />
            {/* Article body */}
            <div>
              <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            </div>
          </div>
          <div>
            <p className="font-semibold">Advertise</p>
          </div>
        </div>
      </>
    </div>
  );
}
