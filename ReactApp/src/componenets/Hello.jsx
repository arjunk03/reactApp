const name = "Arjun";

function displayMessage() {
  return "Woww!!";
}

function Hello() {
  return (
    <div>
      <h1>Hello from a component , {displayMessage()}</h1>
      <h2>Good morning</h2>
    </div>
  );
}

export default Hello;
