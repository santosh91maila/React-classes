1. create react application

   create-react-app <app name>

2. install zustand lib 

   npm i zustand

3. create init.js file and keep your initial data

   export const init={
      name:'',
      loc:''
    }

4. create store 

import {create} from "zustand";
import { init } from "../utils/init";

export const useStore=create((set,get)=>{
     return {
        ...init,
        set,
        get
     }
})

5. create components, ready with your data to set 

import React, { useRef } from 'react'
import {useStore} from './store/appStore'
export const A = () => {
    const nameRef=useRef()
    const set=useStore((state)=>{
       return   state.set
    })
    const fnSubmit=()=>{
       const name= nameRef.current.value;
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

6. get the data from store

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
