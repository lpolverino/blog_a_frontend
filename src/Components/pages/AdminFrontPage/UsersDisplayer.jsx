import { useEffect, useState } from "react";
import fetchApi from "../../../fetch/fetchApi.js";

const UsersDisplayer = () => {
    const [users, setUsers] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
     const getUsersData = async () => {
      try {
        const fetchedUsers = await fetchApi.getUsers(localStorage.getItem("token"));
        setUsers(fetchedUsers);
      } catch (err) {
        console.error(err);
        SetError(err)
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
                .map(user => <li key={user.id}>{user.Name}</li>)}
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