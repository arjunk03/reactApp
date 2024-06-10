import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // setTodo()
    setTodos([...todos, todo]);
    // console.log(todos);
    setTodo("");
  }
  return (
    <form className={styles.todoform} onSubmit={(e) => handleSubmit(e)}>
      <input
        className={styles.modernInput}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        value={todo}
        placeholder="Enter todo item..."
      />
      <button className={styles.modernButton} type="submit">
        Add
      </button>
    </form>
  );
}
