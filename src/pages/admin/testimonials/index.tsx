import { NewTestimonial } from "~/components/NewTestimonial";
import AdminOnly from "~/components/reuseable/AdminOnly";

export default function AdminTestimonials() {
  return (
    <>
      <AdminOnly>
        <NewTestimonial />
      </AdminOnly>
    </>
  );
}
