import React from 'react'

export const Salary = ({name,sal}) => {
    
  if(sal< 0){
    throw new Error('Sal should +ve')
  }
  return (
    <h1>{`This is ${name} , salary is ${sal}`}</h1>
  )
}
