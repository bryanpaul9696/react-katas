import {Route, Routes} from "react-router-dom";
import {JournalPage} from "./pages/JournalPage.tsx";


export const JournalRoute = () => {
    return (
        <Routes>
            <Route path="/*" element={<JournalPage/>}/>
        </Routes>

    );
};