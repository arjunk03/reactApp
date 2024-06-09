import { useState } from "react";

export default function From() {
  const [name, setName] = useState("");
  function handleChange() {
    console.log("change occured");
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          type="text"
          value={name}
          placeholder="First name"
        />
      </form>
    </div>
  );
}
