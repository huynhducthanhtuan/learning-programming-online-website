import React from "react";
import { Link } from "react-router-dom";
import styles from "./RePass.module.css";

const RePass = () => {
  return (
    <section>
      <div className={styles.header}>
        <img src="../icons/lpo.png" className={styles.logo}></img>
        <Link to="/signin" className={styles.buttonLink}>
          Sign in
        </Link>
      </div>
      <img src="../icons/line.png" className={styles.lineAll}></img>
      <div className={styles.header}>
        <h1 className={styles.headerString}>Forgot Password</h1>
        <img src="../images/lock.png" className={styles.imageLock}></img>
      </div>
      <form className={styles.form}>
        <h3 className={styles.formHeader}>Set your new password</h3>
        <img src="../icons/line.png" className={styles.line}></img>
        <div>
          <input
            className={styles.formControl}
            id="inputCode"
            placeholder="Enter new password"
          />
          <input
            className={styles.formControl}
            id="inputCode"
            placeholder="Confirm new password"
          />
        </div>

        <div className={styles.formButton}>
          <button className={styles.buttonSend}>Confirm</button>
        </div>
      </form>
      <img className={styles.imageForgot} src="../images/forgot-pass.png"></img>
    </section>
  );
};

export default RePass;
