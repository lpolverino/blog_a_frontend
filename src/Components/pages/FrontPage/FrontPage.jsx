import { useContext, useEffect } from "react"
import {UserContext} from "../../../Context/UserProvider"
import { useNavigate } from "react-router"
import UserFrontPage from "../UserFrontPage/UserFrontPage"
import AdminFrontPage from "../AdminFrontPage/AdminFrontPage"
import Footer from "../../Shered/Footer/Footer"
import Header from "../../Shered/Header/Header"

const FrontPage = () => {
  const {user, setUser} = useContext(UserContext)
  const navigate  = useNavigate();

  useEffect(()=>{
    console.log(user.logged);
    if(!user.logged) navigate("/login", {replace:true})
  },[])

  return (
    <>
    <Header></Header>
    {(user.user && user.user.rol==="USER")
      ? <UserFrontPage></UserFrontPage>
      : <AdminFrontPage></AdminFrontPage>
    }
    <Footer></Footer>
    </>
  )
}

export default FrontPage