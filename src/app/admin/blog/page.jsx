import Container from "@/app/Components/Container";
import MyPage from "@/app/Components/MyPage";
import NewsCard from "@/app/Components/NewsCard";
import Title from "@/app/Components/Title";
import Link from "next/link";
import React from "react";

export default async function Page() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/blog`);
  const posts = await data.json();
  return (
    <MyPage padding_x="lg:px-10 bg-white">
      <div className="w-full bg-white p-20">
        <div className="flex items-center justify-between">
          <div>
            <Title>ALL BLOG POSTS</Title>
            <p>Have a look at all the created blog posts</p>
          </div>
          <Link
            href={"/admin/blog/create-post"}
            className="font-bold text-blue-700 underline"
          >
            CREATE A NEW POST
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          {posts.data.map((item) => (
            <NewsCard item={item} key={item._id} />
          ))}
        </div>
      </div>
    </MyPage>
  );
}
