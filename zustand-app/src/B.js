import React, { useRef } from 'react'
import {useStore} from './store/appStore'
export const B = () => {
  const locRef=useRef()
  const set=useStore(state=>state.set)
  const fnSubmit=()=>{
    const loc=locRef.current.value;
    set({loc:loc})
  }
  return (
    <div>
         <h1>B</h1>
        <p>Location:<input ref={locRef} /></p>
        <button onClick={fnSubmit}>Submit</button>
    </div>
  )
}
