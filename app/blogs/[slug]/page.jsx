import Image from "next/image";
import React from "react";

const body = "<p>Post content</p>";
export default function page() {
  const coverImg =
    "https://s.w-x.co/util/image/w/in-cyclone%20thumb.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60";
  return (
    <div>
      <>
        <div className="md:flex space-x-12  p-2 md:p-4 mb-20 mx-auto max-w-6xl">
          <div className="max-w-[70%] space-y-3">
            <h2 className="text-2xl font-bold">
              Another Storm to Form in the Bay of Bengal This Weekend&#39; Just
              a Week After Cyclone Midhili&apos;s Rampage!
            </h2>
            <p className="bg-slate-100 rounded-md w-fit px-2">4 hours ago</p>
            <Image
              src={coverImg}
              width={600}
              height={400}
              alt="rty"
              className="rounded-md w-full"
            />
            {/* Article body */}
            <div>
              <div dangerouslySetInnerHTML={{ __html: body }}></div>
            </div>
          </div>
          <div>
            <p>Advertise</p>
          </div>
        </div>
      </>
    </div>
  );
}
