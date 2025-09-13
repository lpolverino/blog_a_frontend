import { createContext, useState } from "react";
const UserContext = createContext({
    user:{logged:false},
    setUser: () =>{}
});

const UserProvider =({children}) =>{
    const [user, setUser] = useState({
        logged:false
    })

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export  {
    UserContext,
    UserProvider
}