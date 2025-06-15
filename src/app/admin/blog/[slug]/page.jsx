"use client";
import Container from "@/app/Components/Container";
import MyPage from "@/app/Components/MyPage";
import Title from "@/app/Components/Title";
import { AppContext } from "@/app/Context/AppContext";
import Image from "next/image";
import React, { use, useContext, useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Button from "@/app/Components/Form/Button";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Label from "@/app/Components/Form/Label";
import TextInput from "@/app/Components/Form/TextInput";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const ClientSideCustomEditor = dynamic(
  () => import("@/app/Components/Admin/MyCKEditor"),
  { ssr: false }
);

export default function Page({ params }) {
  const { slug } = use(params);
  const [post, setPost] = useState(null);
  const { userData } = useContext(AppContext);
  const [title, setTitle] = useState(post?.title || "");
  const [preview, setPreview] = useState(post?.preview || "");
  const [content, setContent] = useState(post?.content || "");
  const [image, setImage] = useState(post?.image || "");

  const router = useRouter();

  const [uploadingImage, setUploadingImage] = useState(false);
  const [processing, setProcessing] = useState(false);

  const fileTypes = ["jpg", "png", "jpeg", "webp"];

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/blog?slug=${slug}`);
        const json = await res.json();
        const foundPost = json.data?.[0];
        setPost(foundPost);
        setTitle(foundPost?.title || "");
        setPreview(foundPost?.preview || "");
        setContent(foundPost?.content || "");
        setImage(foundPost?.image || "");
      } catch (error) {
        console.error("Failed to load blog post", error);
      }
    }

    fetchPost();
  }, [slug]);

  const handleChange = async (file) => {
    try {
      setImage("");
      const url = `/api/file-upload`;
      setUploadingImage(true);

      const data = new FormData();
      data.append("file", file);

      const response = await axios.post(url, data);
      setUploadingImage(false);
      if (response.data.uploaded) {
        setImage(response.data.url);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      setUploadingImage(false);
      toast.error("An error occured");
    }
  };

  async function updatePost(e) {
    try {
      e.preventDefault();
      setProcessing(true);
      const data = {
        user_id: userData._id,
        _id: post._id,
        title,
        content,
        image,
        preview,
      };
      const response = await axios.put(`/api/blog`, data);
      setProcessing(false);
      if (response.data.status === "Success") {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      setProcessing(false);
      toast.error("An error occured");
    }
  }

  async function delete_post() {
    try {
      const url = `/api/blog?user_id=${userData._id}&_id=${post._id}`;
      const response = await axios.delete(url);
      if (response.data.status == "Success") {
        toast.success(response.data.message);
        router.push("/admin/blog");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occured while deleting post");
    }
  }
  return (
    <MyPage padding_x="lg:px-10 bg-white">
      <Toaster />
      <Container>
        <div className="mb-10 flex items-center justify-between">
          <Title className={""}>UPDATE BLOG POST</Title>
          <button
            className="text-red-600 underline font-bold cursor-pointer"
            onClick={delete_post}
          >
            Delete Post
          </button>
        </div>

        <FileUploader
          multiple={false}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        >
          <div className="flex items-center justify-center w-full">
            <button
              disabled={uploadingImage}
              className="px-2 flex flex-col items-center justify-center min-h-[300px] w-full border-2 border-gray-300 border-dashed rounded-sm cursor-pointer bg-white hover:bg-purple-50 overflow-auto"
            >
              {image ? (
                <img src={image} alt="" className="object-cover" />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-10 h-10 text-gray-400"
                  >
                    <path d="M.002 3a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2h-12a2 2 0 01-2-2V3zm1 9v1a1 1 0 001 1h12a1 1 0 001-1V9.5l-3.777-1.947a.5.5 0 00-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 00-.63.062L1.002 12zm5-6.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                  </svg>

                  {uploadingImage ? (
                    <p className="text-gray-400 text-sm mt-4">
                      Processing image...
                    </p>
                  ) : (
                    <p className="text-gray-400 text-sm mt-4">
                      Click to add an image or drag and drop
                    </p>
                  )}
                </div>
              )}
            </button>
          </div>
        </FileUploader>

        <Label className={"mt-4"}>Post Title*</Label>
        <TextInput
          className={"w-full my-4"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required={true}
          placeholder={"Your title here"}
          maxLength={160}
        />

        <Label>Post Preview*</Label>
        <TextInput
          className={"w-full my-4"}
          value={preview}
          onChange={(e) => setPreview(e.target.value)}
          required={true}
          placeholder={"Your preview here"}
          maxLength={160}
        />

        <Label className="mb-4">Content*</Label>
        <ClientSideCustomEditor
          description={content}
          set_description={setContent}
        />

        <Button
          processing={processing || uploadingImage}
          onClick={updatePost}
          className={"w-full mt-4"}
        >
          Update Post
        </Button>
      </Container>
    </MyPage>
  );
}
