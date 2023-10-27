import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {BrowserRouter} from "react-router-dom";

import {HomeTheme} from "./07-materialDesing/materialu1-themes/pages/HomeTheme.tsx";
import {AppTheme} from "./07-materialDesing/materialu1-themes/themes";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>

            <AppTheme>
                <HomeTheme />
            </AppTheme>
        </BrowserRouter>
    </React.StrictMode>,
)
