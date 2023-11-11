"use client";

import { useSession } from "next-auth/react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { api } from "~/utils/api";
import { Button } from "../reuseable/Button";
import { Heading } from "../reuseable/Heading";

function updateTextAreaSize(textArea?: HTMLTextAreaElement) {
  if (textArea == null) return;
  textArea.style.height = "0";
  textArea.style.height = `${textArea?.scrollHeight}px`;
}

export function NewService() {
  const session = useSession();
  if (session.status !== "authenticated") return null;

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

  useEffect(() => {
    updateTextAreaSize(textAreaRef.current);
  }, [descriptionInputValue]);

  const createService = api.service.create.useMutation({
    onSuccess: () => {
      setTitleInputValue("");
      setPriceInputValue(0);
      setDescriptionInputValue("");
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
    <div className="bg-white p-8 rounded-lg m-4">
      <Heading text="Add New Service" colour="theme-text-2" />

      <form onSubmit={handleSubmit} className="mx-auto flex flex-col gap-4">
        <input
          style={{ height: 0 }}
          value={titleInputValue}
          onChange={(e) => setTitleInputValue(e.target.value)}
          className="block border border-gray-300 bg-white p-4 text-lg"
          placeholder="service title"
        />

        <div className="relative ">
          <input
            className="block border border-gray-300 bg-white p-4 pl-5 text-lg"
            type="number"
            style={{ height: 0 }}
            value={priceInputValue}
            onChange={(e) => setPriceInputValue(e.target.valueAsNumber)}
            placeholder="service price"
          />
          <span className="absolute left-1 top-0 block items-center justify-center text-2xl">
            £
          </span>
        </div>

        <textarea
          ref={inputRef}
          value={descriptionInputValue}
          onChange={(e) => setDescriptionInputValue(e.target.value)}
          className="block flex-grow resize-none overflow-hidden border border-gray-300 bg-white p-4 text-lg"
          placeholder="description here"
        />

        <Button text="Submit" />
      </form>
    </div>
  );
}
