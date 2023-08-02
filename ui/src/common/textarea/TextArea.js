import React from 'react'
import {Row,Col} from 'react-bootstrap'

export const TextArea = ({data}) => {
    const {lbl,name,errorMsg,isShowError,value,fnChange}=data
 
  return <div className='mb-3'>
        <Row>
           <Col sm={5} className="text-end">
             <b>{lbl}:</b>
           </Col>
           <Col sm={3} className='text-start'>
             <textarea className='form-control' name={name} onChange={fnChange} value={value} ></textarea>
           </Col>
           <Col sm={4} className="text-start">
           {isShowError && <b className='text-danger'>{errorMsg}</b>}
           </Col>

        </Row>
      
  </div>
}
