import { Navbar } from "./Navbar";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import { Pacifico } from "next/font/google";
import { api } from "~/trpc/server";

export const dynamic = "force-dynamic"

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export async function Header() {
  const websiteData = await api.config.getConfig.query();
  const navLinks = await api.config.getNavBarLinks.query();

  if (!websiteData) return null;

  return (
    <header
      className={`sticky top-0 z-10 flex bg-theme-header p-4 text-theme-text-primary `}
    >
      <div className="mx-auto flex w-full items-center justify-between px-4 md:max-w-4xl">
        <div>
          <Link className="text-4xl font-black" href="/">
            <h1 className={pacifico.className}>{websiteData.websiteName}</h1>
          </Link>
        </div>

        <div className="flex">
          <div className="hidden md:block">
            <Navbar navLinks={navLinks} />
          </div>
          <div className="md:hidden">
            <BurgerMenu navLinks={navLinks} />
          </div>
        </div>
      </div>
    </header>
  );
}
