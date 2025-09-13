import { useContext, useEffect } from "react"
import {UserContext} from "../../Context/UserProvider"
import { useNavigate } from "react-router"

const FrontPage = () => {
  const user = useContext(UserContext)
  const navigate  = useNavigate();

  useEffect(()=>{
    console.log(user);
    
    if(!user.logged) navigate("/login", {replace:true})
  },[])

  return (
    <div>{user.logged?"Welcome":"Login"}</div>
  )
}

export default FrontPage