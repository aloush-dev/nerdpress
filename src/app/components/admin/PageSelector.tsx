"use client";

import { api } from "~/trpc/react";
import { ToggleSwitch } from "../reuseable/ToggleSwitch";
import { type NavLink } from "../layout/Navbar";
import { useEffect, useState } from "react";
import { BsArrowUpSquareFill, BsArrowDownSquareFill } from "react-icons/bs";

export function PageSelector({
  websiteData,
  customClassName,
  themeData
}: {
  websiteData?: {
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
  const { data: navBarLinks, isLoading } = api.config.getNavBarLinks.useQuery();
  const update = api.config.updateNavBarLink.useMutation();
  const [open, setOpen] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  const submitNavBarChange = (pageToUpdate: NavLink) => {
    update.mutate({ id: pageToUpdate.id, active: !pageToUpdate.active });
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

  if(isLoading) <p>loading....</p>
  if (!themeData) return null;

  return (
    <div
      style={{ backgroundColor: themeData.cardBackground?.hex }}
      className={customClassName + " mx-4 rounded-lg p-4 "}
    >
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">Active Pages</h3>
        {open ? (
          <button
            onClick={() => {
              setOpen((currentValue) => {
                return !currentValue;
              });
            }}
            style={{ color: themeData.tertiaryAccent?.hex }}
            className="text-4xl md:hidden"
          >
            <BsArrowUpSquareFill />
          </button>
        ) : (
          <button
            onClick={() => {
              setOpen((currentValue) => {
                return !currentValue;
              });
            }}
            style={{ color: themeData.tertiaryAccent?.hex }}
            className="text-4xl md:hidden"
          >
            <BsArrowDownSquareFill />
          </button>
        )}
      </div>

      {open ? (
        <>
          {navBarLinks?.map((link) => {
            return (
              <div
                key={link.name}
                className="m-2 flex items-center justify-between"
              >
                <div>{link.name}</div>
                <ToggleSwitch link={link} changeHandler={submitNavBarChange} />
              </div>
            );
          })}{" "}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
