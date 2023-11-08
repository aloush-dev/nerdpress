"use client";

import React, { useState } from "react";
import { type NavLink } from "../layout/Navbar";

export function ToggleSwitch({
  link,
  changeHandler,
}: {
  link: NavLink;
  changeHandler: (link: NavLink) => void;
}) {
  const [isChecked, setIsChecked] = useState(link.active);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    changeHandler(link);
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`box block h-8 w-14 rounded-full ${
              isChecked ? "bg-green-400" : "bg-red-500"
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
              isChecked ? "translate-x-full" : ""
            }`}
          ></div>
        </div>
      </label>
    </>
  );
}
