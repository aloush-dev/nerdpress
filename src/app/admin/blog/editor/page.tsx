"use client";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../../../components/blog/editor/Editor"), {
  ssr: false,
});

export default function BlogPostEditor() {


  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <Editor data={null} onChange={() => null} />
      </div>
    </>
  );
}
