import React from "react";
import styles from "./Signin.module.css";
import {Link} from "react-router-dom"
const SignIn = () => {
    return (
      <>
      <div className={styles.main} >  

          <form className={styles.form} id="form-1">
              <img src="./icons/LPO.png" className={styles.logo}></img>
              <h2 className={styles.headingSignIn}>Sign In</h2>
              <p className={styles.desc}>Login to start learning today!</p>

              <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Email</label>
                  <input className={styles.formControl} type="email" aria-describedby="emailHelp" placeholder="Enter email"  />

              </div>

              <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Password</label>
                  <input className={styles.formControl} type="password" placeholder="Enter password"  />
              </div>

              <div className={styles.formRemind}>

                  <div className={styles.formRemember}>
                      <input className={styles.formControl} type="checkbox" />
                      <span className={styles.formRememberText} style={{fontSize: "14px"}}
                      >Remember Me</span>
                  </div>

                  <Link to={"/forgot-password"} className={styles.formForgotPassword}>
                      Forgot Password?
                  </Link>
              </div>

              <button type="button" class={`${styles.formSubmit}`}>Sign in</button>
          </form>    
      </div>
  </>
    )
}

export default SignIn

