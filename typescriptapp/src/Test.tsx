import React from 'react'

type schinType={
    name:string,
    runs:number
}
type propsType={
    name:string,
    amount?:number|string,
    opt:'S'|'D'
    isShow:boolean
    sachinObj:schinType,
    players:(number|string)[]
    data:schinType[]
    f1:(e:React.ChangeEvent<HTMLInputElement>)=>void
    f2:(e:React.MouseEvent<HTMLButtonElement>)=>void
    myStyles:React.CSSProperties
 }
export const Test = (props:propsType) => {
  return (
    <div>Test : {props.name}
    <p>{props.amount}</p>
    <p>{props.opt=='S' ? 'Sachin' : 'Dhoni'} </p>
    <p>{props.isShow && 'Kohli' }</p>
    <p>{props.sachinObj.name}</p>

    <p>
      <input onChange={props.f1} />
      <button onClick={props.f2}>click</button>
    </p>

    <div style={props.myStyles}>sachin</div>;
    </div>
  )
}
