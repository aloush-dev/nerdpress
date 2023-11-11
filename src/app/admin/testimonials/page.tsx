"use client";

import { NewTestimonial } from "~/app/components/NewTestimonial";
import { api } from "../../../trpc/react";

export default function AdminTestimonials() {
  const { data, refetch } =
    api.testimonials.getNonApprovedTestimonials.useQuery();

  const approveTestimontal = api.testimonials.updateToApproved.useMutation({
    onSuccess: () => {
      return refetch();
    },
  });

  if (!data) return <p>loading....</p>;

  return (
    <>
      <NewTestimonial />
      <ul className="flex flex-wrap justify-center">
        {data.map((testimonal) => {
          return (
            <li
              className="m-4 flex flex-col items-center"
              key={testimonal.id}
            >
              <p>{testimonal.content}</p>
              <p>{testimonal.postedBy}</p>
              <p>{testimonal.createdAt.toDateString()}</p>
              <button
                className="bg-theme-accent p-2"
                onClick={() => {
                  approveTestimontal.mutate({
                    id: testimonal.id,
                    approved: true,
                  });
                }}
              >
                approve
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
