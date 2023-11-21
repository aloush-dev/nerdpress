"use client";

import { useEffect, useState } from "react";
import { Editor } from "~/app/components/blog/editor/Editor";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

export default function NewBlogPost() {
  const [blogPostContent, setBlogPostContent] = useState("");
  const [sanitizedContent, setSanitizedContent] = useState("");

  useEffect(() => {
    setSanitizedContent(DOMPurify.sanitize(blogPostContent));
  }, [blogPostContent]);

  return (
    <>
      <Editor
        blogPostContent={blogPostContent}
        setBlogPostContent={setBlogPostContent}
      />

      {sanitizedContent}
      {parse(sanitizedContent)}

    </>
  );
}
