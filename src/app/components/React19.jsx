import React from 'react'

export default function React19() {
    const name = 'John';
    const age = 30;
    function sayHello() {
         let name = 'Jane';
        let   age= 30;
        return <h1>Hello {name}and age is {age}</h1>
    }
  return (
    <div>
       <div>
       <h1>React 19</h1>
        <p>My name is {name}</p>
        <h2>{sayHello()}</h2>
        <span>{ age<18 ? "ansar" : "Guest"}</span>
       </div>
      
    </div>
  )
}
