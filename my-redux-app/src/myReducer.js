
import {locInit} from './init'

const myReducer=(state=locInit,action)=>{
    switch(action.type){
        case 'LOC_CHANGE':
            return {
                ...state,
                loc:action.payload
             }
    }
   
    return state
}



export default myReducer


