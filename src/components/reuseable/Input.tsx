import React from "react";

export function Input({
  value,
  placeholder = "",
  onChange,
  type = "",
  customClass = "",
}: {
  value?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  customClass?: string;
}) {
  return (
    <>
      <input
        className={`border-2 bg-white  p-4 text-lg focus:border-theme-accent focus:outline-none ${customClass}`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
}
