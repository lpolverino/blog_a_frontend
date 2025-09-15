import { useState } from "react"
import Input from "../../Shered/Input/Input";

const SignUp = () => {
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repetedPassword, setRepetedPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const verifyValues = () =>{
      if(name.length < 4) {
        setError({message:"Name to short"});
        return false
      }
  
      if(email.includes("@")){
        setError({message:"Invalid Email"});
        return false
      }
  
      if(password.length<4){
        setError({message:"password to short"})
        return false
      }
  
      if(password != repetedPassword){
        setError({message:"the password dosent match"})
        return false
      }
      return true
    }  

    const signUpHandler = async()=>{
      setLoading(true);
      
      if(!verifyValues()) return

      try{

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