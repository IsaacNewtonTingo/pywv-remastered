import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const contacts = [
    {
      name: "Phone",
      text: "+254705973115",
      link: "tel:254705973115",
    },
    {
      name: "Email",
      text: "info@pywv.org",
      link: "mailto:info@pywv.org",
    },
    {
      name: "Web",
      text: "pywv.org",
      link: "https://pywv.org",
    },
  ];

  const socials = [
    {
      name: "Instagram",
      imageLink: "/instagram-logo.png",
    },
    {
      name: "Twitter",
      imageLink: "/twitter-logo.png",
    },
    {
      name: "facebook",
      imageLink: "/facebook-logo.png",
    },
  ];

  const quick_links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Our Why",
      link: "/our-why",
    },
    {
      name: "Access to inclusive healthcare",
      link: "/access-to-inclusive-healthcare",
    },
    {
      name: "Rights and advocacy",
      link: "/rights-and-advocacy",
    },
    {
      name: "Socio-economic empowerment",
      link: "/socio-economic-empowerment",
    },
    {
      name: "Scholarships",
      link: "/scholarships",
    },
    {
      name: "Flourish toolbox",
      link: "/flourish-toolbox",
    },
    {
      name: "PYWV 2022-2026 strategic plan",
      link: "/",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Login",
      link: "/login",
    },
  ];
  return (
    <div className="bg-[#303030] text-[20px] p-10 lg:p-40 grid grid-cols-1 lg:grid-cols-2">
      <div>
        <h2 className="font-bold mb-10 text-[24px] text-[#a0ffef]">
          Contact Us
        </h2>

        <div className="flex flex-col text-white">
          {contacts.map((item) => (
            <Link
              href={item.link}
              key={item.link}
              className={`hover:text-orange-500`}
            >
              {item.text}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-20">
          {socials.map((item) => (
            <Link key={item.name} href={item.imageLink}>
              <Image
                src={item.imageLink}
                width={40}
                height={40}
                className=""
                alt={item.name}
              />
            </Link>
          ))}
        </div>

        <button className="w-[200px] mt-10 text-[14px] h-[40px] rounded-[20px] border-[1px] border-white shadow-lg bg-[#ad0074] text-white font-bold ">
          Donate
        </button>
      </div>

      <div>
        <h2 className="font-bold mb-10 text-[24px] text-[#a0ffef]">
          Quick Links
        </h2>

        <div className="flex flex-col text-gray-300">
          {quick_links.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className={`hover:text-orange-500`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
