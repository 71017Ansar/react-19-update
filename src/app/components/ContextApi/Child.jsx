// Child.js
import React, { useContext } from "react";
import { Biocontext } from "./Mycontext"; // Import the context object

export default function Child() {
  // Consume the context using the context object
  const { myname, age } = useContext(Biocontext);

  return (
    <div className="bg-red-900 text-white font-bold text-center p-4">
      usecontext using here
      <p>Name: {myname}</p>
      <p>Age: {age}</p>
    </div>
  );
}
