import React, { useContext, useEffect, useState } from 'react'
import './Register.css'
import {regInputControls} from './Register.config'
import {Link} from 'react-router-dom'
import { Input } from '../../common/input/Input'
import {Select} from '../../common/select/Select'
import {TextArea} from '../../common/textarea/TextArea'
import {fnRegValidations} from './RegValidations'
import ServerCall from '../../shared/ServerCall'
import {toast } from 'react-toastify';
import {ctx} from '../../context/appContext'
export const Register = () => {
  const [template,setTemplate]= useState('')
  const [dataObj,setDataObj]=useState({})
  const ctxData=useContext(ctx)
  useEffect(()=>{
    prepareTemplate()
  },[])
  const fnChange=(eve)=>{
    const {name,value,checked,type}= eve.target
    let _inputControl=regInputControls.find((obj)=>obj.name==name)

    if(type=='checkbox'){
        let _checkedValues=_inputControl.value ? _inputControl.value.split(','):[]
        if(checked){
          _checkedValues.push(value)
        }else{
            _checkedValues.splice(_checkedValues.indexOf(value),1)
        }
        setDataObj((data)=>{
          return {...data,[name]:_checkedValues.join(',')}
        })
        fnRegValidations(_checkedValues.join(','),_inputControl)
    }else{
      setDataObj((data)=>{
        return {...data,[name]:value}
      })
      fnRegValidations(value,_inputControl)
    }
    
    
    prepareTemplate()
  }
  const prepareTemplate=()=>{
    let inputControlsArr=regInputControls.map((obj,index)=>{
      switch(obj.tag){
       case 'input':
         return <Input key={index} data={{...obj,fnChange}} />
       case 'select':
          return <Select key={index} data={{...obj,fnChange}} />
       case 'textarea':
          return <TextArea key={index} data={{...obj,fnChange}} />
      }
 })
 setTemplate(inputControlsArr)
  }
  const fnReset=()=>{
    regInputControls.forEach((obj)=>{
      obj.value=''
    })
    prepareTemplate()
  }
  const fnRegister=()=>{
    regInputControls.forEach((obj)=>{
        fnRegValidations(obj.value,obj)
    })
    let bool=regInputControls.some((obj)=>obj.errorMsg !='')
    prepareTemplate()
    if(bool)return;
    ctxData.dispatch({type:'LOADER',payload:true})
    ServerCall.fnSendPost('student/reg-std',{data:dataObj})
    .then((res)=>{
      const {acknowledged,insertedId}=res.data
      if(acknowledged && insertedId){
        toast.success('Successfully Registered');
        fnReset()
      }else{
        toast.error('Not registered, try again');
      }
      ctxData.dispatch({type:'LOADER',payload:false})
    })
    .catch((res)=>{
      toast.error('Something went wrong');
      ctxData.dispatch({type:'LOADER',payload:false})
    })
  }
  return (
    <div className='container-fluid'>
      <h2 className='text-center mb-3'>Register</h2>
      {template}
      <div className='row'>
        <div className='offset-sm-5 col-sm-7 text-start'>
          <button onClick={fnRegister} className='btn btn-primary me-3'>Register</button>
          <Link to="/login">Go To Login</Link>
        </div>
      </div>
    </div>
  )
}
