import {AuthProvider} from "../context/AuthProvider.tsx";
import {AppRouter} from "../router/AppRouter.tsx";

export const RouterApp = () => {
    return (
        <AuthProvider>
            <AppRouter/>
        </AuthProvider>
    );
};