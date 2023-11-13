"use client";

import { api } from "~/trpc/react";
import { Input } from "../reuseable/Input";
import { BsArrowUpSquareFill, BsArrowDownSquareFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function ConfigPage({
  websiteData,
  customClassName,
  themeData
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
  customClassName: string;
  themeData: Record<
    string,
    {
      hex: string;
    }
  >;
}) {
  const updateWebsiteData = api.config.update.useMutation({
    onSuccess: () => {
      setButtonText("submitted!");
    },
    onError: () => {
      setButtonText("error!");
    },
  });


  const [websiteName, setWebsiteName] = useState(websiteData.websiteName);
  const [buttonText, setButtonText] = useState("submit");
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState<number>(window.innerWidth);
  
  const changeWebsiteName = () => {
    updateWebsiteData.mutate({
      websiteName: websiteName,
    });
  };
  
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
      style={{ overflow: "hidden", backgroundColor: themeData.cardBackground?.hex }}
      className={customClassName + " mx-4 rounded-lg p-4"}
    >
      <div className="flex flex-col justify-center">
        <div className="flex justify-between">
          <span className="text-lg font-bold">General Settings</span>

          <button
            onClick={toggleOpen}
            style={{ color: themeData.tertiaryAccent?.hex }}
            className="text-4xl md:hidden"
          >
            {open ? <BsArrowUpSquareFill /> : <BsArrowDownSquareFill />}
          </button>
        </div>

        {open ? (
          <div
            style={{
              backgroundColor: themeData.cardBackground?.hex,
            }}
            className="mx-4 rounded-lg p-4 md:h-full"
          >
            <span className="text-sm font-bold">Website Name</span>
            <div className="flex">
              <Input
                value={websiteName}
                onChange={(e) => {
                  setWebsiteName(e.target.value);
                }}
              />
            </div>

            <button
              style={{
                backgroundColor: themeData.tertiaryAccent?.hex,
                color: themeData.tertiaryText?.hex,
              }}
              className="my-2 w-fit rounded-lg p-2 font-bold"
              onClick={changeWebsiteName}
            >
              {buttonText}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
