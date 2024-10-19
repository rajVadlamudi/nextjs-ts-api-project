"use client"
import { useState, FormEvent } from "react";
export default function Home() {
  const [inputVal, updateVal] = useState("") 
  const handleSubmit = (event:FormEvent) => {
    event.preventDefault();
  }
  return (
    <div>
    <div>
      <h1>Enter your name:</h1>
    </div>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Type ypur name..."
      value={inputVal}
      onChange={(e)=> updateVal(e.target.value)} />
      <button type="submit">Predict Data</button>
    </form>
    </div>
  );
}
