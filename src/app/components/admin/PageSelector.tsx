"use client";

import { api } from "~/trpc/react";
import { ToggleSwitch } from "../reuseable/ToggleSwitch";
import { type NavLink } from "../layout/Navbar";

export function PageSelector() {
  const navBarLinks = api.config.getNavBarLinks.useQuery();
  const update = api.config.updateNavBarLink.useMutation();

  if (!navBarLinks.data) return null;

  const submitNavBarChange = (pageToUpdate: NavLink) => {
    update.mutate({ id: pageToUpdate.id, active: !pageToUpdate.active });
  };

  return (
    <div className="w-full rounded-lg bg-white p-4">
      <h3 className="p-2 text-xl font-bold">Active Pages</h3>
      {navBarLinks.data?.map((link) => {
        return (
          <div
            key={link.name}
            className="m-2 flex items-center justify-between"
          >
            <div>{link.name}</div>
            <ToggleSwitch link={link} changeHandler={submitNavBarChange} />
          </div>
        );
      })}
    </div>
  );
}
