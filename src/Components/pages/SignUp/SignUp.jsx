import { useContext, useState } from "react"
import Input from "../../Shered/Input/Input";
import fetchApi from "../../../fetch/fetchApi";
import { UserContext } from "../../../Context/UserProvider";
import { replace, useNavigate } from "react-router";

const SignUp = () => {
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repetedPassword, setRepetedPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const verifyValues = () =>{
      if(name.length < 4) {
        throw new Error("Name to short");
      }
  
      if(!email.includes("@")){
        throw new Error("invalid email");
      }
  
      if(password.length<4){
        throw new Error("password to short");
      }
  
      if(password != repetedPassword){
        throw new Error("password dosent match");
      }
    }  

    const signUpHandler = async()=>{
      setLoading(true);
      try{
        verifyValues()
        const response = await fetchApi.submitNewUser(email, name, password);
        localStorage.setItem("token",response.token);
        setUser((user)=>{
          return {
            ...user,
            logged:true,
          }
        });
        navigate("/", {replace:true});
      }catch(err){
        console.error(err);
        setError(err);
      }finally{
        setLoading(false)
      }
    }

    return (
  <div>
    <h1>Sign Up!</h1>
    <div>{error&&error.message}</div>
    <div>
      <Input name="name" value={name} setValue={setName} type={"text"}></Input>
      <Input name="email" value={email} setValue={setEmail} type={"text"}></Input>
      <Input name="password" value={password} setValue={setPassword} type={"password"}></Input>
      <Input name="Repeat password" value={repetedPassword} setValue={setRepetedPassword} type={"password"}></Input>
    </div>
    <div>
      <button onClick={signUpHandler} disabled={loading}>SignUp!</button>
    </div>
  </div>
  )
}

export default SignUp