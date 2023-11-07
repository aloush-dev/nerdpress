import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import AdminOnlyBlank from "./AdminOnlyBlank";

const Editor = dynamic(() => import("react-quill"), { ssr: false });

const QuillEditor = ({
  setContentInputValue,
  contentInputValue,
}: {
  contentInputValue: string;
  setContentInputValue: (content: string) => void;
}) => {
  const [editorLoaded, setEditorLoaded] = useState(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const handleChange = (content: string) => {
    setContentInputValue(content);
  };

  const modules = {
    toolbar: [
      [{ header: "2" }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
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
  ];

  return (
    <AdminOnlyBlank>
      {editorLoaded && (
        <Editor
          formats={formats}
          modules={modules}
          className="text-theme-black bg-theme-white "
          theme="snow"
          onChange={handleChange}
          value={contentInputValue}
        />
      )}
    </AdminOnlyBlank>
  );
};

export default QuillEditor;
