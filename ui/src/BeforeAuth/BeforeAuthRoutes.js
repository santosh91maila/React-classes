import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Navigate
  } from "react-router-dom";
import { Login } from './login/Login';
import { Register } from './register/Register';
export const BeforeAuthRoutes = () => {
const router = createBrowserRouter([
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        }
      ]);
  return (
    <div className="mb-5"><RouterProvider router={router} /></div>
  )
}
