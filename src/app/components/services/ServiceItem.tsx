"use client";

import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { type Service } from "~/app/services/page";

export function ServiceItem({
  data,
  theme,
}: {
  data: Service;
  theme: Record<
    string,
    {
      hex: string;
    }
  >;
}) {
  const [open, setOpen] = useState(false);
  const [parent] = useAutoAnimate();

  return (
    <div
      ref={parent}
      className="m-4 flex cursor-pointer flex-col justify-center rounded-xl bg-theme-header p-4 md:mx-20"
      onClick={() => setOpen(!open)}
      style={{
        backgroundColor: theme.header?.hex,
        color: theme.headerText?.hex,
      }}
    >
      <div className="flex items-center justify-between">
        <div >
          <h3 className="text-2xl font-bold">{data.title.toUpperCase()}</h3>
          <h4 className="text-xl font-bold">£{data.price}</h4>
        </div>
        {open ? (
          <IoIosArrowDropup className="text-4xl" />
        ) : (
          <IoIosArrowDropdown className="text-4xl" />
        )}
      </div>
      {open && <p className="pt-4">{data.description}</p>}
    </div>
  );
}
