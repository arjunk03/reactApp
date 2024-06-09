export default function Message() {
  function handleClick() {
    alert("Clicked the buttom");
  }

  return (
    <div>
      <button onClick={handleClick}>Click here to get a message</button>
    </div>
  );
}
