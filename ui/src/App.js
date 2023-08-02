import logo from './logo.svg';
import './App.css';
import {Header} from './common/header/Header'
import {Footer} from './common/footer/Footer'
import { BeforeAuthRoutes } from './BeforeAuth/BeforeAuthRoutes';
import {AfterAuthRoutes} from './AfterAuth/AfterAuthRoutes'
import { ToastContainer } from 'react-toastify';
import { Loader } from './common/loader/Loader'
import { useEffect, useReducer } from 'react';
import {init} from './utils/init'
import {appReducer} from './reducers/appReducer'
import {ctx} from './context/appContext'
import { Modal } from './common/modal/Modal'
function App() {
 const [state,dispatch] =useReducer(appReducer,init)
 useEffect(()=>{
  if(sessionStorage.token){
  dispatch({type:'LOGIN',payload:{uid:sessionStorage.uid,token:sessionStorage.token}})
  }
 },[])
  return (
    <div className="App">
      <ctx.Provider value={{state,dispatch}}>
         <Header />
         {state.token ?  <AfterAuthRoutes /> : <BeforeAuthRoutes />}
         <Footer />
        {state.modalInfo.isShowModal &&  <Modal state={state} dispatch={dispatch}  />}
      </ctx.Provider>
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
           {state.isShowLoader && <Loader /> }
    </div>
  );
}

export default App;
