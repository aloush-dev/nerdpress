import { NewService } from "~/app/components/admin/NewService";
import { api } from "../../../trpc/server";

export default async function AdminServicePage() {
  const data = await api.service.getAll.query();

  return (
    <>
        <NewService />

      <ul className="flex flex-col items-center justify-center">
        {data?.map((service) => {
          return (
            <li key={service.id} className="p-2">
              {service.title.toUpperCase()}
            </li>
          );
        })}
      </ul>
    </>
  );
}
