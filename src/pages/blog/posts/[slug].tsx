import { Heading } from "~/components/reuseable/Heading";
import { api } from "~/utils/api";
import { MdDateRange } from "react-icons/md";

type SingleBlogPostProps = {
  id: string;
  userId: string;
  title: string;
  content: string;
  slug: string;
  createdAt: Date;
  category: string;
};

export const getServerSideProps = (context: any) => {
  const { slug } = context.query;

  const { data } = api.post.getPostById.useQuery(slug);

  return {
    props: { data },
  };
};

export default function SingleBlogPost({
  data,
}: {
  data: SingleBlogPostProps;
}) {
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
