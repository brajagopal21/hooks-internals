import React from 'react';
import { useState,useEffect } from 'react';

export default function App() {

  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("hello");
    document.addEventListener('click',handle);
    return ()=>{
      document.removeEventListener('click',handle);
    }
  },[]);

  function handleMinus() {
    setCount(count - 1);
  }

  function handlePlus() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Hooks Internals</h1>
      <button onClick={handleMinus}>Minus</button>
      <span>{count}</span>
      <button onClick={handlePlus}>Plus</button>
    </>
  )
}
