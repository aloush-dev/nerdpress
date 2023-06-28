import { useSession } from "next-auth/react";
import {
  FormEvent,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { api } from "~/utils/api";
import { Button } from "./reuseable/Button";

function updateTextAreaSize(textArea?: HTMLTextAreaElement) {
  if (textArea == null) return;
  textArea.style.height = "0";
  textArea.style.height = `${textArea?.scrollHeight}px`;
}

export function NewFaq() {
  const session = useSession();
  if (session.status !== "authenticated") return;

  return <Form />;
}

function Form() {
  const [questionValue, setQuestionValue] = useState("");
  const [answerValue, setAnswerValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>();
  const session = useSession();

  const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
    updateTextAreaSize(textArea);
    textAreaRef.current = textArea;
  }, []);

  useLayoutEffect(() => {
    updateTextAreaSize(textAreaRef.current);
  }, [answerValue]);

  const createFaq = api.faqs.create.useMutation({
    onSuccess: () => {
      setQuestionValue("");
      setAnswerValue("");
    },
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    createFaq.mutate({
      question: questionValue,
      answer: answerValue,
    });
  }

  if (session.status !== "authenticated") return null;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex flex-col gap-4 p-8 "
      >
        <input
          style={{ height: 0 }}
          value={questionValue}
          onChange={(e) => setQuestionValue(e.target.value)}
          className="block border border-gray-300 bg-white p-4 text-lg"
          placeholder="question"
        />

        <textarea
          ref={inputRef}
          value={answerValue}
          onChange={(e) => setAnswerValue(e.target.value)}
          className="block flex-grow resize-none overflow-hidden border border-gray-300 bg-white p-4 text-lg"
          placeholder="answer"
        />

        <Button text="Submit" />
      </form>
    </>
  );
}
