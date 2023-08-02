import React from 'react'

export const NitList = (props) => {
  const {title,data}=props;
  return (
    <div>
        <h1>{title}</h1>
        <ol>
        {
            data.map((val,ind)=>{
                return <li key={ind}>{val}</li>
            })
        }
        </ol>
    </div>
  )
}
