import React from 'react'
import {useDispatch} from 'react-redux'
export const B = () => {
  let locRef=React.useRef()
  const dispatch=useDispatch()
  const fnClick=()=>{
    let loc=locRef.current.value
    dispatch({
      type:'LOC_CHANGE',
      payload:loc
    })
  }
  return (
    <div>
        <h1>B </h1>
        <p>
            Location:<input ref={locRef} />
        </p>
        <button onClick={fnClick}>Submit</button>
    </div>
  )
}
