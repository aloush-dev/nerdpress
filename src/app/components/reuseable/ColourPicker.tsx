"use client";

import { type Dispatch, type SetStateAction, useState } from "react";
import { HexColorPicker } from "react-colorful";

type ColourPickerProps = {
  label?: string;
  colour: string;
  setColour: Dispatch<SetStateAction<string>>;
};

export function ColourPicker({ label, colour, setColour }: ColourPickerProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <label>
        {label}
        <input
          value={colour}
          onChange={() => {
            setOpen((current) => {
              return !current;
            });
          }}
          onClick={() => {
            setOpen((current) => {
              return !current;
            });
          }}
        />
      </label>
      {open ? <HexColorPicker color={colour} onChange={setColour} /> : ""}
    </div>
  );
}
