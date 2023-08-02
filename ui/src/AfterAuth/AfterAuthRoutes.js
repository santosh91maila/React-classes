import React, { useContext } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
    redirect
  } from "react-router-dom";
import './AfterAuthRoutes.css'
import { Home } from './home/Home';
import { Profile } from './profile/Profile';
import {ctx} from '../context/appContext'
export const AfterAuthRoutes = () => {
const ctxData=useContext(ctx);
const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
            path: "/profile",
            element: <Profile />,
        },
        {
            path: "*",
            element: <Navigate to={`${ctxData.state.token ? '/home' : '/login'}`} />,
        },
      ]);
  const fnLogout=()=>{
    sessionStorage.clear();
    ctxData.dispatch({type:'LOGOUT'})
    return redirect("/login");
  }
  const fnConfirm=()=>{
    ctxData.dispatch({type:'MODAL',payload:{isShowModal:true,heading:'R U Sure, You want me to Logout ?',cb:fnLogout}})
  }
  return (
    <div className="mb-5">
     <nav>
          <ul className='menu'>
            <li>
              <a href={`home`}>Home</a>
            </li>
            <li>
              <a href={`profile`}>Profile</a>
            </li>
            <li>
              <a onClick={fnConfirm} >Logout</a>
            </li>
          </ul>
        </nav>
    <RouterProvider router={router}>
    </RouterProvider>
  </div>
  )
}
