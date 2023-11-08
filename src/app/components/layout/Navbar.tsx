// import { signIn, useSession } from "next-auth/react";
import { NavBarLink } from "./NavBarLink";
import { SignInButton } from "./SignInButton";

export type NavLink = {
  id: number;
  name: string;
  active: boolean;
};

export function Navbar({ navLinks }: { navLinks: NavLink[] }) {
  return (
    <nav className="flex">
      <div className="flex items-center gap-4">
        {navLinks.map((link) => {
          if (link.active) {
            return <NavBarLink key={link.name} name={link.name} />;
          }
        })}
        <SignInButton />
      </div>
    </nav>
  );
}
