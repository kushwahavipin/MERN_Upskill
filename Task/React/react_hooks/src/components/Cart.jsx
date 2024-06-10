import React from "react";

const Cart = ({ cartItem, setcartItem }) => {
  return (
    <>
      {cartItem.length === 0 && (
        <>
          <h2>Cart is Empty Please Select a Product</h2>
          <button>Shopping</button>
        </>
      )}
    </>
  );
};

export default Cart;
