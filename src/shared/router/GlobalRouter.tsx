import {Navigate, Route, Routes} from "react-router-dom";
import {SchemeHeroesPage} from "../../13-HeroesApp/scheme/SchemeHeroesPage.tsx";
import {RouterApp} from "../../09-RouterProtection/Scheme/RouterApp.tsx";

export const GlobalRouter = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="/heroes/*" element={<SchemeHeroesPage />} />
                <Route path="/login" element={<RouterApp />} />
                <Route path="/*" element={<Navigate to="/heroes" />} />


            </Routes>
        </div>
    );
};