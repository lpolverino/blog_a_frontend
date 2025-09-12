import { useContext, useEffect } from "react"
import { LogInContext } from "../../Context/logContext"
import { useNavigate } from "react-router"

const FrontPage = () => {
  const {logged} = useContext(LogInContext)
  const navigate  = useNavigate();

  useEffect(()=>{
    if(!logged) navigate("login")
  },[])

  return (
    <div>{logged?"Welcome":"Login"}</div>
  )
}

export default FrontPage