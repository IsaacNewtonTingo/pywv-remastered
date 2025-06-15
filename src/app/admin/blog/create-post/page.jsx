"use client";
import Container from "@/app/Components/Container";
import Label from "@/app/Components/Form/Label";
import TextInput from "@/app/Components/Form/TextInput";
import MyPage from "@/app/Components/MyPage";
import Title from "@/app/Components/Title";
import React, { useContext, useState } from "react";
import dynamic from "next/dynamic";
import { AppContext } from "@/app/Context/AppContext";
import Button from "@/app/Components/Form/Button";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { FileUploader } from "react-drag-drop-files";

const ClientSideCustomEditor = dynamic(
  () => import("@/app/Components/Admin/MyCKEditor"),
  { ssr: false }
);

export default function Page() {
  const { userData } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const [uploadingImage, setUploadingImage] = useState(false);
  const [processing, setProcessing] = useState(false);

  const fileTypes = ["jpg", "png", "jpeg", "webp"];

  const handleChange = async (file) => {
    try {
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

  async function createPost(e) {
    try {
      e.preventDefault();
      setProcessing(true);
      const data = {
        user_id: userData._id,
        title,
        content,
        image,
        preview,
      };
      const response = await axios.post(`/api/blog`, data);
      setProcessing(false);
      if (response.data.status === "Success") {
        toast.success(response.data.message);
        setImage("");
        setTitle("");
        setContent("");
        setPreview("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      setProcessing(false);
      toast.error("An error occured");
    }
  }
  return (
    <MyPage className={""} padding_x="lg:px-20">
      <Toaster />
      <Container className="w-full mt-[100px]">
        <form onSubmit={createPost}>
          <Title className="mb-4">CREATE A BLOG POST</Title>
          <Label className={"mb-4"}>Display image</Label>
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
            onClick={createPost}
            className={"w-full mt-4"}
          >
            Create Post
          </Button>
        </form>
      </Container>
    </MyPage>
  );
}
