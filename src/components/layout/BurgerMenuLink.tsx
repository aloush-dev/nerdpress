"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BurgerMenuLinkProps {
  name: string;
  toggleMenu: () => void;
}

export function BurgerMenuLink({ name, toggleMenu }: BurgerMenuLinkProps) {
  const currentPage = usePathname();
  let thisPage = name;
  if (name === "home") {
    thisPage = "";
  }

  return (
    <Link
      className={`${currentPage === `/${thisPage}` ? "border-b-2" : ""}`}
      href={`/${thisPage}`}
      onClick={toggleMenu}
    >
      {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
    </Link>
  );
}
