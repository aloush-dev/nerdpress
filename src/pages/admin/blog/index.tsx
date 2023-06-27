import { NewBlogPost } from "~/components/blog/NewBlogPost";
import { Heading } from "~/components/reuseable/Heading";

export default function AdminBlog() {
  return (
    <>
      <Heading text="Admin Blog Panel" />
      <NewBlogPost />
    </>
  );
}
