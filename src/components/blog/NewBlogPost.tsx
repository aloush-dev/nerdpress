import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { api } from "~/utils/api";
import { Button } from "../reuseable/Button";
import { slugify } from "~/utils/utils";
import QuillEditor from "../admin/QuillEditor";
import DOMPurify from "dompurify";

export function NewBlogPost() {
  const session = useSession();
  if (session.status !== "authenticated") return;

  return <Form />;
}

function Form() {
  const [titleInputValue, setTitleInputValue] = useState("");
  const [contentInputValue, setContentInputValue] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const [feedback, setFeedback] = useState("");
  const session = useSession();

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      setTitleInputValue("");
      setContentInputValue("");
      setDisableButton(false);
      setFeedback("Post Successful");
    },
    onError: (err) => {
      setFeedback("Something went wrong please try again");
      console.log(err);
    },
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setDisableButton(true);
    const titleSlug = slugify(titleInputValue);
    const sanitizedHTML = DOMPurify.sanitize(contentInputValue);

    createPost.mutate({
      title: titleInputValue,
      slug: titleSlug,
      content: sanitizedHTML,
    });
  }

  if (session.status !== "authenticated") return null;

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex flex-col gap-4 border-black p-4"
    >
      <p>{feedback}</p>
      <input
        value={titleInputValue}
        onChange={(e) => setTitleInputValue(e.target.value)}
        className="p-4 text-lg text-black"
        placeholder="blog title"
      />

      <QuillEditor
        contentInputValue={contentInputValue}
        setContentInputValue={setContentInputValue}
      />

      <Button disable={disableButton} text="Submit" />
    </form>
  );
}
