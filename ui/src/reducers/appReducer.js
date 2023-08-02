export const appReducer=(state,action)=>{
    switch(action.type){
        case 'LOGIN':
            state={
                ...state,
                loggedInUser:action.payload.uid,
                token:action.payload.token
            }
            break;
        case 'LOGOUT':
            state={
                ...state,
                loggedInUser:'',
                token:''
            }
            break;
        case 'LOADER':
            state={
                ...state,
                isShowLoader:action.payload,
            }
            break;
        case 'MODAL':
                state={
                    ...state,
                    modalInfo:{
                        ...state.modalInfo,
                        ...action.payload
                    }
                }
                break;
    }
    return state;
}