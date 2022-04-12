import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    role: 0,
    error: "",
    success: false,
  });
  const { name, email, password, role, error, success } = values;

  const handleChange = (name) => (event) => {
    if (name == "role") {
      setValues({ ...values, [name]: Number(event.target.value) });
    } else {
      setValues({ ...values, [name]: event.target.value });
    }
  };

  const signUpApi = (user) => {
    return fetch("/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });
  };

  const submitForm = (e) => {
    e.preventDefault();

    signUpApi({ name, email, password, role }).then((data) => {
      if (data.error || data.err) {
        setValues({ ...values, error: data.error || data.err, success: false });
      } else {
        setValues({ ...values, error: "", success: true });
      }
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

  const successShow = () => {
    return (
      <div
        className="alert alert-info"
        style={{ display: success ? "" : "none" }}
      >
        Sign up success. <Link to="/signin">Sign In</Link>
      </div>
    );
  };

  const signupForm = () => {
    return (
      <form className={styles.form} id="form-1">
        {errorShow()}
        {successShow()}
        <div className={styles.formGroup}>
          <div className={styles.flex}>
            <p className={styles.formLabel}>Name</p>
            <p className={styles.formForce}>*</p>
          </div>

          <input
            className={styles.formControl}
            type="text"
            onChange={handleChange("name")}
          />
        </div>

        <div className={styles.formGroup}>
          <div className={styles.flex}>
            <p className={styles.formLabel}>Email</p>
            <p className={styles.formForce}>*</p>
          </div>

          <input
            className={styles.formControl}
            type="email"
            onChange={handleChange("email")}
          />
        </div>

        <div className={styles.formGroup}>
          <div className={styles.flex}>
            <p className={styles.formLabel}>Password</p>
            <p className={styles.formForce}>*</p>
          </div>

          <input
            className={styles.formControl}
            type="password"
            onChange={handleChange("password")}
          />
        </div>

        <div className={styles.formGroup}>
          <div className={styles.flex}>
            <p className={styles.formLabel}>Role</p>
            <p className={styles.formForce}>*</p>
          </div>
          <select
            className={styles.formControl}
            onChange={handleChange("role")}
          >
            <option key={0} value={0}>
              Student
            </option>
            <option key={1} value={1}>
              Teacher
            </option>
          </select>
        </div>
        <button
          type="button"
          className={`${styles.formSubmit}`}
          onClick={(e) => submitForm(e)}
        >
          Sign up
        </button>
      </form>
    );
  };

  return (
    <section className={`mt-4 ${styles.flex}`}>
      <div>
        <h2 className={styles.textSignUp}>Sign Up</h2>
        <div className="mt-4">{signupForm()}</div>
      </div>
      <div>
        <img
          src="./images/sign-in.png"
          className={styles.imageSignUp}
          alt=""
        ></img>
        <Link to="/signin">
          <p className={styles.link}>Already have account? Sign in</p>
        </Link>
      </div>
    </section>
  );
};

export default SignUp;
