import { Chip } from "../reuseable/Chip";

export function AdminPanelButtons() {
  return (
    <>
      <div className="flex justify-center gap-2 overflow-x-auto px-6">
        <Chip text="Home" href="/admin" />
        <Chip text="Services" href="/admin/services" />
        <Chip text="Blog" href="/admin/blog" />
        <Chip text="Testimonials" href="/admin/testimonials" />
        <Chip text="Faqs" href="/admin/faqs" />
      </div>
    </>
  );
}
