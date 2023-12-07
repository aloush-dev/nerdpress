import { Service } from "~/app/components/Service";
import { Heading } from "~/app/components/reuseable/Heading";
import { api } from "~/trpc/server";
import { getNavBarLinks, getTheme, returnNotFound } from "~/utils/utils";
import NotFound from "../components/NotFound";
import { ServiceItem } from "../components/services/ServiceItem";

export type Service = {
  id: number;
  userId: string;
  title: string;
  price: number;
  description: string;
  displayPosition: number;
};

async function ServicesPage() {
  const data = await api.service.getAll.query();
  const navLinks = await getNavBarLinks();
  const sortedData = data
    .slice()
    .sort((a, b) => a.displayPosition - b.displayPosition);

  const pageFound = returnNotFound("services", navLinks);
  const { theme } = await getTheme();

  if (!theme) return null;
  if (pageFound) return <NotFound />;

  return (
    <>
      <Heading text="Services" />
      <div className="m-4">
        {sortedData?.map((service) => {
          return <ServiceItem key={service.id} data={service} theme={theme} />;
        })}
      </div>
    </>
  );
}

export default ServicesPage;
