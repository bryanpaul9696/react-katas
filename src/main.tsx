import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {MainApp} from "./05-useContext/UserSharedInfo/MainApp.tsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <MainApp/>
        </BrowserRouter>
    </React.StrictMode>,
)
