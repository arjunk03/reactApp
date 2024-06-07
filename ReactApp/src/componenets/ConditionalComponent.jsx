import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  const display = false;

  //   if (display) {
  //     return (
  //       <div>
  //         <h3>This is a Conditional Component </h3>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h3>Code every day</h3>
  //       </div>
  //     );
  //   }

  if (display) {
    return <Welcome />;
  } else {
    return <Code />;
  }
}
