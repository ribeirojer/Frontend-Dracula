import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import Corte from './pages/Corte'
import Home from './pages/Home'
import Impressao from './pages/Impressao'
import Produtos from './pages/Produtos'
import Search from './pages/Search'
import Shop from './pages/Shop'
import Sobre from './pages/Sobre'
import User from './pages/User'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="corte" element={<Corte />} />
          <Route path="impressao" element={<Impressao />} />
          <Route path="shop" element={<Shop />} />
          <Route path="user" element={<User />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="maria" element={<Sobre />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
