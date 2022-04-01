import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import styles from "./Checkout.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { getBraintreeClientToken, processPayment } from "./apiCheckout";
import { emptyCart } from "../Cart/apiCart";
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
  const getToken = (user, token) =>{
    getBraintreeClientToken(user._id, token).then(result =>{
      if(result.error){
        setData({...data, error: result.error})
      }
      else{
        setData({...data, clientToken: result.data.clientToken})
      }
    
    })
  }
  
  useEffect(()=>{
    getToken(user, token)

  }, [])

  const confirmPay = () =>{
    let nonce;
    let getNonce = data.instance.requestPaymentMethod().then(result =>{
      console.log('result',result)
      nonce = result.nonce
      //once you have nonce (card type, card number)
      const paymentData = {
        paymentMethodNonce: nonce,
        amount: "500"

      }

      processPayment(user._id, token, paymentData)
      .then(response =>{
        
        setData({...data, success: response.success})
        //empty cart
        // emptyCart(() => {
        //   console.log("payment success");
        // })
      })
      .catch(error => console.log(error))

    })
    .catch(errorPay => {
      setData({...data, error: errorPay.message})
    })
  }

  const showDropIn = ()=> {

    if(!data.clientToken){
      return(
        <div className={styles.checkoutLoading}>
          <iframe  className={styles.checkoutGifLoading} src="./icons/loading-animation.gif"></iframe>
        </div>
      )
    }
    return (
      <div onBlur={()=> setData({...data, error: ""})}>
         {data.clientToken !== null ? (<div>

            <DropIn 
              options={{
                authorization: data.clientToken,
                paypal:{
                  flow: "vault"
                }
              }}
              
              onInstance={instance => data.instance = instance} />  
            <button onClick={confirmPay} className="btn btn-success btn-block">Confirm</button>
          
         </div>) : null }
  
      </div>
    )
  }
  
  const showError = error =>{
    <div className="alert alert-danger" style={{display: error ? 'block' : 'none'}}>
      {error}
    </div>
  }
  return (
    <section>
      <Header /> 
      {/* {showError(data.error)} */}
      
      <div className="d-flex justify-content-center align-items-center">{showDropIn()}</div>

    </section>
  );
};

export default Checkout;
