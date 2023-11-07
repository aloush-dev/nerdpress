import AdminOnly from "~/components/admin/AdminOnly";
import { AdminPanelButtons } from "~/components/admin/AdminPanelButtons";
import ConfigPage from "~/components/admin/ConfigPage";
import { Heading } from "~/components/reuseable/Heading";
import { getServerAuthSession } from "~/server/auth";

export default async function AdminPanel() {
  const session = await getServerAuthSession();

  if (!session) return null;

  return (
    <div className="flex flex-col items-center justify-center">
      <AdminOnly>
        <Heading text="Admin Panel" />
        <AdminPanelButtons />

        <ConfigPage />
      </AdminOnly>
    </div>
  );
}
