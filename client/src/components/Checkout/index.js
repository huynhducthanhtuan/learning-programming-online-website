import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import styles from "./Checkout.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { getBraintreeClientToken } from "../Cart/apiCart";
import { useState } from "react";
import { isAuth, isAuthenticated} from "../Auth";
import { useEffect } from "react";
import DropIn from "braintree-web-drop-in-react" 

const Checkout = () => {

  const [data, setData] = useState({
    success: false,
    clientToken: null,
    error: "",
    instance: {},
    address: ""

  })

  const result = JSON.parse(localStorage.getItem('jwt'))
 
  const {user, token} = result
  console.log(user,   token);
  const getToken = (user, token) =>{
    getBraintreeClientToken(user._id, token).then(result =>{
      if(result.error){
        setData({...data, error: result.error})
      }
      else{
        setData({...data, clientToken: result.data.clientToken})
      }

    //  console.log(result.data.clientToken);
    })
  }
  
  useEffect(()=>{
    getToken(user, token)

  }, [])


  const showDropIn = ()=> {
    return (
      <div>
         {data.clientToken !== null ? (<div>

            <DropIn options={{
              authorization: data.clientToken
              
            }} onInstance={instance => instance = instance} />  
            <button >Success</button>
          
         </div>) : null }
  
      </div>
    )
  }
  


  console.log(data.clientToken);
  return (
    <section>
      <Header />

      
      <div className="d-flex justify-content-center align-items-center">{data.clientToken && showDropIn()}</div>

    </section>
  );
};

export default Checkout;
