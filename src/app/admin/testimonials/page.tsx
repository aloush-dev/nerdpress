"use client";

import { NewTestimonial } from "~/app/components/NewTestimonial";
import AdminOnly from "~/app/components/admin/AdminOnly";
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
      <AdminOnly>
        <NewTestimonial />
        <ul className="flex flex-wrap justify-center">
          {data.map((testimonal) => {
            return (
              <li
                className="m-4 flex flex-col items-center  bg-[#83948e] p-4 text-[#fbf2e4]"
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
      </AdminOnly>
    </>
  );
}
