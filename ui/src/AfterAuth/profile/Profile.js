import React, { useContext, useEffect, useState } from 'react'
import './Profile.css'
import {profileInputControls} from './Profile.config'
import { Input } from '../../common/input/Input'
import {Select} from '../../common/select/Select'
import {TextArea} from '../../common/textarea/TextArea'
import {Text} from '../../common/text/Text'
import {fnProfileValidations} from './profileValidations'
import ServerCall from '../../shared/ServerCall'
import {toast } from 'react-toastify';
import {ctx} from '../../context/appContext'
import {redirect} from 'react-router-dom'
export const Profile = () => {
  const [template,setTemplate]= useState('')
  const [dataObj,setDataObj]=useState({})
  const ctxData=useContext(ctx)
  useEffect(()=>{
    getUserInfo()
  },[])
  const getUserInfo=async()=>{
    ctxData.dispatch({'type':'LOADER',payload:true})
    const res=await ServerCall.fnSendGet(`student/get-std-by-id?id=${sessionStorage.id}`)
     let user=res.data[0];
     profileInputControls.forEach((obj)=>{
        obj.value=user[obj.name]
     })
     prepareTemplate()
    ctxData.dispatch({'type':'LOADER',payload:false})

  }
  const fnChange=(eve)=>{
    const {name,value,checked,type}= eve.target
    let _inputControl=profileInputControls.find((obj)=>obj.name==name)

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
        fnProfileValidations(_checkedValues.join(','),_inputControl)
    }else{
      setDataObj((data)=>{
        return {...data,[name]:value}
      })
      fnProfileValidations(value,_inputControl)
    }
    prepareTemplate()
  }
  const prepareTemplate=()=>{
    let inputControlsArr=profileInputControls.map((obj,index)=>{
      switch(obj.tag){
       case 'input':
         return <Input key={index} data={{...obj,fnChange}} />
       case 'select':
          return <Select key={index} data={{...obj,fnChange}} />
       case 'textarea':
          return <TextArea key={index} data={{...obj,fnChange}} />
       case 'h3':
            return <Text key={index} data={{...obj}} />
      }
 })
 setTemplate(inputControlsArr)
  }

  const fnUpdate=()=>{
    let dataObj={}
    profileInputControls.forEach((obj)=>{
        fnProfileValidations(obj.value,obj)
        dataObj[obj.name]=obj.value
    })
    let bool=profileInputControls.some((obj)=>obj.errorMsg !='')
    if(bool){
      prepareTemplate()
      return;
    }
    ctxData.dispatch({type:'LOADER',payload:true})
    ServerCall.fnSendPut(`student/update-std?id=${sessionStorage.id}`,{data:dataObj})
    .then((res)=>{
      const {acknowledged,modifiedCount}=res.data
      if(acknowledged && modifiedCount){
        toast.success('Successfully Updated');
      }else{
        toast.error('Not Updated, try again');
      }
      ctxData.dispatch({type:'LOADER',payload:false})
    })
    .catch((res)=>{
      toast.error('Something went wrong');
      ctxData.dispatch({type:'LOADER',payload:false})
    })
  }
  const fnTerminate=()=>{
    ctxData.dispatch({type:'LOADER',payload:true})
    ServerCall.fnSendDelete(`student/del-std/${sessionStorage.id}`)
    .then((res)=>{
      ctxData.dispatch({type:'LOADER',payload:false})
      const {acknowledged,deletedCount}=res.data
      if(acknowledged && deletedCount){
        toast.success('Successfully Terminated Your Account');
        sessionStorage.clear();
        ctxData.dispatch({type:'LOGOUT'})
        return redirect("/login");
      }else{
        toast.error('Not Termincated, try again');
      }
    })
    .catch((res)=>{
      ctxData.dispatch({type:'LOADER',payload:false})
      toast.error('Something went wrong');
    })
  }
  const fnConfirm=()=>{
    ctxData.dispatch({type:'MODAL',payload:{isShowModal:true,heading:'R U Sure..',cb:fnTerminate}})
  }
  return (
    <div className='container-fluid'>
      <h2 className='text-center mt-3 mb-5'>MY Profile</h2>
      {template}
      <div className='row'>
        <div className='offset-sm-5 col-sm-7 text-start'>
          <button onClick={fnUpdate} className='btn btn-primary me-3'>Update</button>
          <button onClick={fnConfirm} className='btn btn-primary me-3'>Terminate</button>
         
        </div>
      </div>
    </div>
  )
}
