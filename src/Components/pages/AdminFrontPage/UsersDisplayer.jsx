import { useEffect, useState } from "react";
import fetchApi from "../../../fetch/fetchApi.js";
import { useNavigate } from "react-router";

const UsersDisplayer = () => {
    const [users, setUsers] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate()

    useEffect(()=>{
     const getUsersData = async () => {
      try {
        const fetchedUsers = await fetchApi.getUsers(localStorage.getItem("token"));
        setUsers(fetchedUsers);
      } catch (err) {
        console.error(err);
        setError(err)
      } finally {
        SetLoading(false);
      }
    }
    getUsersData();
    },[])

    const render = () =>{
        return (<>
            <ul>
                {users
                .filter(user => user.rol ==="USER")
                .map(user => 
                  <li
                    onClick={()=>navigate("/user/"+user.id, {replace:true})}
                    key={user.id}>
                      {user.Name}
                    </li>)}
            </ul>
        </>)
    }

    return (
        <div>
            {loading ? "Loading.."
                : error ? <ErrorInput error={error}></ErrorInput> : render()
            }
        </div>
    )
}

export default UsersDisplayer