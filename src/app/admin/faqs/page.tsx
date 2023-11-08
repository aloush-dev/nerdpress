import { NewFaq } from "~/app/components/admin/NewFaq";
import { Heading } from "~/app/components/reuseable/Heading";

export default function AdminFaqsPage() {
  return (
    <>
        <div className="bg-theme-green text-center ">
          <Heading text="New FAQ" colour="theme-text-1" />
          <NewFaq />
        </div>
    </>
  );
}
