import { Service } from "~/components/Service";
import { Heading } from "~/components/reuseable/Heading";
import { api } from "~/utils/api";

export default function Services() {
  const { data } = api.service.getAll.useQuery();

  return (
    <>
      <Heading text="Services" />
      <div className="flex flex-wrap items-center justify-center gap-10 p-4">
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
