import {init} from './init'

export const appReducer=(state=init,action)=>{
    switch(action.type){
        case 'USERS':
            return {
                ...state,
                users:action.payload
            }
        case 'POSTS':
                return {
                    ...state,
                    posts:action.payload
                }
        case 'PHOTOS':
            return {
                ...state,
                photos:action.payload
            }
        case 'COMMENTS':
                return {
                    ...state,
                    comments:action.payload
                }
    }
   
    return state;
}