import React, { useState } from 'react'

export const CountInc = () => {
  const [count,setCount]=useState(0)
  const fnClick=()=>{
    setCount(count+1)
  }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={fnClick}>Increment</button>
    </div>
  )
}
