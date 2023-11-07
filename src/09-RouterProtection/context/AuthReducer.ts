import {TypesLogin} from "../types/types.ts";

export const authReducer = (state = {}, action:any) => {

    switch (action.type) {
        case TypesLogin.login :
            return {
                ...state,
                logged: true,
                user: action.payload
            };
        case TypesLogin.logout:
            return {
                ...state,
                logged: false,
            };

    }

}