import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function Navbar({ currentPage }: { currentPage: string }) {
  const session = useSession();
  const user = session.data?.user;

  return (
    <nav className="flex">
      <div className="flex gap-4">
        <Link
          className={`${currentPage === "" ? "border-b-2" : ""}`}
          href={`/`}
        >
          Home
        </Link>

        <Link
          className={`${currentPage === "about" ? "border-b-2" : ""}`}
          href={`/about`}
        >
          About Me
        </Link>

        <Link
          className={`${currentPage === "services" ? "border-b-2" : ""}`}
          href={`/services`}
        >
          Services
        </Link>

        <Link
          className={`${currentPage === "faqs" ? "border-b-2" : ""}`}
          href={`/faqs`}
        >
          FAQs
        </Link>

        {/* <div className="p-2">
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
        </div> */}
      </div>
    </nav>
  );
}
