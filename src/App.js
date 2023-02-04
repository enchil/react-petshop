import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Nav from './pages/Component/Nav';
import Login from './pages/Login';



function App() {
  return (
    <BrowserRouter>
    <Nav/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<Product/>}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
