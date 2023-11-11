import React, { type ReactNode } from "react";
import { getServerAuthSession } from "~/server/auth";

type Props = {
  children: ReactNode;
};

export default async function AdminOnly({ children }: Props) {
  const session = await getServerAuthSession();

  if (session?.user.admin) return <>{children}</>;

  return <p className="text-center text-xl">You do not have access for that</p>;
}
