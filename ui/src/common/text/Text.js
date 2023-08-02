import React from 'react'
import {Row,Col} from 'react-bootstrap'

export const Text = ({data}) => {
    const {lbl,value}=data
  
  return <div className='mb-3'>
        <Row>
           <Col sm={5} className="text-end">
             <b>{lbl}:</b>
           </Col>
           <Col sm={3} className='text-start'>
             <h3>{value}</h3>
           </Col>
        </Row>
      
  </div>
}
