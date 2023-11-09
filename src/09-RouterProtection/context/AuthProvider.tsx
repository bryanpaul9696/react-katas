import {useReducer} from "react";
import {authReducer} from "./AuthReducer.ts";
import {AuthContext} from "./AuthContext.ts";
import {TypesLogin} from "../types/types.ts";

const init = () => {
    const user = JSON.parse( localStorage.getItem('user') as string );
    return {
        logged: !!user,
        user: user,
    }
}

export const AuthProvider = ({ children }) => {
    const [ authState, dispatch ] = useReducer( authReducer, {}, init );

    const login = ( name = '' ) => { 

        const user = { id: 'ABC', name }
        const action = { type: TypesLogin.login, payload: user }

        localStorage.setItem('user', JSON.stringify( user ) );

        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = { type: TypesLogin.logout };
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,

            // Methods
            login,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    );
};