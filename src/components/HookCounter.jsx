import React from 'react'
import { useState } from 'react'


export default function HookCounter() {
  const[count,setCount]= useState(0)
  console.log("welcome")
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}