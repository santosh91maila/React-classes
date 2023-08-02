import React from 'react'

export const Hero = ({name}) => {
  if(name=='Joker'){
    throw new Error('You are not the Hero')
  }
  return (
    <h1>This is {name}</h1>
  )
}
