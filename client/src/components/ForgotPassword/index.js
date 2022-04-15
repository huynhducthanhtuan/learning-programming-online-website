import React, { useRef, useContext, useEffect } from "react";
import styles from "./ForgotPassword.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ForgotPasswordContext } from "../../contexts/ForgotPasswordContext";
import { submitEmailApi } from "./apiForgotPassword";
import Header from "../Header";
import { validateEmail } from "../../constants";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const { code, setCode, email, setEmail } = useContext(ForgotPasswordContext);

  const handleCancel = (e) => {
    e.preventDefault();
    emailInputRef.current.value = "";
  };

  const handleSendCode = async (e) => {
    e.preventDefault();

    // Validate email
    const isValidEmail = validateEmail(emailInputRef.current.value);

    if (isValidEmail.isValid) {
      // Call API
      const data = await submitEmailApi({
        email: emailInputRef.current.value,
      });

      // Xử lí kết quả trả về từ API
      switch (data.message) {
        case "Email not found":
          toast.error(data.message);
          break;
        case "Send code failed":
          setEmail(emailInputRef.current.value);
          toast.error(data.message);
          break;
        case "Send code success. Please check your email":
          setEmail(emailInputRef.current.value);
          toast.success(data.message);
          navigate("/forgot-password-enter-code");
          break;
      }
    } else {
      toast.error(isValidEmail.error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <Header showSearchPart={false} />
      <h1 className={`${styles.headerString} d-flex`}>Forgot Password</h1>

      <form className={styles.form} id="contact-form">
        <h3 className={styles.formHeader}>Reset your password</h3>
        <img src="./icons/Line.png" className={styles.line}></img>
        <div>
          <label className={styles.formString}>
            Please enter your email to reset your account
          </label>
          <input
            type="email"
            name="email"
            className={styles.formControl + " " + styles.formControlInput}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={emailInputRef}
            style={{ width: "600px" }}
          />
        </div>
        <div className={styles.formButton}>
          <button
            className={styles.buttonCancel}
            type="cancel"
            onClick={(e) => handleCancel(e)}
          >
            Cancel
          </button>
          <button
            className={styles.buttonSend}
            type="submit"
            onClick={(e) => handleSendCode(e)}
          >
            Send code
          </button>
        </div>
      </form>
    </section>
  );
};

export default ForgotPassword;
