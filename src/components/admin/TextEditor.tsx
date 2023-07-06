import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const Editor = dynamic(() => import("react-quill"), { ssr: false });

const QuillEditor = ({
  setContentInputValue,
}: {
  setContentInputValue: (content: string) => void;
}) => {
  const [editorLoaded, setEditorLoaded] = useState(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const handleChange = (content: string) => {
    setContentInputValue(content);
  };

  return (
    <div>
      {editorLoaded && (
        <Editor
          className="text-theme-black bg-theme-white "
          theme="snow"
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default QuillEditor;
