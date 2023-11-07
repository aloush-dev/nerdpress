'use client'

import { Service } from "~/components/Service";
import { Heading } from "~/components/reuseable/Heading";
import { api } from "../../trpc/react";

export default function Services() {
  const { data, isLoading } = api.service.getAll.useQuery();

  if (isLoading || !data) return <p>Loading....</p>;

  return (
    <>
      <Heading text="Services" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 p-8">
        {data.map((service) => {
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
