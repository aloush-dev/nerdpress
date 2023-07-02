import { Service } from "~/components/Service";
import { Heading } from "~/components/reuseable/Heading";
import { api } from "~/utils/api";

export default function Services() {
  const { data } = api.service.getAll.useQuery();

  return (
    <>
      <Heading text="Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
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
