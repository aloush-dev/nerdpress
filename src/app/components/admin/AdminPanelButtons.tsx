import { Button } from "../reuseable/Button";

export function AdminPanelButtons() {
  return (
    <>
      <div className="m-4 flex flex-wrap justify-center gap-2">
        <Button padding="px-2 py-2" text="Home" href="/admin" />
        <Button text="Services" href="/admin/services" />
        <Button text="Blog" href="/admin/blog" />
        <Button text="Testimonials" href="/admin/testimonials" />
        <Button text="Faqs" href="/admin/faqs" />
      </div>
    </>
  );
}
