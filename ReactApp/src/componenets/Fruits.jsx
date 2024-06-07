export default function Fruits() {
  const fruits = ["Apple", "Grapes", "Banana"];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
