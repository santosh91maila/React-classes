
import './App.css';
import {usersAction} from './actions/usersAction'
import {postsThunkAction} from './actions/postsThunkAction'
import {bindActionCreators} from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'
function App() {
  const dispatch=useDispatch()
  const fnGetUsers=()=>{
    usersAction()
  }
  const fnGetPosts=()=>{
    bindActionCreators(postsThunkAction,dispatch)()
  }
  const fnGetPhotos=()=>{
    dispatch({
      type:'GET_PHOTOS'
    })
  }

  const fnGetComments=()=>{
    dispatch({
      type:'GET_COMMENTS'
    })
  }
 
  return (
    <div className="App">
      <button onClick={fnGetUsers}>Get Users</button>
      <button onClick={fnGetPosts}>Get Posts</button>
      <button onClick={fnGetPhotos}>Get Photos</button>
      <button onClick={fnGetComments}>Get Comments</button>

    </div>
  );
}

export default App;
