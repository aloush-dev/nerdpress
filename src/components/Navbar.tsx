import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./reuseable/Button";

export function Navbar({ currentPage }: { currentPage: string }) {
  const session = useSession();
  const user = session.data?.user;

  return (
    <nav className="flex">
      <div className="flex items-center gap-4">
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
          className={`${currentPage === "testimonials" ? "border-b-2" : ""}`}
          href={`/testimonials`}
        >
          Testimonials
        </Link>

        <Link
          className={`${currentPage === "faqs" ? "border-b-2" : ""}`}
          href={`/faqs`}
        >
          FAQs
        </Link>

        {user ? (
          user.admin ? (
            <Button padding="p-2" href="/admin" text="Admin" />
          ) : (
            <Button padding="p-2" text="Profile" href="/profile" />
          )
        ) : (
          <Button
            padding="p-2"
            text="Sign In"
            onClick={() => {
              void signIn();
            }}
          />
        )}
      </div>
    </nav>
  );
}
