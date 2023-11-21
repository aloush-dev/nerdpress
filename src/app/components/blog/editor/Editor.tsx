"use client";

import { useSession } from "next-auth/react";
import {
  type FormEvent,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { slugify } from "~/utils/clientutils";
import { Heading } from "../../reuseable/Heading";
import { Button } from "../../reuseable/Button";
import { api } from "~/trpc/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";

type Category = {
  id: string;
  name: string;
};

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export function Editor({
  blogPostContent,
  setBlogPostContent,
}: {
  blogPostContent: string;
  setBlogPostContent: Dispatch<SetStateAction<string>>;
}) {
  const session = useSession();

  const [titleInputValue, setTitleInputValue] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [category, setCategory] = useState("");
  // const [categories, setCategories] = useState<Category[] | null | undefined>(
  //   []
  // );

  // const { data } = api.category.getAll.useQuery();

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      setTitleInputValue("");
      setBlogPostContent("");
      setCategory("");
      setDisableButton(false);
      setFeedback("Post Successfull");
    },
    onError: (err) => {
      setFeedback("Something went wrong please try again");
      console.log(err);
    },
  });

  // const createCategory = api.category.create.useMutation();

  // function handleCategoryPost(categoryToPost: string) {
  //   if (!data?.some((obj) => obj.name === categoryToPost)) {
  //     createCategory.mutate({ name: categoryToPost });
  //   }
  // }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setDisableButton(true);
    const titleSlug = slugify(titleInputValue);

    // const categoryToPost =
    //   category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

    // handleCategoryPost(categoryToPost);

    createPost.mutate({
      title: titleInputValue,
      slug: titleSlug,
      content: DOMPurify.sanitize(blogPostContent),
      category: "Uncategorised",
    });
  }

  // const categoryTyping = (e: ChangeEvent<HTMLInputElement>) => {
  //   setCategory(e.target.value);
  //   if (category !== "") {
  //     const filteredCategories = data?.filter((item) => {
  //       return Object.values(item)
  //         .join("")
  //         .toLowerCase()
  //         .includes(category.toLowerCase());
  //     });
  //     setCategories(filteredCategories);
  //   } else {
  //     setCategories(data);
  //   }
  // };

  if (session.status !== "authenticated") return null;

  return (
    <div className="m-4 rounded-lg bg-white">
      <Heading text="New Blog Post" colour="theme-text-2" />

      <form
        onSubmit={handleSubmit}
        className="mx-auto flex flex-col gap-4  p-4"
      >
        <p>{feedback}</p>
        <input
          value={titleInputValue}
          onChange={(e) => setTitleInputValue(e.target.value)}
          className="border-2 p-2 text-lg text-black"
          placeholder="blog post title"
        />
        {/* <input
          onChange={(e) => categoryTyping(e)}
          className="border-2 p-4 text-lg text-black"
          placeholder="category"
          value={category}
        /> */}
        {/* <ul className="flex justify-center">
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
        </ul> */}
        <ReactQuill
          value={blogPostContent}
          onChange={setBlogPostContent}
          formats={formats}
          modules={modules}
          theme="snow"
        />
        <Button disable={disableButton} text="Submit" />
      </form>
    </div>
  );
}
