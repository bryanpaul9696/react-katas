import {Navigate, Route, Routes} from "react-router-dom";


import {SchemeHeroesPage} from "../../13-HeroesApp/scheme/SchemeHeroesPage.tsx";

export const GlobalRouter = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="/heroes/*" element={<SchemeHeroesPage />} />
                <Route path="/*" element={<Navigate to="/heroes" />} />

            </Routes>
        </div>
    );
};