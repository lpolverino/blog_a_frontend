import { useContext, useState } from "react";
import fetchApi from "../../../fetch/fetchApi"
import { useNavigate } from "react-router";
import { UserContext } from "../../../Context/UserProvider";
import Input from "../../Shered/Input/Input";
import ErrorInput from "../../Shered/ErrorInput/ErrorInput";

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
            <Input name={"email"} value={email} setValue={setEmail} type={"text"}></Input>
            <Input name={"password"} value={password} setValue={setPassword} type={"password"}></Input>
          </form>
        </div>
        <div>
          <button onClick={enterHandler} disabled={loading}>Enter</button>
          <button onClick={()=>navigate("/signup")} disabled={loading}>Register</button>
        </div>
        <div>
          <ErrorInput error={error}></ErrorInput>
        </div>
        <div>
          {loading}
        </div>
      </div>
    </div>
  )
}

export default LogIn