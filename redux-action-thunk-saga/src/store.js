import {configureStore} from '@reduxjs/toolkit'
import {appReducer} from './appReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './sagas/rootSaga'

const sagaMiddleware=createSagaMiddleware()
export const appStore=configureStore({
    reducer:{
        appReducer
    },
    middleware:[logger,thunk,sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

