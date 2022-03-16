import React from "react";
import styles from "./Signup.module.css";
import {Link} from "react-router-dom";
const SignUp = () => {
    return (
        < section className={styles.flex}>
            <div>
                <h2 className={styles.textSignUp}>Sign up</h2>

                <form className={styles.form} id="form-1"> 
                    <div className={styles.formGroup}>
                        <div className={styles.flex}>
                            <p className={styles.formLabel}>First name</p>
                            <p className={styles.formForce}>*</p>
                        </div>
                        
                        <input className={styles.formControl} type="text"/>

                    </div>

                    <div className={styles.formGroup}>
                        <div className={styles.flex}>
                            <p className={styles.formLabel}>Last name</p>
                            <p className={styles.formForce}>*</p>
                        </div>
                        
                        <input className={styles.formControl} type="text"/>
                    
                    </div>

                    <div className={styles.formGroup}>
                        <div className={styles.flex}>
                            <p className={styles.formLabel}>Email</p>
                            <p className={styles.formForce}>*</p>
                        </div>
                        
                        <input className={styles.formControl} type="email"/>
                    
                    </div>

                    <div className={styles.formGroup}>
                        <div className={styles.flex}>
                            <p className={styles.formLabel}>Password</p>
                            <p className={styles.formForce}>*</p>
                        </div>
                        
                        <input className={styles.formControl} type="password"/>
                    
                    </div>

                    <div className={styles.formGroup}>
                        <div className={styles.flex}>
                            <p className={styles.formLabel}>Confirm password</p>
                            <p className={styles.formForce}>*</p>
                        </div>
                        
                        <input className={styles.formControl} type="password"/>
                    
                    </div>

                    <button type="button" class={`${styles.formSubmit}`}>Sign up</button>
                </form> 

            </div>

            <div>
                <img src="./images/sign-in.png" className={styles.imageSignUp}></img>
                <Link to="../Sign-in"  >
                    <p className={styles.link}>Already have account?Sign in</p>
                </Link>
            </div>
        </section>
    )
}

export default SignUp
