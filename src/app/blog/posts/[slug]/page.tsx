import { Heading } from "~/app/components/reuseable/Heading";
import { MdDateRange } from "react-icons/md";
import { api } from "~/trpc/server";

export default async function SingleBlogPost({ params }: { params: { slug: string } }) {
  const data = await api.post.getPostById.query({
    slug: params.slug,
  });


  if ( !data) return null

  return (
    <div className="container mx-auto">
      <Heading text={data.title} />
      <div className="flex flex-col ">
        <div className="flex justify-center">
          <div className="m-4 flex items-center justify-center bg-theme-orange p-2 font-bold text-white">
            <MdDateRange /> {data.createdAt.toDateString()}
          </div>
          <div>
            {data.content}
          </div>
        </div>
      </div>
    </div>
  );
}
