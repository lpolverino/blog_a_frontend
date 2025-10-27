import { useEffect, useState } from "react"
import fetchApi from "../../../fetch/fetchApi"
import { useParams, useSearchParams } from "react-router"

const UserProfile = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, SetError] = useState(null)

  const { userId } = useParams()
  console.log(userId);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await fetchApi.getUser(localStorage.getItem("token"), userId)
        setUser(user)
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
    return <ul>
    </ul>
  }

  return (
    <>
      <div>UserProfile</div>
      <div>{user && render()}</div>
    </>
  )
}

export default UserProfile