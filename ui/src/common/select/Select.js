import React from 'react'
import {Row,Col} from 'react-bootstrap'

export const Select = ({data}) => {
    const {lbl,name,errorMsg,isShowError,value,fnChange,options,values}=data
  
  return <div className='mb-3'>
        <Row>
           <Col sm={5} className="text-end">
             <b>{lbl}:</b>
           </Col>
           <Col sm={3} className='text-start'>
              <select value={value} className='form-control' name={name} onChange={fnChange}>
                    <option value="">Please Select</option>
                    {
                        options.map((val,index)=>{
                            return <option value={values[index]} key={index}>{val}</option>
                        })
                    }
              </select>
           </Col>
           <Col sm={4} className="text-start">
           {isShowError && <b className='text-danger'>{errorMsg}</b>}
           </Col>

        </Row>
      
  </div>
}
