import { useSession } from "next-auth/react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { api } from "~/utils/api";
import { Button } from "./reuseable/Button";

function updateTextAreaSize(textArea?: HTMLTextAreaElement) {
  if (textArea == null) return;
  textArea.style.height = "0";
  textArea.style.height = `${textArea?.scrollHeight}px`;
}

export function NewTestimonial() {
  const session = useSession();
  if (session.status !== "authenticated") return null;

  return <Form />;
}

function Form() {
  const [contentValue, setContentValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>();
  const session = useSession();

  const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
    updateTextAreaSize(textArea);
    textAreaRef.current = textArea;
  }, []);

  useLayoutEffect(() => {
    updateTextAreaSize(textAreaRef.current);
  }, [contentValue]);

  const createTestimonial = api.testimonials.create.useMutation({
    onSuccess: () => {
      setContentValue("");
    },
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    createTestimonial.mutate({
      content: contentValue,
    });
  }

  if (session.status !== "authenticated") return null;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex flex-col gap-4 p-8 "
      >
        <textarea
          ref={inputRef}
          value={contentValue}
          onChange={(e) => setContentValue(e.target.value)}
          className="block flex-grow resize-none overflow-hidden border border-gray-300 bg-white p-4 text-lg"
          placeholder="Tell me what you thought!"
        />

        <Button text="Submit" />
      </form>
    </>
  );
}
