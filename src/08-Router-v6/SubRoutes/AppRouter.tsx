import {Navigate, Route, Routes} from "react-router-dom";
import {AuthRoutes} from "./auth/AuthRoutes.tsx";
import {JournalRoute} from "./journal/JournalRoute.tsx";

export const AppRouter = () => {
    return (




        <Routes>
            {/*Login y registro */}
            <Route path="/auth/*" element={<AuthRoutes/>}/>
            <Route path="/journal/*" element={<JournalRoute/>}/>
            <Route path="/*" element={<Navigate to="auth" />} />
        </Routes>
    );
};