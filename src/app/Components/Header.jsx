"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import AboutDropdown from "./Header/AboutDropdown";
import { AppContext } from "../Context/AppContext";
import OurWorkDropdown from "./Header/OurWorkDropdown";

export default function Header() {
  const {
    aboutDropdown,
    setAboutDropdown,
    ourWorkDropdown,
    setOurWorkDropdown,
    open,
    setOpen,
  } = useContext(AppContext);
  const pathname = usePathname();

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
      name: "Our Work",
      navTo: "/our-work",
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

  const aboutNavs = [
    {
      name: "Our why",
      navTo: "/our-why",
    },
    {
      name: "The team",
      navTo: "/the-team",
    },
  ];

  const ourWorkNavs = [
    {
      name: "Access To Inclusive Healthcare",
      navTo: "/access-to-inclusive-healthcare",
    },
    {
      name: "Rights and Advocacy",
      navTo: "/rights-and-advocacy",
    },
    {
      name: "Socio-Economic Empowerment",
      navTo: "/socio-economic-empowerment",
    },
    {
      name: "Scholarships",
      navTo: "/scholarships",
    },
    {
      name: "STREAM Network",
      navTo: "/stream-network",
    },
  ];

  function handleClick(item) {
    if (item.name == "About Us") {
      setAboutDropdown(!aboutDropdown);
      setOurWorkDropdown(false);
    }
    if (item.name == "Our Work") {
      setOurWorkDropdown(!ourWorkDropdown);
      setAboutDropdown(false);
    }
  }
  return (
    <div className="bg-[#ffddeb] h-[100px] flex items-center justify-between shadow-lg px-[40px] text-[20px] w-full z-40 fixed top-0 left-0">
      {/* logo */}
      <Image
        src={"/pywv-logo.webp"}
        width={80}
        height={80}
        className="wobble"
        alt="PYWV Logo"
      />

      {/* links */}
      <div className="items-center gap-4 hidden lg:flex">
        {routes.map((item) => {
          const isActive = pathname === item.navTo;
          const linkStyles = isActive
            ? "font-black  text-myPurple"
            : "text-myPurple font-bold transition-font";

          return (
            <div key={item.name}>
              {item.name !== "About Us" && item.name !== "Our Work" ? (
                <Link
                  href={item.navTo}
                  className={`${linkStyles} font-bold text-[#00545f] custom-underline`}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  onClick={() => handleClick(item)}
                  href={item.navTo}
                  className={`${linkStyles} flex items-center custom-underline text-[#00545f] cursor-pointer`}
                >
                  {item.name}
                </button>
              )}

              {aboutDropdown && item.name === "About Us" && (
                <AboutDropdown
                  aboutDropdown={aboutDropdown}
                  setAboutDropdown={setAboutDropdown}
                  list={aboutNavs}
                />
              )}

              {ourWorkDropdown && item.name === "Our Work" && (
                <OurWorkDropdown
                  ourWorkDropdown={ourWorkDropdown}
                  setOurWorkDropdown={setOurWorkDropdown}
                  list={ourWorkNavs}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* socials */}
      <div className="hidden lg:flex items-center gap-2">
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
