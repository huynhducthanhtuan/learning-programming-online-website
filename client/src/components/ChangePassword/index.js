import React, { useRef, useContext, useEffect } from "react";
import styles from "./ChangePassword.module.css";
import Header from "../Header";

const ChangePassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <Header showSearchPart={false} />
      <h1 className={`${styles.headerString} d-flex`}>Change Password</h1>
    </section>
  );
};

export default ChangePassword;
