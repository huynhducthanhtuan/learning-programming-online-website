import React from "react";
import { isAuthenticated } from "../Auth";
import { Link, useNavigate  } from "react-router-dom";
import {getTotal} from './helperCart'
const Checkout = ({courses}) => {
    const navigate = useNavigate()

    const redirectPayment = () => {
        return navigate('/checkout')
    }
    return <div>
        <h2>Total: ${getTotal()}</h2>
        {isAuthenticated()? <button onClick={redirectPayment} className="btn btn-info">Checkout</button> : <Link to="/signin"><button className="btn btn-info">Sign in to checkout</button></Link>}
    </div>
}

export default Checkout