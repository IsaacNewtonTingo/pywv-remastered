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

  function toggleMenu() {
    setOpen(!open);
  }
  return (
    <div className="bg-[#ffddeb] h-[100px] flex items-center justify-between shadow-lg px-6 lg:px-[40px] text-[20px] w-full z-40 fixed top-0 left-0">
      {/* logo */}
      <Link href={"/"}>
        <Image
          src={"/pywv-logo.webp"}
          width={80}
          height={80}
          className="wobble"
          alt="PYWV Logo"
        />
      </Link>

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
        <button className="w-[100px] text-[14px] h-[40px] rounded-[20px] border-[1px] border-white shadow-lg bg-[#ad0074] text-white font-bold ">
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

      {!open ? (
        <>
          <svg
            onClick={toggleMenu}
            fill="none"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            className="text-[40px] lg:hidden text-myPurple"
          >
            <path
              fill="currentColor"
              d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM4 18a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM11 11a1 1 0 100 2h8a1 1 0 100-2h-8z"
            />
          </svg>
        </>
      ) : (
        <>
          <svg
            onClick={toggleMenu}
            fill="none"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            className="text-[40px] lg:hidden text-myPurple"
          >
            <path
              fill="currentColor"
              d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
            />
          </svg>

          <div className="fixed top-[100px] left-0 right-0 z-80 w-full bg-[rgba(0,0,0,0.6)] h-screen flex justify-center">
            <div className="w-full p-6 gap-4 bg-gray-100 h-screen">
              <div className="flex flex-col gap-6">
                {routes.map((item) => {
                  const isActive = pathname === item.navTo;
                  const linkStyles = isActive
                    ? "font-black text-myPurple"
                    : "text-myPurple font-semibold hover:font-bold transition-font ";

                  return (
                    <div key={item.name}>
                      {item.name !== "About Us" && item.name !== "Our Work" ? (
                        <Link
                          href={item.navTo}
                          className={`${linkStyles}`}
                          onClick={() => {
                            toggleMenu();
                          }}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <p
                          onClick={() => handleClick(item)}
                          href={item.navTo}
                          className={`${linkStyles} flex items-center custom-underline`}
                        >
                          {item.name}
                        </p>
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
            </div>
          </div>
        </>
      )}
    </div>
  );
}
