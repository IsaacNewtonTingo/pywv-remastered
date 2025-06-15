import Link from "next/link";
import React from "react";
import NewsCard from "../NewsCard";

export default async function NewsFeed() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/blog?limit=3`
  );
  const response = await data.json();
  const posts = response.data;
  return (
    <div className="px-6 lg:px-40 mt-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-bold">News feed</h2>
        <Link className="text-blue-400 underline" href={"/blog"}>
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {posts?.map((item) => (
          <NewsCard item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}
