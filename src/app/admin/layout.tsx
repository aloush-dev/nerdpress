import { type ReactNode } from "react";
import AdminOnly from "../components/admin/AdminOnly";
import { AdminPanelButtons } from "../components/admin/AdminPanelButtons";
import { Heading } from "../components/reuseable/Heading";
import { getServerAuthSession } from "~/server/auth";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerAuthSession();

  if (!session) return null;

  return (
    <AdminOnly>
      <Heading text="Admin Panel" />
      <AdminPanelButtons />
      {children}
    </AdminOnly>
  );
}
