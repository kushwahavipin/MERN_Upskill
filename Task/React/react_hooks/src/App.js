import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Rout from "./components/Rout";
const App = () => {
  const [cartItem, setcartItem]=useState([]);
  const addtoCart=(product)=>{

    console.log(product);
  }
  return (
    <>
      <Router>
        <NavBar />
        <Rout addtoCart={addtoCart} cartItem={cartItem} setcartItem={setcartItem}/>
      </Router>
    </>
  );
};

export default App;
