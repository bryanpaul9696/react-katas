import {UserContext} from "./UserContext.tsx";
import {useState} from "react";

export const UserProvider=({ children }:any)=>{

    const [user, setUser] = useState();

    return(

        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>

    );
}