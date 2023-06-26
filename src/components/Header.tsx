import { Navbar } from "./Navbar";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";

export function Header() {
  return (
    <header
      className={`sticky top-0 z-10 flex items-center bg-theme-header p-4 text-theme-text-1`}
    >
      <Link className="flex-grow text-4xl font-black" href="/">
        <h1>Reconnect Reiki</h1>
      </Link>
      {/* <Navbar /> */}
      <div className="flex justify-end">
        <BurgerMenu />
      </div>
    </header>
  );
}
