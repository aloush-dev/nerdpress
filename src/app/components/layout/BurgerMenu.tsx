"use client";

import { useState } from "react";
import { SignInButton } from "./SignInButton";
import { BurgerMenuLink } from "./BurgerMenuLink";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

type NavLink = {
  name: string;
  active: boolean;
};

const BurgerMenu = ({ navLinks }: { navLinks: NavLink[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center text-theme-text-primary transition-opacity duration-300">
        {isOpen ? (
          <button className="z-10" onClick={toggleMenu}>
            <CgClose className="text-4xl font-extrabold text-theme-text-primary" />
          </button>
        ) : (
          <button onClick={toggleMenu}>
            <HiMenu className="text-4xl" />
          </button>
        )}
      </div>

      <div
        className={`absolute right-0 top-0 flex min-h-screen w-6/12 transform justify-center bg-theme-burger py-4 pt-20 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex flex-col items-center space-y-4 text-xl font-bold">
            {navLinks.map((link) => {
              if (link.active) {
                return (
                  <BurgerMenuLink
                    key={link.name}
                    name={link.name}
                    toggleMenu={toggleMenu}
                  />
                );
              }
            })}
          </div>

          <div className="mt-20 flex justify-center">
            <SignInButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
