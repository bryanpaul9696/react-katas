import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {BrowserRouter} from "react-router-dom";
import {BreakingBadQuotes} from "./06-apiFetch/breakingBadApi/BreakingBadQuotes.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <BreakingBadQuotes/>
        </BrowserRouter>
    </React.StrictMode>,
)
