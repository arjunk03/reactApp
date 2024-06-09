import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // setTodo()
  }

  return (
    <div>
      <form>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
        />
        <button type="submit" onSubmit={(e) => handleSubmit(e)}>
          Add
        </button>
      </form>
    </div>
  );
}
