"use client";
import { signIn, useSession } from "next-auth/react";
import { Button } from "../reuseable/Button";

export function SignInButton() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <>
      {user ? (
        user.admin ? (
          <Button padding="p-2 rounded-lg" href="/admin" text="Admin" />
        ) : (
          <Button padding="p-2 rounded-lg" text="Profile" href="/profile" />
        )
      ) : (
        <Button
          padding="p-2 rounded-lg"
          text="Sign In"
          onClick={() => {
            void signIn("google");
          }}
        />
      )}
    </>
  );
}
