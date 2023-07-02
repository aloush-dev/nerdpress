import { FormEvent, useState } from "react";
import { api } from "~/utils/api";

export function WebsiteConfig() {
  const [websiteName, setWebsiteName] = useState("");
  const [backgroundColour, setBackgroundColour] = useState("");
  const [headerColour, setHeaderColour] = useState("");
  const [textColour, setTextColour] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Website Name:</label>
        <input
          type="text"
          value={websiteName}
          onChange={(e) => setWebsiteName(e.target.value)}
        />
      </div>
      <div>
        <label>Background Colour:</label>
        <input
          type="text"
          value={backgroundColour}
          onChange={(e) => setBackgroundColour(e.target.value)}
        />
      </div>
      <div>
        <label>Header Colour:</label>
        <input
          type="text"
          value={headerColour}
          onChange={(e) => setHeaderColour(e.target.value)}
        />
      </div>
      <div>
        <label>Text Colour:</label>
        <input
          type="text"
          value={textColour}
          onChange={(e) => setTextColour(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
