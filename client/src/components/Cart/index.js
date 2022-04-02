import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getCart } from "./helperCart";
import Header from "../Header";
import Layout from "../Layout";
import styles from "./Cart.module.css";
import Card from "../Home/Card";
import Carted from "../Carted";
import Checkout from "./Checkout";

const Cart = () => {
  const [items, setItems] = useState()

  console.log(items);
  useEffect(() => {
    setItems(getCart())
  }, [])

  const showItems = (items) => {
    return(
      <div>
        <h2>
          Your cart has {items && items.length} items
        </h2>
        <hr/>
        {items.map((course, i) => {
          return (
            <Carted key={i} course={course} cartUpdate={true} showRemoveCourse={true}/>
          ) 
        })}
      </div>
    )
  }

  const noItemMessage = () => ( <h2>
      Your cart is empty .
      <br/>
      <Link to="/shop">Continue Shop</Link>
    </h2>)
   
 

  return (
    <Layout
      title="Courses Cart"
      description="Manage your cart Courses. Add, remove, checkout or continue shopping."
      className="container-fluid"
    >
      <div className="row">
        <div className="col-8">
            {items &&( items.length > 0? showItems(items): noItemMessage())}
        </div>
        <div className="col-4">
          <div>
          <h2 className="mt-4">Your cart summary</h2>
           <hr/>
           <Checkout  courses={items} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
