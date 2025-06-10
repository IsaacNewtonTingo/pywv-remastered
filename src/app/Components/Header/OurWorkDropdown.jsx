"use client";
import { AppContext } from "@/app/Context/AppContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useRef } from "react";

export default function OurWorkDropdown({
  list,
  ourWorkDropdown,
  setOurWorkDropdown,
  className,
}) {
  const { setOpen } = useContext(AppContext);

  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (ourWorkDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ourWorkDropdown]);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOurWorkDropdown(false);
    }
  };
  return (
    <div
      // ref={dropdownRef}
      className={`bg-gray-50 shadow-lg absolute lg:top-20 p-4 flex flex-col gap-2 text-[18px] w-[300px] z-20 lg:w-[400px] ${className}`}
    >
      {list.map((item) => {
        const isActive = pathname === item.navTo;
        const linkStyles = isActive ? "font-black" : "";

        return (
          <Link
            key={item.name}
            onClick={() => {
              setOpen(false);
              setOurWorkDropdown(!ourWorkDropdown);
            }}
            href={item.navTo}
            className={`text-[#00545f] text-myPurple hover:font-black font-semibold transition-font ${linkStyles}`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
