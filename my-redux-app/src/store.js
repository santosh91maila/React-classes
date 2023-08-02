import {configureStore} from '@reduxjs/toolkit'
import appReducer from './appReducer'
import myReducer from './myReducer'
import logger from 'redux-logger'
export const appStore=configureStore({
    reducer:{
       appReducer,
       myReducer
    },
    middleware:[logger]
})




