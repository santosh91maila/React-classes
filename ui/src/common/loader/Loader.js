import React from 'react'
import './Loader.css'
export const Loader = () => {
  return (
    <div>
        <div className='mask'></div>
        <img className='loader' src="loader.gif"></img>
    </div>
  )
}
