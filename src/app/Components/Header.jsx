import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  const routes = [
    {
      name: "Home",
      navTo: "/",
    },
    {
      name: "About Us",
      navTo: "/about-us",
    },
    {
      name: "Contact Us",
      navTo: "/contact-us",
    },
    {
      name: "Resources",
      navTo: "/resources",
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
  return (
    <div className="bg-[#ffddeb] h-[100px] flex items-center justify-between shadow-lg px-[40px] text-[24px]">
      {/* logo */}
      <Image
        src={"/pywv-logo.webp"}
        width={80}
        height={80}
        className=""
        alt="PYWV Logo"
      />

      {/* links */}
      <div className="flex items-center gap-4">
        {routes.map((item) => {
          return (
            <Link
              key={item.name}
              href={item.navTo}
              className="font-bold text-[#00545f]"
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* socials */}
      <div className="flex items-center gap-2">
        <button className="w-[100px] text-[14px] h-[40px] rounded-[20px] border border-[1px] border-white shadow-lg bg-[#ad0074] text-white font-bold ">
          Donate
        </button>

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
    </div>
  );
}
