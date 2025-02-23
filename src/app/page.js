// Home.js
"use client";

import Image from "next/image";
import React19 from "./components/React19";
import Togglebtn, { Counter, TodoList, TodoList2, Searchbar } from "./components/Togglebtn";
import { BioProvider } from "./components/ContextApi/Mycontext";
import Child from "./components/ContextApi/Child";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <React19 />
      <Togglebtn />
      <Counter />
      <TodoList />
      <TodoList2 />
      <Searchbar />
      <Searchbar /> */}
      <BioProvider>
        <Child />
      </BioProvider>
    </div>
  );
}
