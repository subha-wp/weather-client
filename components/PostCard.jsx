import Link from "next/link";
import React from "react";

export default function PostCard({ data }) {
  //   const { tittle, desc, coverImage, slug, publishedAt, category } = data;
  //   const coverImg = coverImage.data[0].attributes.url;
  const slug = "xyz";
  const tittle =
    "Another Storm to Form in the Bay of Bengal This Weekend, Just a Week After Cyclone Midhili’s Rampage!";
  const desc =
    "These consecutive storms can be attributed to the ongoing post-monsoon cyclone season in the North Indian Ocean.";
  const coverImg =
    "https://s.w-x.co/util/image/w/in-cyclone%20thumb.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60";
  return (
    <Link href={`/blogs/${slug}`} className="rounded-md norder p-2">
      <div
        className="bg-cover min-h-[150px] bg-no-repeat flex flex-col justify-end px-2 "
        style={{
          backgroundImage: `url('${coverImg}')`,
        }}
      ></div>
      <div>
        <h2 className="text-black font-semibold ">{tittle}</h2>
        <small className="line-clamp-3">{desc}</small>
      </div>
    </Link>
  );
}
