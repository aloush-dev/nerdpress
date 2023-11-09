import { Service } from "~/app/components/Service";
import { Heading } from "~/app/components/reuseable/Heading";
import { api } from "~/trpc/server";
import { returnNotFound } from "~/utils/utils";
import NotFound from "../components/NotFound";

async function ServicesPage() {
  const data = await api.service.getAll.query();
  const navLinks = await api.config.getNavBarLinks.query();

  const found = returnNotFound("services", navLinks);

  if (found) return <NotFound />;

  return (
    <>
      <Heading text="Services" />
      <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2">
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
      </div>
    </>
  );
}

export default ServicesPage;
