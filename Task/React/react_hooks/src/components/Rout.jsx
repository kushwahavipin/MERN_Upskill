import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Product from './Product';
import Cart from './Cart';
const Rout = ({addtoCart,cartItem,setcartItem}) => {
  return (
    <>
      <Routes>
        <Route path='/'element={<Product addtoCart={addtoCart}/>}/>
        <Route path='/Cart'element={<Cart addtoCart={addtoCart} cartItem={cartItem} setcartItem={setcartItem}/>}/>
      </Routes>
    </>
  );
}

export default Rout;
