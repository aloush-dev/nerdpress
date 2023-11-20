import { Service } from "~/app/components/Service";
import { Heading } from "~/app/components/reuseable/Heading";
import { api } from "~/trpc/server";
import { getNavBarLinks, returnNotFound } from "~/utils/utils";
import NotFound from "../components/NotFound";

async function ServicesPage() {
  const data = await api.service.getAll.query();
  const navLinks = await getNavBarLinks();
  const sortedData = data
    .slice()
    .sort((a, b) => a.displayPosition - b.displayPosition);

  const pageFound = returnNotFound("services", navLinks);

  if (pageFound) return <NotFound />;

  return (
    <>
      <Heading text="Services" />
      <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2">
        {sortedData?.map((service) => {
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
