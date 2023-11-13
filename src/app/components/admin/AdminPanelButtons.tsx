import { Chip } from "../reuseable/Chip";

export function AdminPanelButtons() {
  return (
    <>
      <div className="md:hidden  flex flex-nowrap items-start justify-start gap-2 scroll overflow-x-auto p-2">
        <Chip text="Home" href="/admin" />
        <Chip text="Services" href="/admin/services" />
        <Chip text="Blog" href="/admin/blog" />
        <Chip text="Testimonials" href="/admin/testimonials" />
        <Chip text="Faqs" href="/admin/faqs" />
      </div>
    </>
  );
}
