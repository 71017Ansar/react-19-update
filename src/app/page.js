import Image from "next/image";
import Gcsform from "./components/Gcsform";
// import React19 from "./components/React19";

export default function Home() {
  const onClickButtonHandling =(event, message)=>{
    alert(message)
    console.log(event.target.value)
  }
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <React19 /> */}
      <Gcsform/>
    </div>
  );
}
