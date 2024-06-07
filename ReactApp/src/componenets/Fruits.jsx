export default function Fruits() {
  const fruits = ["Apple", "Grapes", "Banana"];
  return (
    <div>
      {fruits.map((fruit) => (
        <h1>{fruit}</h1>
      ))}
    </div>
  );
}
