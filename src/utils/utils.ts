import { cache } from "react";
import { type NavLink } from "~/app/components/layout/Navbar";
import { api } from "~/trpc/server";

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

export const getTheme = cache(async () => {
  const websiteData = await api.config.getConfig.query();
  if (!websiteData) return { theme: null, websiteData: null }
  const theme = await api.config.getTheme.query({
    name: websiteData.theme,
  });
  return { theme, websiteData };
});

export const getConfig = cache(async () => {
  const websiteData = await api.config.getConfig.query();
  if (!websiteData) return null;
  return websiteData;
});
