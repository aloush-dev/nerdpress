"use client";

import { NewService } from "~/components/admin/NewService";
import AdminOnly from "~/components/admin/AdminOnly";
import { AdminPanelButtons } from "~/components/admin/AdminPanelButtons";
import { Heading } from "~/components/reuseable/Heading";
import { api } from "../../../trpc/react";

export default function AdminServicePage() {
  const { data } = api.service.getAll.useQuery();

  return (
    <>
      <AdminOnly>
        <Heading text="Admin Panel - Services" />
        <AdminPanelButtons />
        <div className="bg-theme-green text-center ">
          <Heading text="New Service" colour="theme-text-1" />
          <NewService />
        </div>

        <ul className="flex flex-col items-center justify-center">
          {data?.map((service) => {
            return (
              <li key={service.id} className="p-2">
                {service.title.toUpperCase()}
              </li>
            );
          })}
        </ul>
      </AdminOnly>
    </>
  );
}
