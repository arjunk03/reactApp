import Hello from "./componenets/Hello";

function App() {
  const seatNumbers = [1, 3, 4];
  const person = {
    name: "Arjun",
    msg: "Hi",
    seatNumbers: seatNumbers,
  };
  return (
    <>
      <div>
        <Hello person={person} />
      </div>
    </>
  );
}

export default App;
