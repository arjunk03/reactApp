import Fruit from "./Fruit";

export default function Fruits() {
  //   const fruits = ["Apple", "Grapes", "Banana"];
  const fruits = [
    { name: "Apple", price: 10 },
    { name: "Grapes", price: 20 },
    { name: "Mango", price: 30 },
    { name: "Banana", price: 40 },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          //   <li key={fruit.name}>
          //     {fruit.name} {fruit.price}
          //   </li>
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} />
        ))}
      </ul>
    </div>
  );
}
