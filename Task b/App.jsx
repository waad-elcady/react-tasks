import { useState, useEffect } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  function handleChange(e) {
    if (e.target.value.length <= 30) {
      setText(e.target.value);
    }
  }

  useEffect(() => {
    if (text.length < 10) {
      setStatus("Too short");
    } else if (text.length <= 20) {
      setStatus("Good");
    } else {
      setStatus("Too long");
    }
  }, [text]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Live Character Counter</h2>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
      />

      <p>Characters: {text.length} / 30</p>
      <p>Status: {status}</p>
    </div>
  );
}