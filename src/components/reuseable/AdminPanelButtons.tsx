import { Button } from "./Button";

export function AdminPanelButtons() {
  return (
    <>
      <div className="flex justify-center flex-wrap gap-2 p-4">
        <Button text="Home" href="/admin" />
        <Button text="Services" href="/admin/services" />
        <Button text="Blog" href="/admin/blog" />
        <Button text="Testimonials" href="/admin/testimonials" />
        <Button text="Faqs" href="/admin/faqs" />
      </div>
    </>
  );
}
