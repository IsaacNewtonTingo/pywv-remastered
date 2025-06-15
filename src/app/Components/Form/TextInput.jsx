import React from "react";

export default function TextInput({
  value,
  onChange,
  className,
  type,
  placeholder,
  required,
  maxLength,
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`h-[50px] rounded-lg border px-4 ${className}`}
      placeholder={placeholder}
      required={required}
      maxLength={maxLength}
    />
  );
}
