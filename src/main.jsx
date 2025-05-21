import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Login from './pages/Login.jsx';
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Registrar from './pages/Registrar.jsx';
import Carrinho from './pages/Carrinho.jsx';
import Home from './pages/Home.jsx';
import Promoçoes from './pages/Promoçoes.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
         <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/promocoes" element={<Promoçoes />} />
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
