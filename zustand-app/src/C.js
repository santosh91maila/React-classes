import React from 'react'
import {useStore} from './store/appStore'
export const C = () => {
  const name=  useStore(state=>state.name)
  return (
    <div>
        <h1>C:{name}</h1>
    </div>
  )
}


