import { useState } from "react";

export default function From() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  //   function handleChange(evt) {
  //     console.log("change occured");
  //     console.log(evt.target.value);
  //     setName(evt.target.value);
  //   }

  return (
    <div>
      <form>
        <input
          //   onChange={function evnt(e) {
          //     return handleChange(e);
          //   }}
          //   onChange={(e) => handleChange(e)}
          onChange={(e) => setName({ firstName: e.target.value, lastName: "" })}
          type="text"
          value={name.firstName}
          placeholder="First name"
        />
      </form>
    </div>
  );
}
