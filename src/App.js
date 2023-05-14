import "./App.css"
import Form from "./components/Form"
import Joke from "./components/Joke"
import { useState } from "react"

function App() {
  // const [favorite, setFavorite] = useState(1);

  const [showForm, setShowForm] = useState(false)

  const [jokes, setJokes] = useState([
    {
      id: 1,
      text: "I only know 25 letters of the alphabet. I don't know y.",
      likes: 0,
    },
    {
      id: 2,
      text: "Why couldn't the bicycle stand up by itself? It was two tired.",
      likes: 0,
    },
  ])

  function handleSubmit() {
    console.log("form submit")
  }

  // const handleFavorite = (id) => {
  //   setFavorite(id);
  // };

  const handleNewJoke = (text) => {
    const joke = {
      text,
      id: window.self.crypto.randomUUID(),
      likes: 0,
    }
    // jokes.push(joke);
    setJokes([joke, ...jokes])
    setShowForm(false)
  }

  const handleDeleteJoke = (id) => {
    console.log("delete joke: ", id)
    setJokes(jokes.filter((joke) => joke.id !== id))
  }

  const handleLike = (id) => {
    console.log("handlelike", id)
    setJokes(
      jokes.map((joke) => {
        if (joke.id === id) {
          return {
            ...joke,
            likes: joke.likes + 1,
          }
        } else {
          return joke
        }
      })
    )
  }

  const handleDislike = (id) => {
    setJokes(
      jokes.map((joke) => {
        if (joke.id === id) {
          return {
            ...joke,
            likes: joke.likes - 1,
          }
        } else {
          return joke
        }
      })
    )
  }

  const handleSort = () => {
    setJokes([...jokes].sort((a, b) => b.likes - a.likes))
  }

  const handleAddNewJoke = () => {
    setShowForm(true)
  }

  return (
    <div>
      <h1>Dad Jokes</h1>

      {showForm ? (
        <Form onSubmit={handleSubmit} onNewJoke={handleNewJoke} />
      ) : (
        <>
          <button onClick={handleSort}>Sort</button>
          <button onClick={handleAddNewJoke}>add a new joke</button>
          {jokes.map((joke) => (
            <Joke
              // onFavorite={handleFavorite}
              // favorite={favorite === joke.id}
              onDelete={handleDeleteJoke}
              onLike={handleLike}
              onDislike={handleDislike}
              key={joke.id}
              {...joke}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default App
