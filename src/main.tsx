import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {ExampleCustomHookPage} from "./04-CustomHooks/CounterModule/ExampleCustomHookPage.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ExampleCustomHookPage />
  </React.StrictMode>,
)
