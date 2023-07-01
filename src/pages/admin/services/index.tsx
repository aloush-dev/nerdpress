import { NewService } from "~/components/NewService";
import { Service } from "~/components/Service";
import AdminOnly from "~/components/reuseable/AdminOnly";
import { AdminPanelButtons } from "~/components/reuseable/AdminPanelButtons";
import { Heading } from "~/components/reuseable/Heading";
import { api } from "~/utils/api";

export default function AdminServicePage() {
  const { data } = api.service.getAll.useQuery();

  return (
    <>
      <AdminOnly>
        <Heading text="Admin Panel Services" />
        <AdminPanelButtons />
        <div className="bg-theme-green text-center ">
          <Heading text="New Service" colour="theme-text-1" />
          <NewService />
        </div>

        {data?.map((service) => {
          return (
            <Service
              key={service.id}
              title={service.title}
              price={service.price}
              description={service.description}
            />
          );
        })}
      </AdminOnly>
    </>
  );
}
