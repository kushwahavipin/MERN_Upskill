import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Product from './Product';
import Cart from './Cart';
const Rout = () => {
  return (
    <>
      <Routes>
        <Route path='/'element={<Product/>}/>
        <Route path='/Cart'element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default Rout;
