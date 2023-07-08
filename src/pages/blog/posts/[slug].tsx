import { Heading } from "~/components/reuseable/Heading";
import { api } from "~/utils/api";
import { MdDateRange } from "react-icons/md";
import { useRouter } from "next/router";
import { Button } from "~/components/reuseable/Button";
import AdminOnlyBlank from "~/components/reuseable/AdminOnlyBlank";
import { useState } from "react";
import parse from "html-react-parser";
import QuillEditor from "~/components/admin/QuillEditor";

export default function SingleBlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error, isLoading, refetch } = api.post.getPostById.useQuery({
    slug: slug as string,
  });

  // For Editing Blog Posts
  const [editMode, setEditMode] = useState(false);
  const [contentInputValue, setContentInputValue] = useState("");
  const updatePost = api.post.update.useMutation({
    onSuccess: () => {
      refetch()
        .then(() => {
          setEditMode(false);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  if (isLoading || !data) return <p>Loading...</p>;
  if (error) console.log(error);

  return (
    <div className="container mx-auto">
      <Heading text={data.title} />
      <div className="flex flex-col ">
        <div className="flex justify-center">
          <div className="m-4 flex items-center justify-center bg-theme-orange p-2 font-bold text-white">
            <MdDateRange /> {data.createdAt.toDateString()}
          </div>
          <div className="m-4 flex items-center justify-center bg-theme-orange p-2 font-bold text-white">
            {data.category}
          </div>
        </div>
        <AdminOnlyBlank>
          <div className="flex justify-center">
            <Button
              onClick={() => {
                setContentInputValue(data.content);
                setEditMode(true);
              }}
              padding="py-2 px-4"
              text="Edit"
            />
          </div>
        </AdminOnlyBlank>
        {editMode ? (
          <div className="m-4 flex flex-col items-center justify-center p-2">
            <QuillEditor
              contentInputValue={contentInputValue}
              setContentInputValue={setContentInputValue}
            />
            <Button
              onClick={() => {
                updatePost.mutate({
                  id: data.id,
                  content: contentInputValue,
                });
              }}
              text="Submit"
            />
          </div>
        ) : (
          <div className="m-4 bg-theme-white p-4">{parse(data.content)}</div>
        )}
      </div>
    </div>
  );
}
