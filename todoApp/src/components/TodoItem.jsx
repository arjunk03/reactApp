export default function TodoItem({ item }) {
  const styling = { color: "red" };

  return <h3 style={styling}>{item}</h3>;
}
