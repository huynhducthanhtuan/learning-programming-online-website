import React, { useState, useContext } from "react";
import styles from "./SignIn.module.css";
import { Link, useNavigate } from "react-router-dom";
import { authenticate, isAuthenticated } from "../Auth";
import { UserContext } from "../../App";
import { toast } from "react-toastify";

const SignIn = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
  });

  const { email, password, error } = values;

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

  const submitForm = (event) => {
    event.preventDefault();

    signInAPI({ email, password }).then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        authenticate(data, () => {
          toast.success("Sign In Success");
          setValues({ ...values, error: "" });
          navigate("/");
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
        <p className={styles.desc}>Signin to start learning today!</p>

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

  return <div className={styles.main}>{signInForm()}</div>;
};

export default SignIn;
