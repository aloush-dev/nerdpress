import { useSession } from "next-auth/react";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AdminOnlyBlank({ children }: Props) {
  const { data } = useSession();
  const user = data?.user;

  if (user?.admin) return <>{children}</>;

  return null;
}
