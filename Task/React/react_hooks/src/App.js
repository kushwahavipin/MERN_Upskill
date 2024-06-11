import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Rout from "./components/Rout";
const App = () => {
  const [cartItem, setcartItem] = useState([]);
  const addtoCart = (product) => {
    const exsit = cartItem.find((x) => {
      return x.id === product.id;
    });
    if (exsit) {
      alert("This Product is alleardy added");
    } else {
      setcartItem([...cartItem, { ...product, quantity: 1 }]);
      alert("Added to Cart");
    }
    console.log(setcartItem);
  };
  return (
    <>
      <Router>
        <NavBar />
        <Rout
          addtoCart={addtoCart}
          cartItem={cartItem}
          setcartItem={setcartItem}
        />
      </Router>
    </>
  );
};

export default App;
