import { NewFaq } from "~/app/components/admin/NewFaq";
import AdminOnly from "~/app/components/admin/AdminOnly";
import { AdminPanelButtons } from "~/app/components/admin/AdminPanelButtons";
import { Heading } from "~/app/components/reuseable/Heading";

export default function AdminFaqsPage() {
  return (
    <>
      <AdminOnly>
        <Heading text="Admin Panel - FAQs" />
        <AdminPanelButtons />
        <div className="bg-theme-green text-center ">
          <Heading text="New FAQ" colour="theme-text-1" />
          <NewFaq />
        </div>
      </AdminOnly>
    </>
  );
}
