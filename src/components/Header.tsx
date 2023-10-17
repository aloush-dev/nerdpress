import { Navbar } from "./Navbar";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import { useRouter } from "next/router";
import { Pacifico } from "next/font/google";
import WebsiteConfig from "../WebsiteConfig";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export function Header() {
  const router = useRouter();
  const currentPage = router.pathname.split("/")[1] ?? "";
  return (
    <header
      className={`sticky top-0 z-10 flex bg-theme-header p-4 text-theme-text-primary `}
    >
      <div className="mx-auto flex w-full items-center justify-between px-4 md:max-w-4xl">
        <div>
          <Link className="text-4xl font-black" href="/">
            <h1 className={pacifico.className}>{WebsiteConfig.siteName}</h1>
          </Link>
        </div>

        <div className="flex">
          <div className="hidden md:block">
            <Navbar currentPage={currentPage} />
          </div>
          <div className="md:hidden">
            <BurgerMenu currentPage={currentPage} />
          </div>
        </div>
      </div>
    </header>
  );
}
