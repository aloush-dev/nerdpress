'use client'

import { useSession } from "next-auth/react";
import React, { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AdminOnly({ children }: Props) {
  const { data } = useSession();
  const user = data?.user;

  if (user?.admin) return <>{children}</>;

  return <p className="text-center text-xl">You do not have access for that</p>;
}
