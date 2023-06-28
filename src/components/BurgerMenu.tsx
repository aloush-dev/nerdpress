import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const BurgerMenu = ({ currentPage }: { currentPage: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const session = useSession();
  const user = session.data?.user;

  return (
    <div>
      {isOpen ? (
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      ) : (
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}

      <div
        className={`absolute left-0 right-0 top-16 bg-theme-header py-4 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          <Link
            className={`${currentPage === "about" ? "border-b-2" : ""}`}
            onClick={toggleMenu}
            href={`/about`}
          >
            About Me
          </Link>

          <Link
            className={`${currentPage === "services" ? "border-b-2" : ""}`}
            onClick={toggleMenu}
            href={`/services`}
          >
            Services
          </Link>

          <Link
            className={`${currentPage === "faqs" ? "border-b-2" : ""}`}
            onClick={toggleMenu}
            href={`/faqs`}
          >
            FAQs
          </Link>

          <div>
            {user != null ? (
              <button
                onClick={() => {
                  void signOut();
                }}
              >
                Sign Out
              </button>
            ) : (
              ""
            )}
          </div>

          <div className="flex justify-end">Logged in as : {user?.email}</div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
