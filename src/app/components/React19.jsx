import Gcsform from './Gcsform';

export default function React19() {
  return (
    <div className="w-full">
      <Gcsform />
    </div>
  );
}
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