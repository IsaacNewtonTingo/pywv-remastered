"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard";
import toast from "react-hot-toast";
import axios from "axios";

export default function NewsFeed() {
  const [blogs, set_blogs] = useState([]);
  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    try {
      const res = await axios.get(`/api/blog?limit=3`);
      if (res.data.status == "Success") {
        set_blogs(res.data.data);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("An error occured");
    }
  }
  return (
    <div className="px-6 lg:px-40 mt-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-bold">News feed</h2>
        <Link className="text-blue-400 underline" href={"/blog"}>
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {blogs?.map((item) => (
          <NewsCard item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}
