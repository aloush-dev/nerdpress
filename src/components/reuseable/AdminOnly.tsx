import { useSession } from "next-auth/react";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AdminOnly({ children }: Props) {
  const { data } = useSession();
  const user = data?.user;

  if (user?.admin) return <>{children}</>;

  return <p>Not Authorised</p>;
}
