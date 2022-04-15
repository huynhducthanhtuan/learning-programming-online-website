import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import styles from "./Checkout.module.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  getBraintreeClientToken,
  processPayment,
  registerCourse,
} from "./apiCheckout";
import { useState } from "react";
import { isAuth, isAuthenticated } from "../Auth";
import { useEffect } from "react";
import DropIn from "braintree-web-drop-in-react";
import { emptyCart, getTotal, getCart } from "../Cart/helperCart";

const Checkout = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    success: false,
    clientToken: null,
    error: "",
    instance: {},
    address: "",
  });
  const { success, error } = data;

  const result = JSON.parse(localStorage.getItem("jwt"));
  const { user, token } = result;

  const getToken = (user, token) => {
    getBraintreeClientToken(user._id, token).then((result) => {
      if (result.error) {
        setData({ ...data, error: result.error });
      } else {
        setData({ ...data, clientToken: result.data.clientToken });
      }
    });
  };

  useEffect(() => {
    getToken(user, token);
  }, []);

  const moveToCourses = () => {
    navigate("/mycourses");
  };

  const saveCoursesRegistered = (courses) => {
    courses.map((course, id) => {
      return registerCourse(user._id, token, course._id).then((data) => {
        console.log("course da dang ki ", data);
      });
    });
  };

  const confirmPay = () => {
    let nonce;
    let getNonce = data.instance
      .requestPaymentMethod()
      .then((result) => {
        nonce = result.nonce;

        //once you have nonce (card type, card number)
        const paymentData = {
          paymentMethodNonce: nonce,
          amount: getTotal(),
        };

        processPayment(user._id, token, paymentData)
          .then((response) => {
            setData({ ...data, success: response.success });
            let courses = getCart();
            saveCoursesRegistered(courses);
            emptyCart();
          })
          .catch((error) => console.log(error));
      })
      .catch((errorPay) => {
        setData({ ...data, error: errorPay.message });
      });
  };

  const showDropIn = () => {
    if (!data.clientToken) {
      return (
        <div className={styles.checkoutLoading}>
          <iframe
            className={styles.checkoutGifLoading}
            src="./icons/loading-animation.gif"
          ></iframe>
        </div>
      );
    }
    return (
      <div onBlur={() => setData({ ...data, error: "" })}>
        <h2>Total payment: {getTotal()}$</h2>
        {data.clientToken !== null ? (
          <div>
            <DropIn
              options={{
                authorization: data.clientToken,
                paypal: {
                  flow: "vault",
                },
              }}
              onInstance={(instance) => (data.instance = instance)}
            />
            <button
              onClick={success ? moveToCourses : confirmPay}
              className="btn btn-success btn-block"
            >
              Confirm Payment
            </button>
          </div>
        ) : null}
      </div>
    );
  };

  const showError = (error) => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "block" : "none" }}
      >
        {error}
      </div>
    );
  };

  const showSuccsess = (success) => (
    <div
      className="alert alert-info"
      style={{ display: success ? "block" : "none" }}
    >
      Payment success
    </div>
  );

  return (
    <section>
      <Header role={0} />
      {showError(error)}
      {showSuccsess(success)}

      <div className="d-flex justify-content-center align-items-center">
        {showDropIn()}
      </div>
    </section>
  );
};

export default Checkout;
