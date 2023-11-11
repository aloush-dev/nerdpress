"use client";

import { SignInButton } from "./SignInButton";
import { BurgerMenuLink } from "./BurgerMenuLink";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { AnimatePresence, motion, useCycle } from "framer-motion";

type NavLink = {
  name: string;
  active: boolean;
};

const BurgerMenu = ({ navLinks }: { navLinks: NavLink[] }) => {
  const [open, cycleOpen] = useCycle(false, true);

  const menuVariants = {
    closed: {
      width: 0,
    },
    open: {
      width: "60vw",
    },
  };

  const linkVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center text-theme-text-primary transition-opacity duration-300">
        {open ? (
          <button
            className="z-10"
            onClick={() => {
              cycleOpen();
            }}
          >
            <CgClose className="text-4xl font-extrabold text-theme-text-primary" />
          </button>
        ) : (
          <button
            onClick={() => {
              cycleOpen();
            }}
          >
            <HiMenu className="text-4xl" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute right-0 top-0 flex min-h-screen w-6/12 transform flex-col bg-theme-burger py-4 pt-20"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex flex-col items-center space-y-4 text-xl font-bold">
              {navLinks.map((link) => {
                if (link.active) {
                  return (
                    <motion.div key={link.name} variants={linkVariants}>
                      <BurgerMenuLink name={link.name} toggleMenu={cycleOpen} />
                    </motion.div>
                  );
                }
              })}
            </div>

            <motion.div
              variants={linkVariants}
              className="mt-20 flex justify-center"
            >
              <SignInButton />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerMenu;
