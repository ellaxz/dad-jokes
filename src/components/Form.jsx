import React, { useState } from "react";

export default function Form({ onNewJoke }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewJoke(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
    <p>New Joke</p>
      <input
        type="text"
        placeholder="Enter a joke"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button type="submit">submit</button>
    </form>
  );
}
