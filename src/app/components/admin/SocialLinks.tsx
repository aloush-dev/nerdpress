"use client";

import { useEffect, useState } from "react";
import { Input } from "../reuseable/Input";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { BsArrowUpSquareFill, BsArrowDownSquareFill } from "react-icons/bs";

export function SocialLinks({
  websiteData,
  themeData,
  customClassName,
}: {
  websiteData: {
    id: number;
    websiteName: string;
    websiteSubTitle: string;
    theme: string;
    instagramLink: string;
    facebookLink: string;
    footerLinks: boolean;
  };
  themeData: Record<
    string,
    {
      hex: string;
    }
  >;
  customClassName: string;
}) {
  const [facebookLink, setFacebookLink] = useState(websiteData.facebookLink);
  const [instagramLink, setInstagramLink] = useState(websiteData.instagramLink);
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  const toggleOpen = () => {
    setOpen(!open);
  };
    
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  
  useEffect(() => {
    if (width >= 768) setOpen(true);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [width]);
  
  if (!themeData) return null;

  return (
    <div
      style={{ backgroundColor: themeData.cardBackground?.hex }}
      className={customClassName + " mx-4 flex flex-col rounded-lg p-4"}
    >
      <div className="flex justify-between">
        <span className="text-lg font-bold">Social Links</span>

        <button
          onClick={toggleOpen}
          style={{ color: themeData.tertiaryAccent?.hex }}
          className="text-4xl md:hidden"
        >
          {open ? <BsArrowUpSquareFill /> : <BsArrowDownSquareFill />}
        </button>
      </div>

      {open ? (
        <>
          <div className="m-2 flex items-center justify-center">
            <FaFacebookSquare className=" m-2 text-4xl" />

            <Input
              value={facebookLink}
              onChange={(e) => {
                setFacebookLink(e.target.value);
              }}
            />
          </div>

          <div className="m-2 flex items-center justify-center">
            <FaInstagram className=" m-2 text-4xl" />
            <Input
              value={instagramLink}
              onChange={(e) => {
                setInstagramLink(e.target.value);
              }}
            />
          </div>

          <button
            style={{
              backgroundColor: themeData.tertiaryAccent?.hex,
              color: themeData.tertiaryText?.hex,
            }}
            className="m-2 w-fit rounded-lg p-2 font-bold"
          >
            Save
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
