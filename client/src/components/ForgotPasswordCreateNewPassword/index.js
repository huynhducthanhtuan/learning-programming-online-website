import React, { useRef, useContext, useEffect, useState } from "react";
import styles from "./ForgotPasswordCreateNewPassword.module.css";
import { ForgotPasswordContext } from "../../contexts/ForgotPasswordContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createNewPasswordApi } from "./apiForgotPasswordCreateNewPassword";
import { validatePassword } from "../../constants";
import Header from "../Header";

const ForgotPasswordCreateNewPassword = () => {
  const navigate = useNavigate();
  const newPasswordInputRef = useRef();
  const newPasswordConfirmInputRef = useRef();
  const { email, setEmail } = useContext(ForgotPasswordContext);

  const cleanInputText = () => {
    newPasswordInputRef.current.value = "";
    newPasswordConfirmInputRef.current.value = "";
  };

  const handleValidateFields = () => {
    const isValidNewPassword = validatePassword(
      newPasswordInputRef.current.value.trim()
    );
    const isValidOldPassword = validatePassword(
      newPasswordConfirmInputRef.current.value.trim()
    );

    if (!isValidNewPassword.isValid)
      return { message: `New password: ${isValidNewPassword.error}` };
    if (!isValidOldPassword.isValid)
      return { message: `New password confirm: ${isValidOldPassword.error}` };
    if (
      newPasswordInputRef.current.value.trim() !=
      newPasswordConfirmInputRef.current.value.trim()
    )
      return {
        message: "New password and new password confirm are not match",
      };

    return { message: "success" };
  };

  const handleCreateNewPassword = async (e) => {
    e.preventDefault();

    // Validate password
    if (handleValidateFields().message == "success") {
      // Call API
      const data = await createNewPasswordApi({
        email: email,
        newPassword: newPasswordInputRef.current.value.trim(),
        newPasswordConfirm: newPasswordConfirmInputRef.current.value.trim(),
      });

      // Xử lí kết quả trả về từ API
      switch (data.message) {
        case "Create new password failed":
          toast.error(data.message);
          break;
        case "Create new password success":
          toast.success(data.message);
          cleanInputText();
          break;
      }
    } else {
      toast.error(handleValidateFields().message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <Header showSearchPart={false} />
      <h1 className={`${styles.headerString} d-flex`}>Forgot Password</h1>
      <img src="./icons/line.png" className={styles.lineAll}></img>
      <form className={styles.form}>
        <h3 className={styles.formHeader}>Set your new password</h3>
        <img src="./icons/line.png" className={styles.line}></img>
        <div>
          <input
            type="password"
            className={styles.formControl + " " + styles.formControlInput}
            id="new-password-input"
            placeholder="Enter new password"
            ref={newPasswordInputRef}
          />
          <input
            type="password"
            className={styles.formControl + " " + styles.formControlInput}
            id="confirm-new-password-input"
            placeholder="Confirm new password"
            ref={newPasswordConfirmInputRef}
          />
        </div>

        <div className={styles.formButton}>
          <button
            className={styles.buttonSend}
            onClick={(e) => handleCreateNewPassword(e)}
          >
            Confirm
          </button>
        </div>
      </form>
    </section>
  );
};

export default ForgotPasswordCreateNewPassword;
