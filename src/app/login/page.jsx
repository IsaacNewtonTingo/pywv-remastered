"use client";
import React, { useContext, useState } from "react";
import MyPage from "../Components/MyPage";
import Container from "../Components/Container";
import Title from "../Components/Title";
import Label from "../Components/Form/Label";
import TextInput from "../Components/Form/TextInput";
import Button from "../Components/Form/Button";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import secureLocalStorage from "react-secure-storage";
import { useRouter } from "next/navigation";
import { AppContext } from "../Context/AppContext";

export default function Login() {
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [processing, set_processing] = useState(false);
  const router = useRouter();
  const { setUserData } = useContext(AppContext);

  async function login(e) {
    try {
      e.preventDefault();
      set_processing(true);
      const url = "/api/user/login";
      const data = {
        email,
        password,
      };
      const response = await axios.post(url, data);
      if (response.data.status == "Success") {
        toast.success(response.data.message);
        secureLocalStorage.setItem("userData", response.data.data);
        setUserData(response.data.data);
        router.push("/admin/blog");
      } else {
        toast.error(response.data.message);
      }
      set_processing(false);
    } catch (error) {
      set_processing(false);
      toast.error("An error occured");
    }
  }
  return (
    <MyPage>
      <Container>
        <Toaster />
        <form onSubmit={login}>
          <Title className={"mb-4"}>Login to your Account</Title>
          <Label>Email*</Label>
          <TextInput
            required={true}
            placeholder={"e.g john.doe@email.com"}
            value={email}
            onChange={(e) => set_email(e.target.value)}
            className={"my-4 w-full"}
          />

          <Label>Password*</Label>
          <TextInput
            required={true}
            placeholder={"********"}
            value={password}
            onChange={(e) => set_password(e.target.value)}
            className={"my-4 w-full"}
            type={"password"}
          />
          <Button onClick={login} processing={processing} className={"w-full"}>
            Login
          </Button>
        </form>
      </Container>
    </MyPage>
  );
}
