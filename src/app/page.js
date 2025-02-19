"use client"
import Image from "next/image";
import React19, { Children } from "@/app/components/React19";

export default function Home() {
  const onClickButtonHandling =(event, message)=>{
    alert(message)
    console.log(event.target.value)
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <h1>parant components</h1>
      <Children  onClick={ (event) => onClickButtonHandling(  event, 'Hello World! event handling')}/>
    </div>
  );
}
