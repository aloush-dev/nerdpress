import { NewFaq } from "~/components/NewFaq";
import AdminOnly from "~/components/reuseable/AdminOnly";
import { AdminPanelButtons } from "~/components/reuseable/AdminPanelButtons";
import { Heading } from "~/components/reuseable/Heading";

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
