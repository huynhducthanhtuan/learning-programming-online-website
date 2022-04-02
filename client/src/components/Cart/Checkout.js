import React from "react";
import { isAuthenticated } from "../Auth";
import { Link } from "react-router-dom";
const Checkout = ({courses}) => {

    const getTotal = () => {
        return courses && courses.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.price 
        }, 0)
    }

    return <div>
        <h2>Total: ${getTotal()}</h2>
        {isAuthenticated()? <button className="btn btn-info">Checkout</button> : <Link to="/signin"><button className="btn btn-info">Sign in to checkout</button></Link>}
    </div>
}

export default Checkout