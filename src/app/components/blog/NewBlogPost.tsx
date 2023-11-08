"use client";

import { useSession } from "next-auth/react";
import {
  type FormEvent,
  useState,
  type ChangeEvent,
} from "react";
import { api } from "../../../trpc/react";
import { Button } from "../reuseable/Button";
import { slugify } from "~/utils/utils";
import QuillEditor from "../admin/QuillEditor";
import DOMPurify from "dompurify";

type Category = {
  id: string;
  name: string;
};

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
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<Category[] | null | undefined>(
    []
  );
  const session = useSession();

  const { data } = api.category.getAll.useQuery();

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      setTitleInputValue("");
      setContentInputValue("");
      setCategory("");
      setDisableButton(false);
      setFeedback("Post Successfull");
    },
    onError: (err) => {
      setFeedback("Something went wrong please try again");
      console.log(err);
    },
  });

  const createCategory = api.category.create.useMutation();

  function handleCategoryPost(categoryToPost: string) {
    if (!data?.some((obj) => obj.name === categoryToPost)) {
      createCategory.mutate({ name: categoryToPost });
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setDisableButton(true);
    const titleSlug = slugify(titleInputValue);
    const sanitizedHTML = DOMPurify.sanitize(contentInputValue);
    const categoryToPost =
      category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

    handleCategoryPost(categoryToPost);

    createPost.mutate({
      title: titleInputValue,
      slug: titleSlug,
      content: sanitizedHTML,
      category: categoryToPost || "Nncategorised",
    });
  }

  const categoryTyping = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
    if (category !== "") {
      const filteredCategories = data?.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(category.toLowerCase());
      });
      setCategories(filteredCategories);
    } else {
      setCategories(data);
    }
  };

  if (session.status !== "authenticated") return null;

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex flex-col gap-4  p-4">
      <p>{feedback}</p>
      <input
        value={titleInputValue}
        onChange={(e) => setTitleInputValue(e.target.value)}
        className="p-4 text-lg text-black"
        placeholder="blog post title"
      />

      <input
        onChange={(e) => categoryTyping(e)}
        className="p-4 text-lg text-black"
        placeholder="category"
        value={category}
      />

      <ul className="flex justify-center">
        {category.length > 1
          ? categories?.map((category) => {
              return (
                <li
                  className="m-2 bg-theme-accent p-2 text-white"
                  key={category.id}
                >
                  {category.name}
                </li>
              );
            })
          : data?.map((category) => {
              return (
                <li
                  className="m-2 bg-theme-accent p-2 text-white"
                  key={category.id}
                  onClick={() => {
                    setCategory(category.name);
                  }}
                >
                  {category.name}
                </li>
              );
            })}
      </ul>

      <QuillEditor
        contentInputValue={contentInputValue}
        setContentInputValue={setContentInputValue}
      />

      <Button disable={disableButton} text="Submit" />
    </form>
  );
}