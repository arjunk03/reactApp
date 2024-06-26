import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log(item);
    // console.log(todo);

    setTodos(todos.filter((todo) => todo.name !== item.name));
  }
  function handleClick(name) {
    console.log("item clicked");
    console.log(todos);
    const newTodos = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    console.log(newTodos);
    setTodos(newTodos);
    // console.log(todos);
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}>
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
