import { returnNotFound } from "~/utils/utils";
import NotFound from "../components/NotFound";
import { api } from "~/trpc/server";

export default async function ContactPage() {
  const navLinks = await api.config.getNavBarLinks.query();

  const found = returnNotFound("contact", navLinks);

  if (found) return <NotFound />;
  return <div className="flex flex-col items-center justify-center"></div>;
}
