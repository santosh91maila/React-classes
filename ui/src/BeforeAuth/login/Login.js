import React, { useContext, useEffect, useState } from 'react'
import './Login.css'
import {loginInputControls} from './Login.config'
import { Input } from '../../common/input/Input'
import {Link} from 'react-router-dom'
import ServerCall from '../../shared/ServerCall'
import {toast } from 'react-toastify';
import {ctx} from '../../context/appContext'
export const Login = () => {
  const [template,setTemplate]=useState('')
  const ctxData=useContext(ctx)
  useEffect(()=>{
    prepareTemplate()
  },[])

  const fnChange=(eve)=>{
    const {name,value}=eve.target
    const _obj=loginInputControls.find(obj=>obj.name==name)
    _obj.value=value;
    _obj.isShowError=value ? false : true
    prepareTemplate()

  }
  const prepareTemplate=()=>{
      setTemplate(loginInputControls.map((obj,index)=><Input key={index} data={{...obj,fnChange}}  />))
  }
  const fnLogin=async()=>{
    let isFormValid=true
    let dataObj={}
    loginInputControls.forEach((obj)=>{
        if(!obj.value){
          isFormValid=false
          obj.isShowError=true
        }
        dataObj[obj.name]=obj.value
    })
    prepareTemplate();
    if(!isFormValid)return
    ctxData.dispatch({type:'LOADER',payload:true})
    const res=await ServerCall.fnSendPost('student/login',{data:dataObj})
    ctxData.dispatch({type:'LOADER',payload:false})
    if(res.data.length > 0){
      const {token,uid,_id}=res.data[0]
      sessionStorage.token=token;
      sessionStorage.setItem('uid',uid)
      sessionStorage.id=_id;
      ctxData.dispatch({type:'LOGIN',payload:{uid,token}})
    }else{
      toast.error('Please Check Entered User id or Password')
    }
  }
  return (
    <div className='container-fluid'>
      <h2 className='text-center mb-3'>Login</h2>
      {template}
      <div className='row'>
        <div className='offset-sm-5 col-sm-7 text-start'>
          <button onClick={fnLogin} className='btn btn-primary me-3'>Login</button>
          <Link to="/register">Go To Register</Link>
        </div>
      </div>
    </div>
  )
}
