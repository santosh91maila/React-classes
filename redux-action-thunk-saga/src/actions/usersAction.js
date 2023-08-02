import {ServerCall} from '../ServerCall'
import {appStore} from '../store'
export const usersAction=()=>{
    ServerCall.fnSendGetReq('http://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      appStore.dispatch({
        type:'USERS',
        payload:res.data
      })
    })
    .catch(()=>{

    })
}
