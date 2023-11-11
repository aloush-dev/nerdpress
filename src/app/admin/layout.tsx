import { type ReactNode } from "react";
import AdminOnly from "../components/admin/AdminOnly";
import { AdminPanelButtons } from "../components/admin/AdminPanelButtons";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerAuthSession();
  const websiteData = await api.config.getConfig.query();
  if (!websiteData) return null;
  const theme = await api.config.getTheme.query({ name: websiteData.theme });

  if (!session) return null;

  return (
    <div
      style={{ backgroundColor: theme.background?.hex }}
      className="min-h-screen-view"
    >
      <AdminOnly>
        <AdminPanelButtons />
        {children}
      </AdminOnly>
    </div>
  );
}
