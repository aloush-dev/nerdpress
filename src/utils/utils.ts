import { type NavLink } from "~/app/components/layout/Navbar";

export function slugify(title: string): string {
  title = title.trim();

  title = title.toLowerCase();

  title = title.replace(/\s+/g, "-");

  title = title.replace(/[^a-z0-9-]/g, "");

  return title;
}

export function returnNotFound(page: string, navLinks: NavLink[]) {
  return navLinks.find((link) => {
    return link.name === page && !link.active;
  });
}
