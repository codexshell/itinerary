import { useState } from "react";

export default function AddLocation({ onAddLocation }) {
  const [text, setText] = useState("");

  return (
    <label>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add task"
      />{" "}
      <button
        disabled={text.length === 0}
        onClick={() => {
          onAddLocation(text);
          setText("");
        }}
      >
        Add
      </button>
    </label>
  );
}
