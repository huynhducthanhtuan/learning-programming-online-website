import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authenticate } from "../Auth";
import { UserContext } from "../../App";
import styles from "./SignIn.module.css";
import M from "materialize-css";

const SignIn = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    redirectUser: false,
  });

  const { email, password, error, redirectUser } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const signInAPI = (user) => {
    return fetch("/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  };

  const errorShow = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  const redirectUserShow = () => {
    if (redirectUser) return navigate("/");
  };

  const submitForm = (event) => {
    event.preventDefault();

    signInAPI({ email, password }).then((data) => {
      if (data.error) {
        M.toast({ html: data.error, classes: "rounded red" });
      } else {
        authenticate(data, () => {
          M.toast({ html: "Signin Success", classes: "rounded green" });
          setValues({ ...values, error: "", redirectUser: true });
        });
        dispatch({ type: "USER", payload: data.user });
      }
    });
  };

  const signInForm = () => {
    return (
      <form className={styles.form} id="form-1">
        <img src="./icons/LPO.png" className={styles.logo}></img>
        <h2 className={styles.headingSignIn}>Sign In</h2>
        <p className={styles.desc}>Login to start learning today!</p>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Email</label>
          <input
            className={styles.formControl}
            type="email"
            placeholder="Enter email"
            onChange={handleChange("email")}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Password</label>
          <input
            className={styles.formControl}
            type="password"
            placeholder="Enter password"
            onChange={handleChange("password")}
          />
        </div>

        <div className={styles.formRemind}>
          <div className={styles.formRemember}>
            {/* <input className={styles.formControl} type="checkbox" /> */}
            <Link to="/signup">
              <span
                className={styles.formRememberText}
                style={{ fontSize: "14px" }}
              >
                Sign Up
              </span>
            </Link>
          </div>

          <Link to={"/forgot-password"} className={styles.formForgotPassword}>
            Forgot Password?
          </Link>
        </div>

        <button
          type="button"
          className={`${styles.formSubmit}`}
          onClick={submitForm}
        >
          Sign in
        </button>
      </form>
    );
  };

  return (
    <div className={styles.main}>
      {signInForm()}
      {redirectUserShow()}
    </div>
  );
};

export default SignIn;
