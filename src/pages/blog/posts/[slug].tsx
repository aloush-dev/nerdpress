import { Heading } from "~/components/reuseable/Heading";
import { api } from "~/utils/api";
import { MdDateRange } from "react-icons/md";
import { useRouter } from "next/router";
import { Button } from "~/components/reuseable/Button";
import AdminOnly from "~/components/reuseable/AdminOnly";
import { useState } from "react";

export default function SingleBlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error, isLoading } = api.post.getPostById.useQuery({
    slug: slug as string,
  });

  const [editMode, setEditMode] = useState(false);

  if (isLoading || !data) return null;
  if (error) console.log(error);

  return (
    <div className="container mx-auto">
      <Heading text={data?.title} />
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
      <AdminOnly>
        <div className="flex justify-center">
          <Button
            onClick={() => {
              setEditMode(true);
            }}
            padding="py-2 px-4"
            text="Edit"
          />
        </div>
      </AdminOnly>
    </div>
  );
}
