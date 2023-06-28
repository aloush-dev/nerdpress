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
    slug: slug,
  });

  if (data === undefined) return null;

  return (
    <>
      <Heading text={data?.title} />
      <div className="text-center">
        <div>{data?.createdAt.toDateString()}</div>

        <div
          dangerouslySetInnerHTML={{ __html: data?.content as string }}
        ></div>
      </div>
    </>
  );
}
