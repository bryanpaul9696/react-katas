
import { Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage.tsx";
import {AboutPage} from "./pages/AboutPage.tsx";
import {LoginPage} from "./pages/LoginPage.tsx";
import {NavBarComponent} from "./components/NavBarComponent.tsx";


export const MainApp=()=>{

    return(
        <>

            <NavBarComponent></NavBarComponent>


                <Routes>
                    <Route path="/" element={<HomePage />}>               </Route>
                    <Route path="/Login" element={<LoginPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/*" element={<AboutPage />} />
                </Routes>


        </>
    );
}