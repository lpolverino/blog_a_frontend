import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import FrontPage from './Components/FrontPage/FrontPage';
import { LogInContext } from './Context/logContext';
import LogIn from './Components/LogIn/LogIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage></FrontPage>,
    children:[{
      path:"login",
      element: <LogIn></LogIn>
      }]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LogInContext value={{logged:false}}>
      <RouterProvider router={router}></RouterProvider>
    </LogInContext>
  </StrictMode>,
)
