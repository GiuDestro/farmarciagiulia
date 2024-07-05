import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <div className='min-h-60vh]'>
    <Home/>
    </div>
    <Footer/>
    </>
);
}
export default App;