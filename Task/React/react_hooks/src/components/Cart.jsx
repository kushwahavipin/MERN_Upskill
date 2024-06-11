import React from "react";
import { Link } from "react-router-dom";
const Cart = ({ cartItem, setcartItem }) => {
  return (
    <>
      {
        cartItem.length === 0 && 
        <>
          <h2 style={{ marginTop: "10%", marginLeft: "30%" }}>
            Cart is Empty Please Select a Product
          </h2>
          <Link to="/">
            <button
              style={{
                marginTop: "5%",
                marginLeft: "45%",
                padding: "10px 10px",
                border: "1px solid #fe4a55",
                color: "red",
                outline: "none",
                background: "none",
                cursor: "pointer",
              }}
            >
              Shop Now
            </button>
          </Link>
        </>
      }
      <div className="cart_container">
        <div className="cart_product">
          {cartItem.map((item) => {
            return (
              <div className="cart_box" key={item.id}>
                <div className="cart_product_container">
                  <div className="cart_img_box">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart_item_details">
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
          {cartItem.length>0&&
          <>
          <button className="checkout">Check Out</button>
            <div className="cart_total"></div>
          </>}
        </div>
      </div>
    </>
  );
};

export default Cart;
