import { useContext, useEffect, useState } from "react"
import fetchApi from "../../../fetch/fetchApi"
import { useParams, useSearchParams } from "react-router"
import ErrorInput from "../../Shered/ErrorInput/ErrorInput"
import { UserContext } from "../../../Context/UserProvider"

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, SetError] = useState(null)

  const { userId } = useParams()

  const {user, setUser} = useContext(UserContext)

  useEffect(() => {
    const getUser = async () => {
      try {
        const fetchedUser = await fetchApi.getUser(localStorage.getItem("token"), userId)
        setCurrentUser(fetchedUser)
      } catch (err) {
        console.error(err);
        SetError(err)
      } finally {
        setLoading(false)
      }
    }
    getUser()
  }, [userId])

  const render = () =>{
    return (
      <div>
        <h1>{currentUser.Name}</h1>
        {user.user.rol === "ADMIN" && <button>Delete User</button>}
      </div>
    )
  }

  return (
    <>
      <div>{loading 
        ? <p>Loading..</p> 
        : error 
          ?<ErrorInput error={error}></ErrorInput>
          : currentUser && render()
      }</div>
    </>
  )
}

export default UserProfile