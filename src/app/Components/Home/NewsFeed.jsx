import Link from "next/link";
import React from "react";
import NewsCard from "../NewsCard";

export default function NewsFeed() {
  const news_data = [
    {
      id: 1,
      title: "The Elephant in The Room: Male Engagement in Feminist Spaces",
      image: "",
      preview:
        "A couple of weeks ago, I was privileged to attend the 2nd African Workshop on Women and HIV. The regional convening brought together local and international health care service providers, government stakeholders, researchers, industry, and community representatives,",
      created_at: "10/10/2024",
      user: {
        id: 1,
        first_name: "Jane",
        last_name: "Doe",
        profile_picture: "",
      },
    },
    {
      id: 2,
      title: "The Elephant in The Room: Male Engagement in Feminist Spaces",
      image: "",
      preview:
        "A couple of weeks ago, I was privileged to attend the 2nd African Workshop on Women and HIV. The regional convening brought together local and international health care service providers, government stakeholders, researchers, industry, and community representatives,",
      created_at: "10/10/2024",
      user: {
        id: 1,
        first_name: "Jane",
        last_name: "Doe",
        profile_picture: "",
      },
    },
    {
      id: 3,
      title: "The Elephant in The Room: Male Engagement in Feminist Spaces",
      image: "",
      preview:
        "A couple of weeks ago, I was privileged to attend the 2nd African Workshop on Women and HIV. The regional convening brought together local and international health care service providers, government stakeholders, researchers, industry, and community representatives,",
      created_at: "10/10/2024",
      user: {
        id: 1,
        first_name: "Jane",
        last_name: "Doe",
        profile_picture: "",
      },
    },
  ];
  return (
    <div className="px-6 lg:px-40 mt-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-bold">News feed</h2>
        <Link className="text-blue-400 underline" href={"/news-feed"}>
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {news_data.map((item) => (
          <NewsCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
