import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import FrontPage from './Components/FrontPage/FrontPage';
import {UserProvider}  from './Context/UserProvider';
import LogIn from './Components/LogIn/LogIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage></FrontPage>,
  },{

    path:"/login",
    element: <LogIn></LogIn>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  </StrictMode>,
)
