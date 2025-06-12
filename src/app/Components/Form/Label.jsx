import React from "react";

export default function Label({ children, className }) {
  return <p className={`font-bold ${className}`}>{children}</p>;
}
