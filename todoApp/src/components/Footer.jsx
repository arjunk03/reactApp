import styles from "./footer.module.css";
export default function Footer({ completedTodosCount, totalTodosCount }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>
        Completed Todos: {completedTodosCount}{" "}
      </span>
      <span className={styles.item}>Total Todos: {totalTodosCount} </span>
    </div>
  );
}
