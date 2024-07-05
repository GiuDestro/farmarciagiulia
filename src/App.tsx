import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias'
import FormularioCategorias from './components/categorias/formularioCategorias/FormularioCategorias'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeletarCategorias from './components/categorias/deletarCategorias/DeletarCategorias';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategorias />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategorias />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategorias />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;