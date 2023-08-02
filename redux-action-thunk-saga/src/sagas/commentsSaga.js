import {takeLatest,call,put} from 'redux-saga/effects'
import { ServerCall } from '../ServerCall'
function* getComments(){
   const res=yield call(ServerCall.fnSendGetReq, 'http://jsonplaceholder.typicode.com/comments');
   yield put({
    type:'COMMENTS',
    payload:res.data
   })
}


function* commentsSaga(){
     // 1 sagas
   yield takeLatest('GET_COMMENTS',getComments)
}

export default commentsSaga


