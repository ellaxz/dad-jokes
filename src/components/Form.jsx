import React, { useState } from "react"

export default function Form({ onNewJoke }) {
  const [text, setText] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.length < 5) {
      setError("Joke must be at least 5 characters long")
      return
    }
    setError("")
    onNewJoke(text)
    setText("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>New Joke </p>
      <input
        type="text"
        placeholder="Enter a joke"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      {error && <p>{error}</p>}
      <button type="submit">submit</button>
    </form>
  )
}
