import { useSession } from "next-auth/react";
import {
  FormEvent,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Button } from "./reuseable/Button";
import { api } from "~/utils/api";

function updateTextAreaSize(textArea?: HTMLTextAreaElement) {
  if (textArea == null) return;
  textArea.style.height = "0";
  textArea.style.height = `${textArea?.scrollHeight}px`;
}

export function ContactForm() {
  return <Form />;
}

function Form() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>();

  const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
    updateTextAreaSize(textArea);
    textAreaRef.current = textArea;
  }, []);

  useLayoutEffect(() => {
    updateTextAreaSize(textAreaRef.current);
  }, [userMessage]);

  const contactFormApi = api.contact.create.useMutation({
    onSuccess: () => {
      setUserEmail("");
      setUserName("");
      setUserMessage("");
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    contactFormApi.mutate({
      name: userName,
      email: userEmail,
      message: userMessage,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 p-4">
        <input
          style={{ height: 0 }}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="p-4 text-lg"
          placeholder="your name"
        />
        <input
          style={{ height: 0 }}
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="p-4 text-lg"
          placeholder="your email"
        />

        <textarea
          ref={inputRef}
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className="flex-grow resize-none overflow-hidden p-4 text-lg"
          placeholder="what would you like to say?"
        />

        <Button text="contact" />
      </form>
    </>
  );
}
