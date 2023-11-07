import {Navigate, Route, Routes} from "react-router-dom";
import {MarvelPage} from "../pages/MarvelPage.tsx";
import {DcPage} from "../pages/DcPage.tsx";
import {HeroePage} from "../pages/HeroePage.tsx";

export const HeroesRoutes = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />

                <Route path="dc" element={<DcPage />} />

                <Route path="/marvel/hero/:id" element={<HeroePage />} />

                <Route path="/dc/hero/:id" element={<HeroePage />} />

                <Route path="/" element={<Navigate to="marvel" />} />
                {/*<Route path="/*" element={<Navigate to="/" />} />*/}

            </Routes>
        </div>
    );
};