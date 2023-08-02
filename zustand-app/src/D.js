import React from 'react'
import {useStore} from './store/appStore'
export const D = () => {
   const loc= useStore(state=>state.loc)
  return (
    <h1>D:{loc}</h1>
  )
}
