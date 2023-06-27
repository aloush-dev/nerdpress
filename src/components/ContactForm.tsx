import { Heading } from "./reuseable/Heading";
import { useSession } from "next-auth/react";
import {
  FormEvent,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Button } from "./reuseable/Button";

function updateTextAreaSize(textArea?: HTMLTextAreaElement) {
  if (textArea == null) return;
  textArea.style.height = "0";
  textArea.style.height = `${textArea?.scrollHeight}px`;
}

export function ContactForm() {
  const session = useSession();
  if (session.status !== "authenticated") return;

  return <Form />;
}

function Form() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userSubject, setUserSubject] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>();
  const session = useSession();

  const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
    updateTextAreaSize(textArea);
    textAreaRef.current = textArea;
  }, []);

  useLayoutEffect(() => {
    updateTextAreaSize(textAreaRef.current);
  }, [userMessage]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  if (session.status !== "authenticated") return null;

  return (
    <>
      <Heading text="Contact Me" />
      <form onSubmit={handleSubmit} className="mx-auto flex flex-col gap-4 p-4">
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
        <input
          style={{ height: 0 }}
          value={userSubject}
          onChange={(e) => setUserSubject(e.target.value)}
          className="p-4 text-lg"
          placeholder="email subject"
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
