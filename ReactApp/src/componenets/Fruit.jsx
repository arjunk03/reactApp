export default function Fruit({ name, price }) {
  return (
    <li>
      {/* {name} {price} */}

      {price > 20 ? (
        <h3>
          {name} {price}
        </h3>
      ) : (
        ""
      )}
    </li>
  );
}
