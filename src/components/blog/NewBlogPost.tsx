import { useSession } from "next-auth/react";
import {
  FormEvent,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { api } from "~/utils/api";
import { Button } from "../reuseable/Button";

function updateTextAreaSize(textArea?: HTMLTextAreaElement) {
  if (textArea == null) return;
  textArea.style.height = "0";
  textArea.style.height = `${textArea?.scrollHeight}px`;
}

export function NewBlogPost() {
  const session = useSession();
  if (session.status !== "authenticated") return;

  return <Form />;
}

function Form() {
  const [titleInputValue, setTitleInputValue] = useState("");
  const [contentInputValue, setContentInputValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>();
  const session = useSession();

  const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
    updateTextAreaSize(textArea);
    textAreaRef.current = textArea;
  }, []);

  useLayoutEffect(() => {
    updateTextAreaSize(textAreaRef.current);
  }, [contentInputValue]);

  const createPost = api.post.create.useMutation({
    onSuccess: (newPost) => {
      console.log(newPost);
      setTitleInputValue("");
      setContentInputValue("");
    },
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    createPost.mutate({ title: titleInputValue, content: contentInputValue });
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
        className="p-4 text-lg"
        placeholder="blog title"
      />
      <textarea
        ref={inputRef}
        value={contentInputValue}
        onChange={(e) => setContentInputValue(e.target.value)}
        className="flex-grow resize-none overflow-hidden p-4 text-lg"
        placeholder="Content here"
      />

      <Button text="Submit" />
    </form>
  );
}
