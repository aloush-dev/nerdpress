import { useRouter } from "next/router";
import { Heading } from "~/components/reuseable/Heading";
import { api } from "~/utils/api";

export default function SingleBlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  if (typeof slug === "undefined") {
    return <p>Loading...</p>;
  }
  const { data } = api.post.getPostById.useQuery({
    slug: slug as string,
  });

  if (data === undefined) return null;

  return (
    <>
      <Heading text={data?.title as string} />
      <div className="text-center">
        <div className="m-4 bg-theme-orange p-2 font-extrabold text-white">
          {data?.createdAt.toDateString()}
        </div>

        <div
          className="m-4 bg-theme-white p-4"
          dangerouslySetInnerHTML={{ __html: data?.content as string }}
        ></div>
      </div>
    </>
  );
}
