import { useContext, useState } from "react";
import fetchApi from "../../fetch/fetchApi"
import { useNavigate } from "react-router";
import { UserContext } from "../../Context/UserProvider";

const LogIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const user = useContext(UserContext);

  const enterHandler = async () =>{
    setLoading(true);
    try{
      const response = await fetchApi.submitUser(email, password);
      localStorage.setItem("token", response.token)
      user.setUser((user)=>{
        return{ ...user,
          logged:true}
      });

      navigate("/",{replace:true});
    }catch(err){
      console.log(err);
      setError(err);
    }finally{
      setLoading(false);
    }
  }
  return (
    <div>
      <div>
        <h1>Log In</h1>
        <div>
          <form>
            <label>Email:</label>
            <input type='text' onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <label>Password</label>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
          </form>
        </div>
        <div>
          <button onClick={enterHandler}>Enter</button>
          <button>Register</button>
        </div>
        <div>
          {error && error.errors?"muchos errores":"error"}
        </div>
        <div>
          {loading}
        </div>
      </div>
    </div>
  )
}

export default LogIn