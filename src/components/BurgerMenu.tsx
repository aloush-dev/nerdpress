import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const session = useSession();
  const user = session.data?.user;

  return (
    <div>
      <button onClick={toggleMenu}>
        <div className="mb-1 mt-1 h-1 w-8 rounded-md bg-theme-text-1"></div>
        <div className="mb-1 h-1 w-8 rounded-md bg-theme-text-1"></div>
        <div className="mt-1 h-1 w-8 rounded-md bg-theme-text-1"></div>
      </button>

      <div
        className={`absolute left-0 right-0 bg-theme-header py-4 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-2">
          <Link className="border-b-2" href={`/about`}>
            About Me
          </Link>

          <Link className="border-b-2" href={`/services`}>
            Services
          </Link>

          <Link className="border-b-2" href={`/faqs`}>
            FAQs
          </Link>

          <div className="border-b-2">
            {user != null ? (
              <button
                onClick={() => {
                  void signOut();
                }}
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => {
                  void signIn();
                }}
              >
                Sign in
              </button>
            )}
          </div>

          <div className="flex justify-end">Logged in as : {user?.email}</div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
