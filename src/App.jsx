import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  return (
    <div>
      <center>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Enter a todo"
          />
          <button type="submit">Add Todo</button>
        </form>
        <hr />
      </center>
      <div className="container">
        <div className="grid">
          <div className="todos">
            {todos.map((todo, index) => (
              <p key={index}>{todo}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
