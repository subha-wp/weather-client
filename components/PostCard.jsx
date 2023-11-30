import { getTimeElapsed } from "@/lib/extras";
import Link from "next/link";
import React from "react";

const fetchImage = async (link) => {
  const res = await fetch(link, { cache: "no-store" });
  const data = await res.json();
  return data.source_url;
};

export default async function PostCard({ blog }) {
  const { slug, title, content, modified, excerpt, featured_media } = blog;

  const time = getTimeElapsed(modified);

  const featuredImgLink = `https://sever.weather10days.com/wp-json/wp/v2/media/${featured_media}`;

  const featuredImg = await fetchImage(featuredImgLink);
  const coverImg = featuredImg;
  return (
    <div className="rounded-md border p-1">
      <Link href={`/blogs/${slug}`} className="">
        <div
          className="bg-cover min-h-[150px] bg-no-repeat flex flex-col justify-end px-2 "
          style={{
            backgroundImage: `url('${coverImg}')`,
          }}
        ></div>
        <div>
          <h2 className="text-black font-semibold ">{title.rendered}</h2>
          {/* <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></div> */}
          <small className="bg-slate-50 rounded-md px-2">{time}</small>
        </div>
      </Link>
    </div>
  );
}
