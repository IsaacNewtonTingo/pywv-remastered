"use client";
import Container from "@/app/Components/Container";
import MyPage from "@/app/Components/MyPage";
import Title from "@/app/Components/Title";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import { marked } from "marked";
import toast from "react-hot-toast";
import axios from "axios";

export default function Page({ params }) {
  const [post, set_post] = useState(null);
  const { slug } = use(params);

  useEffect(() => {
    getPost();
  }, [slug]);

  async function getPost() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/blog?slug=${slug}`
      );
      if (response.data.status == "Success") {
        set_post(response.data.data[0]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occured while getting post");
    }
  }

  const html = marked(post?.content || "");
  return (
    <MyPage>
      <Container>
        <Title>{post?.title}</Title>
        <p className="text-orange-500">
          By: {post?.user_id?.first_name} {post?.user_id?.last_name} ~{" "}
          <span className="text-gray-500">
            {new Date(post?.createdAt).toLocaleDateString()}
          </span>
        </p>
        {post?.image && (
          <div className="relative w-full h-[500px] mt-10">
            <Image
              src={post?.image}
              alt={post?.title}
              fill
              className="bg-gray-300 object-contain"
            />
          </div>
        )}

        <div
          className="text-gray-700 ck-content mt-10"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </MyPage>
  );
}
