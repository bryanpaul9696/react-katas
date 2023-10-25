import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {CounterApp} from "./02-useState/CounterApp.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
)
