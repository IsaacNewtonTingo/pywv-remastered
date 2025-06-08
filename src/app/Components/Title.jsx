import React from "react";

export default function Title({ children, className }) {
  return <h1 className={`font-black text-[40px] ${className}`}>{children}</h1>;
}
