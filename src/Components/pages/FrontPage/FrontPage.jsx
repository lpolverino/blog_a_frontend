import { useContext, useEffect } from "react"
import {UserContext} from "../../../Context/UserProvider"
import { Outlet, useLocation, useNavigate } from "react-router"
import UserFrontPage from "../UserFrontPage/UserFrontPage"
import AdminFrontPage from "../AdminFrontPage/AdminFrontPage"
import Footer from "../../Shered/Footer/Footer"
import Header from "../../Shered/Header/Header"

const FrontPage = () => {
  const {user, setUser} = useContext(UserContext)
  
  const navigate  = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    if(!user.logged) navigate("/login", {replace:true})
  },[])

  const render = () =>{
    if(location.pathname !== "/") {
      return <Outlet></Outlet>
    }
    return (
      <>
      {(user.user && user.user.rol==="USER")
        ? <UserFrontPage></UserFrontPage>
        : <AdminFrontPage></AdminFrontPage>
      }
      </> 
    )
  }
  
  return (
    <>
    <Header></Header>
    {render()}
    <Footer></Footer>
    </>
  )
}

export default FrontPage