import { Service } from "~/components/Service";
import { api } from "~/utils/api";

export default function Services() {
  const { data } = api.service.getAll.useQuery();


  return (
    <>
      <h2 className="p-8 text-center text-4xl font-black">Services</h2>
      <div className="flex flex-col items-center justify-center gap-10 p-4">
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

