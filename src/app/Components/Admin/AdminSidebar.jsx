"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function AdminSidebar() {
  const pathname = usePathname();

  const navList = [
    // {
    //   name: "Dashboard",
    //   route: "/admin",
    //   icon: (
    //     <svg
    //       viewBox="0 0 24 24"
    //       fill="currentColor"
    //       height="1em"
    //       width="1em"
    //       className=""
    //     >
    //       <path d="M13 20v-5h-2v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-7.59l-.3.3a1 1 0 11-1.4-1.42l9-9a1 1 0 011.4 0l9 9a1 1 0 01-1.4 1.42l-.3-.3V20a2 2 0 01-2 2h-3a2 2 0 01-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 012 2v5h3z" />
    //     </svg>
    //   ),
    // },
    {
      name: "Blog",
      route: "/admin/blog",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
          <path d="M21 6a1 1 0 00-1 1v10a3 3 0 01-3 3H7a1 1 0 000 2h10a5 5 0 005-5V7a1 1 0 00-1-1zm-3 9V5a3 3 0 00-3-3H5a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3zM10 4h2v4.86l-.36-.3a1 1 0 00-1.28 0l-.36.3zM4 15V5a1 1 0 011-1h3v7a1 1 0 001.65.76L11 10.63l1.35 1.13A1 1 0 0013 12a1.06 1.06 0 00.42-.09A1 1 0 0014 11V4h1a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1z" />
        </svg>
      ),
    },
    // {
    //   name: "Users",
    //   route: "/admin/users",
    //   icon: (
    //     <svg viewBox="0 0 21 21" fill="currentColor" height="1em" width="1em">
    //       <g
    //         fill="none"
    //         fillRule="evenodd"
    //         stroke="currentColor"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       >
    //         <path d="M8.5 2.5a3 3 0 013 3v2a3 3 0 11-6 0v-2a3 3 0 013-3zm7 14v-.728c0-3.187-3.686-5.272-7-5.272s-7 2.085-7 5.272v.728a1 1 0 001 1h12a1 1 0 001-1z" />
    //         <path
    //           fill="currentColor"
    //           d="M12.52 2.678A3.001 3.001 0 0114.5 5.5v1c0 1.297-.848 2.581-2 3 .674-.919 1.01-2.086 1.01-3.5s-.331-2.523-.99-3.322zM17.5 17.5h1a1 1 0 001-1v-.728c0-2.17-1.71-3.83-3.847-4.667 0 0 2.847 2.395 1.847 6.395z"
    //         />
    //       </g>
    //     </svg>
    //   ),
    // },
    // {
    //   name: "Profile",
    //   route: "/admin/profile",
    //   icon: (
    //     <svg viewBox="0 0 21 21" fill="currentColor" height="1em" width="1em">
    //       <g
    //         fill="none"
    //         fillRule="evenodd"
    //         stroke="currentColor"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       >
    //         <path d="M8.5 2.5a3 3 0 013 3v2a3 3 0 11-6 0v-2a3 3 0 013-3zm7 14v-.728c0-3.187-3.686-5.272-7-5.272s-7 2.085-7 5.272v.728a1 1 0 001 1h12a1 1 0 001-1z" />
    //         <path
    //           fill="currentColor"
    //           d="M12.52 2.678A3.001 3.001 0 0114.5 5.5v1c0 1.297-.848 2.581-2 3 .674-.919 1.01-2.086 1.01-3.5s-.331-2.523-.99-3.322zM17.5 17.5h1a1 1 0 001-1v-.728c0-2.17-1.71-3.83-3.847-4.667 0 0 2.847 2.395 1.847 6.395z"
    //         />
    //       </g>
    //     </svg>
    //   ),
    // },
  ];
  return (
    <div className="bg-gray-800 w-[20%] flex flex-col">
      <div className="sticky top-[130px]">
        {navList.map((item) => {
          const isActive =
            pathname === item.route ||
            (pathname === "/admin/blog/create-post" &&
              item.route === "/admin/blog");

          const linkStyles = isActive
            ? "text-white font-bold bg-gray-700 rounded-r-lg border-r-4 border-r-white"
            : "text-gray-400 hover:bg-gray-800 hover:text-gray-100 hover:border-r-4 border-r-gray-700";
          return (
            <Link
              href={item.route}
              key={item.name}
              className={`flex items-center h-[50px] gap-4 text-[14px] px-4 ${linkStyles}`}
            >
              {item.icon} {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
