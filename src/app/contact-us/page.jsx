"use client";
import React, { useState } from "react";
import MyPage from "../Components/MyPage";
import Container from "../Components/Container";
import Title from "../Components/Title";
import Image from "next/image";
import Link from "next/link";
import Label from "../Components/Form/Label";
import TextInput from "../Components/Form/TextInput";
import Button from "../Components/Form/Button";

export default function Page() {
  const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const [phone_number, set_phone_number] = useState("");
  const [message, set_message] = useState("");
  const [processing, set_processing] = useState("");
  const contacts = [
    {
      image: "/callLogo.png",
      name: "Call us",
      value: "+254705973115",
      href: "tel:+254705973115",
    },
    {
      image: "/smsLogo.png",
      name: "Text",
      value: "+254705973115",
      href: "sms:+254705973115",
    },
    {
      image: "/gmailLogo.png",
      name: "Email",
      value: "info@pywv.org",
      href: "mailto:info@pywv.org",
    },
  ];

  async function submit(e) {
    e.preventDefault();
  }
  return (
    <MyPage>
      <Container>
        <div className="grid gird-cols-1 lg:grid-cols-2 p-6 gap-10">
          <div className="bg-gray-800 p-10 rounded-lg">
            <Title className="text-white">Get in touch</Title>
            <hr className="mt-10 text-gray-700" />

            <div className="mt-10 flex flex-col gap-2">
              {contacts.map((item) => (
                <div className="flex items-center gap-2" key={item.name}>
                  <Image
                    src={item.image}
                    width={40}
                    height={50}
                    alt={item.name}
                  />
                  <p className="text-gray-400">{item.name}:</p>
                  <Link
                    href={item.href}
                    target="_blank"
                    className="underline text-white"
                  >
                    {item.value}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={submit}>
            <Label>Name:</Label>
            <TextInput
              placeholder={"e.g John Doe"}
              className={"w-full my-4"}
              value={name}
              onChange={(e) => set_name(e.target.value)}
              required={true}
            />

            <Label>Email:</Label>
            <TextInput
              placeholder={"e.g john.doe@gmail.com"}
              className={"w-full my-4"}
              value={email}
              onChange={(e) => set_email(e.target.value)}
              required
            />

            <Label>Phone Number:</Label>
            <TextInput
              placeholder={"e.g +254755664422"}
              className={"w-full my-4"}
              value={phone_number}
              onChange={(e) => set_phone_number(e.target.value)}
              required
            />

            <Label>Message:</Label>
            <textarea
              className="h-[100px] rounded-lg border px-4 w-full mt-4"
              value={message}
              onChange={(e) => set_message(e.target.value)}
              required
              placeholder="Your message here"
            ></textarea>

            <Button
              onClick={submit}
              className={`w-full`}
              processing={processing}
            >
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </MyPage>
  );
}
