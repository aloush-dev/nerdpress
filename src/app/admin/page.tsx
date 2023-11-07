import AdminOnly from "~/app/components/admin/AdminOnly";
import { AdminPanelButtons } from "~/app/components/admin/AdminPanelButtons";
import ConfigPage from "~/app/components/admin/ConfigPage";
import { Heading } from "~/app/components/reuseable/Heading";
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
