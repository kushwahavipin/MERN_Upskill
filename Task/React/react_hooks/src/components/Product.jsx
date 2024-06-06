import React from "react";
import Detail from "./ProdcutDetails";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = () => {
  return (
    <>
      <div className="d-flex gap-4">
      {Detail.map((curElm) => {
        return (
          <>
            
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={curElm.image}  style={{height:'18rem'}}/>
              <Card.Body>
                <Card.Title>{curElm.name}</Card.Title>
                <Card.Text>
                  {curElm.desc}
                </Card.Text>
                <Card.Text>
                  Rs.{curElm.price}
                </Card.Text>
                <Button variant="primary">Add To Cart</Button>
              </Card.Body>
            </Card>
            
          </>
        );
      })}
      </div>
    </>
  );
};

export default Product;
