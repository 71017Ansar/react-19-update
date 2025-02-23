// "use client";
// import { useState } from "react";

// export default function MyButton() {
//   const [text,setText]=useState("");

//   const handleChange=(e)=>{

//     setText(e.target.value);
//     console.log(text);
//   }
 

 

//   return (
//     <div>
//       <input type="text" value={text} onChange={handleChange} />
//       <p>{text}</p>
//     </div>
//   );
// }


export  const Children=({onClick})=>{
  return(
    <div>
        <h1>React 19</h1>
        <p>My name is {name}</p>
        <h2>{sayHello()}</h2>
        <span>{ age<18 ? "ansar" : "Guest"}</span>
      
    </div>
  )
}