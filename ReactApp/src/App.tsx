import Hello from "./componenets/Hello";

function App() {
  const seatNumbers = [1, 3, 4];
  return (
    <>
      <div>
        <Hello name="Arjun" msg="Hi there !" seatNumbers={seatNumbers} />
      </div>
    </>
  );
}

export default App;
