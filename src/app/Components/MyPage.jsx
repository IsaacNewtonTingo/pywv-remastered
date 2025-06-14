import React from "react";

export default function MyPage({
  children,
  className,
  padding_x = "px-6 lmd:px-[100px] lg:px-[400px]",
}) {
  return (
    <div
      className={`min-h-screen mt-[100px] w-full bg-gradient-to-b from-[#ffddeb]/10 to-[#830057] pb-40 ${padding_x} pt-10 flex flex-col items-center ${className}`}
    >
      {children}
    </div>
  );
}
