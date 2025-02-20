"use client"
import { useState } from 'react'
import React from 'react'

export default function Togglebtn() {
    const [isVisible,setisVisible] = useState(false)
  return (
    <div>
        <button  className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setisVisible(!isVisible)} >
            {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <p>Toggle is visible Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit sapiente nesciunt nam ullam voluptates laborum similique voluptas, facilis repudiandae blanditiis quidem repellendus omnis adipisci nobis nihil eum ea esse illo?</p>}
      
    </div>
  )
}

export function Counter() {
    const [count, setCount] = useState(0);
    return(
      <div>
        <p>Count: {count}</p>
        <button  className =" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={()=> setCount(count + 1)}>Increment</button>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={()=> setCount(count - 1)}>Decrement</button>
        <button onClick={()=> setCount(0)}>Reset</button>

      </div>
    )
}

export function TodoList() {
    const [formdata,setformdata]= useState({name: "", email: "",})
    return (
        <div>
            <input type="text" name="name" placeholder='Enter Name' onChange={e => setformdata({...formdata, name: e.target.value})}/>
            <input type="email" name="email" placeholder='Enter Email' onChange={e => setformdata({...formdata, email: e.target.value})}/>
            <p>Name: {formdata.name}</p>
            <p>Email: {formdata.email}</p>
        </div>
    )
}



export function TodoList2() {
  const [todos, setTodos] = useState([]);

  const Addtask = () => {
    setTodos([...todos, `New Todo ${todos.length + 1}`]);
  };

  const Removetask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <button onClick={Addtask}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}  
            <button onClick={() => Removetask(index)}>Remove Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
}



export  function Searchbar() {
  const [search, setSearch] = useState("");
  const users = ["Alice", "Bob", "Charlie", "David", "Eva"];

  const filteredUsers = users.filter(user => user.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <input type="text" placeholder="Search user..." onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {filteredUsers.map((user, index) => <li key={index}>{user}</li>)}
      </ul>
    </div>
  );
}

