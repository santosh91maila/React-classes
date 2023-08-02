import { takeLatest,call,put } from "redux-saga/effects"
import { ServerCall } from "../ServerCall";

function* getPhotos(){
  const res= yield call(ServerCall.fnSendGetReq,'http://jsonplaceholder.typicode.com/photos')
  yield put({
    type:'PHOTOS',
    payload:res.data
  })
}

function* setPhoto(){

}


function* photosSaga(){
    // 2 sagas
    yield takeLatest('GET_PHOTOS',getPhotos);
    yield takeLatest('SET_PHOTOS',setPhoto)

}

export default photosSaga