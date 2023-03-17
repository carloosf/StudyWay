import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from './App'
import Home from './pages/Home'
import Aula from './pages/Aula'
import Assuntos from './pages/Assuntos'


import './Main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='aula' element={<Aula />} />
          <Route path='assuntos' element={<Assuntos />} />
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
);
