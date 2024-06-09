import { useState } from "react";

export default function From() {
  const [name, setName] = useState("");
  function handleChange(evt) {
    console.log("change occured");
    console.log(evt.target.value);
    setName(evt.target.value);
  }

  return (
    <div>
      <form>
        <input
          //   onChange={function evnt(e) {
          //     return handleChange(e);
          //   }}
          onChange={(e) => handleChange(e)}
          type="text"
          value={name}
          placeholder="First name"
        />
      </form>
    </div>
  );
}
