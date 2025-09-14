import React from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {
  
  const navigate = useNavigate();

  return (<>
    <div>Page Not Found</div>
    <button onClick={()=>navigate("/")}>Go home</button>
  </>
  )
}

export default NotFound