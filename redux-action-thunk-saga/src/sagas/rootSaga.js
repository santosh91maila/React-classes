import commentsSaga from './commentsSaga';
import photosSaga from './photosSaga'

import {all} from 'redux-saga/effects'

function* rootSaga(){
 return yield all([
    commentsSaga(),
    photosSaga()
  ])
}

export default rootSaga