import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const validateUrl = (value: string) => {
    // simple & effective URL regex
    const urlRegex =
      /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-./?%&=]*)?$/i;

    setIsValid(urlRegex.test(value));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUrl(value);

    if (value === "") {
      setIsValid(null);
    } else {
      validateUrl(value);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>URL Validator</h2>

      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={handleChange}
        style={{ padding: "8px", width: "300px" }}
      />

      <div style={{ marginTop: "10px", fontWeight: "bold" }}>
        {isValid === true && (
          <span style={{ color: "green" }}>✅ Valid URL</span>
        )}
        {isValid === false && (
          <span style={{ color: "red" }}>❌ Invalid URL</span>
        )}
      </div>
    </div>
  );
}

export default App;
