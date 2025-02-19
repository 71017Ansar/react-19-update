"use client";
export default function MyButton() {
  const handleClick = (event,message) => {
    alert (message)
    console.log("Button clicked", event.target);
  };

 

  return (
    <div>
      <button onClick={(event)=>handleClick(event,"hello failler boy ")}>Click Me</button>

      <div>
        {/* ✅ Pass the event object correctly */}
      
      </div>
    </div>
  );
}
