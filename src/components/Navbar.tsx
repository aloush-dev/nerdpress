import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function Navbar() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <nav className="flex">
      <div className="flex gap-4">
        <Link href={`/about`}>About Me</Link>
        <Link href={`/services`}>Services</Link>
        <Link href={`/faqs`}>FAQs</Link>
        <div className="p-2">
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
      </div>
    </nav>
  );
}
