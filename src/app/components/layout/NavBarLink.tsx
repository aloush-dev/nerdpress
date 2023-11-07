"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBarLink({ name }: { name: string }) {
  const currentPage = usePathname();
  let thisPage = name;
  if (name === "home") {
    thisPage = "";
  }

  return (
    <Link
      className={`${currentPage === `/${thisPage}` ? "border-b-2" : ""}`}
      href={`/${thisPage}`}
    >
      {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
    </Link>
  );
}
