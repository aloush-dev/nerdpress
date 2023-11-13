import { Navbar } from "./Navbar";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import { Pacifico } from "next/font/google";
import { api } from "~/trpc/server";
import { getTheme } from "~/utils/utils";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export async function Header() {
  // const websiteData = await api.config.getConfig.query();
  const navLinks = await api.config.getNavBarLinks.query();
  // if(!websiteData) return null
  // const theme = await api.config.getTheme.query({ name: websiteData.theme });

  const { theme, websiteData } = await getTheme();

  if (!theme || !websiteData) return null;

  return (
    <header
      style={{
        backgroundColor: theme.header?.hex,
        color: theme.headerText?.hex,
      }}
      className={`sticky top-0 z-10 flex h-header p-4 `}
    >
      <div className="mx-auto flex w-full items-center justify-between px-4 ">
        <div>
          <Link className="text-4xl font-black" href="/">
            <h1 className={pacifico.className}>{websiteData?.websiteName}</h1>
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
