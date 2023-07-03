import { useSession } from "next-auth/react";
import { FormEvent, useRef, useState } from "react";
import { api } from "~/utils/api";
import { Button } from "../reuseable/Button";
import { slugify } from "~/utils/utils";
import QuillEditor from "../admin/TextEditor";
import DOMPurify from "dompurify";

export function NewBlogPost() {
  const session = useSession();
  if (session.status !== "authenticated") return;

  return <Form />;
}

function Form() {
  const [titleInputValue, setTitleInputValue] = useState("");
  const [contentInputValue, setContentInputValue] = useState("");
  const session = useSession();

  const createPost = api.post.create.useMutation({
    onSuccess: (newPost) => {
      setTitleInputValue("");
      setContentInputValue("");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
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
      <input
        style={{ height: 0 }}
        value={titleInputValue}
        onChange={(e) => setTitleInputValue(e.target.value)}
        className="p-4 text-lg text-black"
        placeholder="blog title"
      />

      <QuillEditor setContentInputValue={setContentInputValue} />

      <Button text="Submit" />
    </form>
  );
}
