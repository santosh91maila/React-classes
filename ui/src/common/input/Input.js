import React from 'react'
import {Row,Col} from 'react-bootstrap'

export const Input = ({data}) => {
    const {lbl,name,type,errorMsg,isShowError,value,fnChange,options,values}=data
  const prepareInput=()=>{
       switch(type){
        case 'text':
        case 'password':
        case 'number':
           return <input onChange={fnChange} value={value} name={name} type={type} className="form-control" />
        case 'radio':
            return options.map((v,i)=>{
              return <React.Fragment key={i}><input checked={values[i]==value}  onChange={fnChange} value={values[i]} name={name} type={type} /> <span className='me-3'>{v}</span></React.Fragment>
            })
        case 'checkbox':
              let selValues=value.split(',')
              return options.map((v,i)=>{
                return <React.Fragment key={i}><input checked={selValues.includes(values[i])} onChange={fnChange} value={values[i]} name={name} type={type} /> <span className='me-3'>{v}</span></React.Fragment>
              })
       }
  }
  return <div className='mb-3'>
        <Row>
           <Col sm={5} className="text-end">
             <b>{lbl}:</b>
           </Col>
           <Col sm={3} className='text-start'>
            {prepareInput()}
           </Col>
           <Col sm={4} className="text-start">
           {isShowError && <b className='text-danger'>{errorMsg}</b>}
           </Col>

        </Row>
      
  </div>
}
