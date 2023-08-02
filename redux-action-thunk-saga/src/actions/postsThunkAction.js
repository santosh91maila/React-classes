import { ServerCall } from "../ServerCall";

export const postsThunkAction=()=>{
    return (dispatch,getState)=>{
        const state=getState();
        if(state.appReducer.posts.length>0)return;
        ServerCall.fnSendGetReq('http://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            dispatch({
                type:'POSTS',
                payload:res.data
            })
        })
        .catch(()=>{

        })
    }
}