import { NewService } from "~/app/components/admin/NewService";
import { api } from "../../../trpc/server";
import ServiceList from "~/app/components/reuseable/InteractiveList";
import { getTheme } from "~/utils/utils";

export default async function AdminServicePage() {
  const data = await api.service.getAll.query();

  const { theme } = await getTheme();
  if (!theme) return null;

  return (
    <div className="flex flex-col">
      <NewService />

      <div className="flex w-full justify-center">
        <ServiceList themeData={theme} input={data} />
      </div>
    </div>
  );
}
