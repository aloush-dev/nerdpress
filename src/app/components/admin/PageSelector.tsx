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
    <>
      <h3>Pages to Display</h3>
      {navBarLinks.data?.map((link) => {
        return (
          <div key={link.name} className="flex">
            {link.name}
            <ToggleSwitch link={link} changeHandler={submitNavBarChange} />
          </div>
        );
      })}
    </>
  );
}
