import { NewBlogPost } from "~/app/components/blog/NewBlogPost";
import AdminOnly from "~/app/components/admin/AdminOnly";
import { AdminPanelButtons } from "~/app/components/admin/AdminPanelButtons";
import { Heading } from "~/app/components/reuseable/Heading";

export default function AdminBlogPage() {
  return (
    <>
      <AdminOnly>
        <Heading text="Admin Panel - Blog" />
        <AdminPanelButtons />
        <div className="bg-theme-green text-center ">
          <Heading text="New Blog Post" colour="theme-text-1" />
          <NewBlogPost />
        </div>
      </AdminOnly>
    </>
  );
}
