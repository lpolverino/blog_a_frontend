import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import {UserProvider}  from './Context/UserProvider';

import FrontPage from './Components/pages/FrontPage/FrontPage';
import LogIn from './Components/pages/LogIn/LogIn';
import NotFound from './Components/pages/404/NorFound';
import SignUp from './Components/pages/SignUp/SignUp';
import UserProfile from './Components/pages/UserProfile/UserProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage></FrontPage>,
    errorElement:<NotFound></NotFound>
  },{
    path:"/login",
    element: <LogIn></LogIn>,
    errorElement:<NotFound></NotFound>
  },
  {
    path:"/signup",
    element:<SignUp></SignUp>,
    errorElement:<NotFound></NotFound>
  },
  {
    path:"/user/*",
    element:<UserProfile></UserProfile>,
    errorElement: <NotFound></NotFound>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  </StrictMode>,
)
