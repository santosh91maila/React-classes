import React, { useContext } from 'react'
import './Modal.css'
import ctx from '../../shared/appContext'
export const Modal = ({state,dispatch}) => {
  //const ctxData=useContext(ctx)
  const {heading}=state.modalInfo
  const fnClick=(bool)=>{
     dispatch({'type':'MODAL',payload:{isShowModal:false}})
     if(bool){
      state.modalInfo.cb()
     }
  }
  return (
    <>
    <div className='mask'>
    
    </div>
    <div className='modal-div py-5'>
       <h3>{heading}</h3>
       <div className='text-end mt-5'>
       <button onClick={()=>fnClick(true)} className='btn btn-primary me-3'>OK</button>
       <button onClick={()=>fnClick(false)} className='btn btn-primary me-3'>CANCEL</button>
       </div>

    </div>
    </>
  )
}
