// Mycontext.js
"use client"
import { createContext } from "react";

// Create a context object
export const Biocontext = createContext();

// Create and export the Provider component
export const BioProvider = ({ children }) => {
  const myname = "ansar"; // Use const to declare variables
  const age = 19;
  
  return (
    <Biocontext.Provider value={{ myname, age }}>
      {children}
    </Biocontext.Provider>
  );
};
