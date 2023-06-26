import { useSession } from "next-auth/react";
import {
  FormEvent,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { api } from "~/utils/api";

function updateTextAreaSize(textArea?: HTMLTextAreaElement) {
  if (textArea == null) return;
  textArea.style.height = "0";
  textArea.style.height = `${textArea?.scrollHeight}px`;
}

export default function AdminPanel() {
  const session = useSession();
  if (session.status !== "authenticated") return;

  return <Form />;
}

function Form() {
  const [titleInputValue, setTitleInputValue] = useState("");
  const [priceInputValue, setPriceInputValue] = useState(0);
  const [descriptionInputValue, setDescriptionInputValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>();
  const session = useSession();

  const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
    updateTextAreaSize(textArea);
    textAreaRef.current = textArea;
  }, []);

  useLayoutEffect(() => {
    updateTextAreaSize(textAreaRef.current);
  }, [descriptionInputValue]);

  const createService = api.service.create.useMutation({
    onSuccess: () => {
      setTitleInputValue("");
      setDescriptionInputValue("");
      setPriceInputValue(0);
    },
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    createService.mutate({
      title: titleInputValue,
      price: priceInputValue,
      description: descriptionInputValue,
    });
  }

  if (session.status !== "authenticated") return null;

  return (
    <>
      <h3>Add Service</h3>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex flex-col gap-4 p-8 "
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
          value={descriptionInputValue}
          onChange={(e) => setDescriptionInputValue(e.target.value)}
          className="flex-grow resize-none overflow-hidden p-4 text-lg"
          placeholder="Content here"
        />

        <button>Submit</button>
      </form>
    </>
  );
}
