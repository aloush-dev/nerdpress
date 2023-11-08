import { NewService } from "~/app/components/admin/NewService";
import { Heading } from "~/app/components/reuseable/Heading";
import { api } from "../../../trpc/server";

export default async function AdminServicePage() {
  const data = await api.service.getAll.query();

  return (
    <>
      <div className="bg-theme-green text-center ">
        <Heading text="New Service" colour="theme-text-1" />
        <NewService />
      </div>

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
