import Fruit from "./Fruit";

export default function Fruits() {
  //   const fruits = ["Apple", "Grapes", "Banana"];
  const fruits = [
    { name: "Apple", price: 10, soldout: false },
    { name: "Grapes", price: 20, soldout: true },
    { name: "Mango", price: 30, soldout: false },
    { name: "Banana", price: 40, soldout: true },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          //   <li key={fruit.name}>
          //     {fruit.name} {fruit.price}
          //   </li>
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
