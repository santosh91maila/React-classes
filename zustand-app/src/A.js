import React, { useRef } from 'react'
import {useStore} from './store/appStore'
export const A = () => {
    const nameRef=useRef()
    const set=useStore((state)=>{
       return   state.set
    })
    const get=useStore((state)=>{
        return   state.get
     })
    const fnSubmit=()=>{
       const name= nameRef.current.value;
       console.log(get())
       set({name:name})
    }
  return (
    <div>
        <h1>A</h1>
        <p>Name:<input ref={nameRef} /></p>
        <button onClick={fnSubmit}>Submit</button>
    </div>
  )
}
