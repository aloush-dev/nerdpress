// import { signIn, useSession } from "next-auth/react";
import { NavBarLink } from "./NavBarLink";
import { SignInButton } from "./SignInButton";

type NavLink = {
  name: string;
  value: number | boolean;
};

export function Navbar({ navLinks }: { navLinks: NavLink[] }) {
  return (
    <nav className="flex">
      <div className="flex items-center gap-4">
        {navLinks.map((link) => {
          if (link.value) {
            return <NavBarLink key={link.name} name={link.name} />;
          }
        })}
        <SignInButton />
      </div>
    </nav>
  );
}
