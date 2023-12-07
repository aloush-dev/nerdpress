"use client";

import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { type Faq } from "~/app/faqs/page";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

export function FaqItem({ data }: { data: Faq }) {
  const [open, setOpen] = useState(false);
  const [parent] = useAutoAnimate();

  return (
    <div
      ref={parent}
      className="m-4 flex cursor-pointer flex-col justify-center rounded-xl bg-theme-header p-4 md:mx-20"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold" onClick={() => setOpen(!open)}>
          {data.question}
        </h3>
        {open ? (
          <IoIosArrowDropup className="text-4xl" />
        ) : (
          <IoIosArrowDropdown className="text-4xl" />
        )}
      </div>
      {open && <p className="pt-4">{data.answer}</p>}
    </div>
  );
}
