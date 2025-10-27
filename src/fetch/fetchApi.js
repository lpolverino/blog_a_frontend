async function submitUser (email, password) {
    const body = {email,password}
    try{
        const response = await fetch(import.meta.env.VITE_BACKEND_URL+"/auth/log-in", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(body)
        });
        if(!response.ok){
            const errorData = await response.json();
            console.log(errorData);
            if(errorData.errors){
                throw new AggregateError(
                    errorData.errors.map(error => new Error(error.msg)),
                    "Validation Failed"
                )
            }
            throw new Error(`Response status ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        
        return result;
    } catch(err){
        if(err instanceof AggregateError) throw err
        throw new Error(err.message)
    }
}

async function submitNewUser(email, name, password){
    const body = {email, name,password}
    try{
        const response = await fetch(import.meta.env.VITE_BACKEND_URL+"/auth/sign", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(body)
        });
        if(!response.ok){
            const errorData = await response.json();
            console.log(errorData);
            if(errorData.errors){
                throw new AggregateError(
                    errorData.errors.map(error => new Error(error.msg)),
                    "Validation Failed"
                )
            }
            throw new Error(`Response status ${response.status}`);
        }
        const result = await response.json();
        return result;
       
    }catch(err){
        if(err instanceof AggregateError) throw err;
        throw new Error(err.message);        
    }
}

async function getPosts (token){
    try{
        const response = await fetch(import.meta.env.VITE_BACKEND_URL+"/post",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        if(!response.ok){
            const errorData = await response.json();
            console.log(errorData);
            if(errorData.errors){
                throw new AggregateError(
                    errorData.errors.map(error => new Error(error.msg)),
                    "Validation Failed"
                )
            }
            throw new Error(`Response status ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        return result;
    }catch(err){
        if(err instanceof AggregateError) throw err;
        throw new Error(err.message);        
    }
}

async function getUsers(token){
    try{
        const response = await fetch(import.meta.env.VITE_BACKEND_URL+"/user",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        if(!response.ok){
            const errorData = await response.json();
            console.log(errorData);
            if(errorData.errors){
                throw new AggregateError(
                    errorData.errors.map(error => new Error(error.msg)),
                    "Validation Failed"
                )
            }
            throw new Error(`Response status ${response.status}`);
        }
        const result = await response.json();
        return result;
     }catch(err){
        if(err instanceof AggregateError) throw err;
        throw new Error(err.message);        
    }
}


export default {
    submitUser,
    submitNewUser,
    getPosts,
    getUsers,
}