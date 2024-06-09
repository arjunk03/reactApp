export default function Fruit({ name, price }) {
  return (
    <div>
      {/* {name} {price} */}

      {price > 20 ? (
        <li>
          {" "}
          <h3>
            {name} {price}
          </h3>{" "}
        </li>
      ) : (
        ""
      )}
    </div>
  );
}
