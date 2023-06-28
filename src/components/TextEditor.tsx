import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

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

  return <div>{editorLoaded && <Editor onChange={handleChange} />}</div>;
};

export default QuillEditor;
