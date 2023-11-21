import { Heading } from "~/app/components/reuseable/Heading";
import { MdDateRange } from "react-icons/md";
import { api } from "~/trpc/server";
import parse from "html-react-parser";

export default async function SingleBlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const data = await api.post.getPostById.query({
    slug: params.slug,
  });

  if (!data) return null;

  return (
    <div className="flex flex-col">
      <button> </button>
      <Heading padding="p-8" text={data.title} />
      <div className="flex flex-col justify-center">
        <div className="m-4 flex items-center justify-center bg-theme-orange p-2 font-bold text-white">
          <MdDateRange /> {data.createdAt.toDateString()}
        </div>
        <div className="m-4 rounded-lg bg-white p-2">{parse(data.content)}</div>
      </div>
    </div>
  );
}
