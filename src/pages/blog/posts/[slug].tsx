import { useRouter } from "next/router";
import { Heading } from "~/components/reuseable/Heading";
import { api } from "~/utils/api";
import { MdDateRange } from "react-icons/md";

export default function SingleBlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error, isLoading } = api.post.getPostById.useQuery({
    slug: slug as string,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="container mx-auto">
      <Heading text={data?.title} />
      <div className="text-center">
        <div className="flex justify-center">
          <div className="m-4 flex items-center justify-center bg-theme-orange p-2 font-bold text-white">
            <MdDateRange /> {data?.createdAt.toDateString()}
          </div>
          <div className="m-4 flex items-center justify-center bg-theme-orange p-2 font-bold text-white">
            {data?.category}
          </div>
        </div>

        <div
          className="m-4 bg-theme-white p-4"
          dangerouslySetInnerHTML={{ __html: data?.content }}
        ></div>
      </div>
    </div>
  );
}
