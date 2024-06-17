import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodosCount = todos.filter((item) => item.done).length;
  const totalTodosCount = todos.length;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer
        completedTodosCount={completedTodosCount}
        totalTodosCount={totalTodosCount}
      />
    </div>
  );
}
