import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import FrontPage from './Components/FrontPage/FrontPage';
import {UserProvider}  from './Context/UserProvider';
import LogIn from './Components/LogIn/LogIn';
import NotFound from './Components/404/NorFound';

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
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  </StrictMode>,
)
