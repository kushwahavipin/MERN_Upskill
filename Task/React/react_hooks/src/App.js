import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Rout from "./components/Rout";
const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Rout/>
      </Router>
    </>
  );
};

export default App;
