import { NewBlogPost } from "~/app/components/blog/NewBlogPost";
import { Heading } from "~/app/components/reuseable/Heading";

export default function AdminBlogPage() {
  return (
    <>
      <div className="bg-theme-green text-center ">
        <Heading text="New Blog Post" colour="theme-text-1" />
        <NewBlogPost />
      </div>
    </>
  );
}
