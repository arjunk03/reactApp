export default function ConditionalComponent() {
  const display = true;

  if (display) {
    return (
      <div>
        <h3>This is a Conditional Component </h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Code every day</h3>
      </div>
    );
  }
}
