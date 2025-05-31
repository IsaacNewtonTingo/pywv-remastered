import React from "react";

export default function MyPage({ children }) {
  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-[#ffddeb]/10 to-[#830057] px-6 pb-40 xl:px-[400px] pt-10 flex flex-col items-center`}
    >
      {children}
    </div>
  );
}
