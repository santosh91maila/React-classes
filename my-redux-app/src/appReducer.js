
import {nameInit} from './init'

const appReducer=(state=nameInit,action)=>{
    switch(action.type){
        case 'NAME_CHANGE':
            return{
                ...state,
                name:action.payload
             }
       
    }
   
    return state
}



export default appReducer


