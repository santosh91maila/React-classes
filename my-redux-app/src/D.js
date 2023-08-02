import React, { useState } from 'react'
import {connect, useSelector} from 'react-redux'
import { appStore } from './store'
/*
let D = (props) => {
  return (
    <div>
        <h1>D:{props.l}</h1>
    </div>
  )
}


 D=connect(
  (state)=>{
    return {
       l:state.myReducer.loc
    }
  },
  (dispatch)=>{
    return {

    }
  }
)(D)

export default D;
*/

/*
const D = () => {
  const loc=useSelector((state)=>{
     return state.myReducer.loc
  })
  return (
    <div>
        <h1>D:{loc}</h1>
    </div>
  )
}

export default D;

*/

const D = () => {
  const [loc,setLoc]=useState('')
  appStore.subscribe(()=>{
    const state=appStore.getState()
    setLoc(state.myReducer.loc)
  })
  

  return (
    <div>
        <h1>D:{loc}</h1>
    </div>
  )
}

export default D;
