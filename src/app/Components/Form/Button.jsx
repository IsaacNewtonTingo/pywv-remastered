import React from "react";

export default function Button({
  children,
  className,
  onClick,
  processing,
  disabled,
}) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`bg-gray-700 text-white rounded-lg h-[50px] cursor-pointer ${
        processing || disabled ? "opacity-30" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}
