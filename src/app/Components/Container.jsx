import React from "react";

export default function Container({ children, className }) {
  return <div className={`p-10 bg-white w-full ${className}`}>{children}</div>;
}
