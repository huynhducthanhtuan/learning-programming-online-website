import React from "react";
import styles from "./ForgotPassword.module.css";
import {Link} from "react-router-dom"
const ForgotPassword = () => {
    return (
        <section >
            <div className={styles.header}>
                <img src="./icons/lpo.png" className={styles.logo}></img>

                <Link to="/sign-in" className={styles.buttonLink}>
                    Sign in
                </Link>
                    
            </div>
            <img src="./icons/line.png" className={styles.lineAll}></img>

            <div className={styles.header}>
                <h1 className={styles.headerString}>Forgot Password</h1>
                <img src="./images/lock.png" className={styles.imageLock} ></img>
            </div>

            <form className={styles.form}>
                <h3 className={styles.formHeader}>Reset your password</h3>
                <img src="./icons/line.png" className={styles.line}></img>
                <div>
                    <h4>Please enter your email to find your account</h4>
                    <input type="email" className={styles.formControl} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    
                </div>
                
                <div className={styles.formButton}>
    
                    <button className={styles.buttonCancel} type="cancel" >Cancel</button>
                    <button className={styles.buttonSend} type="send-code" >Send code</button>
                </div>
                
            </form>
            
            <img className={styles.imageForgot} src="./images/forgot-pass.png"></img>
        </section> 
    )
}

export default ForgotPassword

