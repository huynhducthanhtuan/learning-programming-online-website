import React, { useRef, useContext, useEffect } from "react";
import styles from "./ChangePassword.module.css";
import Header from "../Header";
import { toast } from "react-toastify";
import { changePasswordApi } from "./apiChangePassword";
import { isAuthenticated } from "../Auth";
import { validatePassword } from "./validate";

const ChangePassword = () => {
  const oldPasswordInputRef = useRef();
  const newPasswordInputRef = useRef();
  const newPasswordConfirmInputRef = useRef();

  const cleanInputText = () => {
    oldPasswordInputRef.current.value = "";
    newPasswordInputRef.current.value = "";
    newPasswordConfirmInputRef.current.value = "";
  };

  const handleValidateFields = () => {
    const isValidOldPassword = validatePassword(
      oldPasswordInputRef.current.value.trim()
    );
    const isValidNewPassword = validatePassword(
      newPasswordInputRef.current.value.trim()
    );
    const isValidNewPasswordConfirm = validatePassword(
      newPasswordConfirmInputRef.current.value.trim()
    );

    if (!isValidOldPassword.isValid)
      return { message: `Old password: ${isValidOldPassword.error}` };
    if (!isValidNewPassword.isValid)
      return { message: `New password: ${isValidNewPassword.error}` };
    if (!isValidNewPasswordConfirm.isValid)
      return {
        message: `New password confirm: ${isValidNewPasswordConfirm.error}`,
      };
    if (
      newPasswordInputRef.current.value.trim() !=
      newPasswordConfirmInputRef.current.value.trim()
    )
      return {
        message: "New password and new password confirm are not match",
      };

    return { message: "success" };
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (handleValidateFields().message == "success") {
      // Lấy userId từ localStorage
      const userId = isAuthenticated().user._id || "";

      // Call API
      const data = await changePasswordApi({
        userId,
        oldPassword: oldPasswordInputRef.current.value.trim(),
        newPassword: newPasswordInputRef.current.value.trim(),
        newPasswordConfirm: newPasswordConfirmInputRef.current.value.trim(),
      });

      // Xử lí kết quả trả về từ API
      toast.info(data.message);
    } else {
      toast.error(handleValidateFields().message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <Header />
      <h1 className={`${styles.headerString} d-flex`}>Change password</h1>
      <img src="./icons/line.png" className={styles.lineAll}></img>
      <form className={styles.form}>
        <h3 className={styles.formHeader}>Change password</h3>
        <img src="./icons/line.png" className={styles.line}></img>
        <div>
          <input
            className={styles.formControl}
            id="old-password-input"
            placeholder="Enter old password"
            ref={oldPasswordInputRef}
          />
          <input
            className={styles.formControl}
            id="new-password-input"
            placeholder="Enter new password"
            ref={newPasswordInputRef}
          />
          <input
            className={styles.formControl}
            id="confirm-new-password-input"
            placeholder="Confirm new password"
            ref={newPasswordConfirmInputRef}
          />
        </div>

        <div className={styles.formButton}>
          <button
            className={styles.buttonSend}
            onClick={(e) => handleChangePassword(e)}
          >
            Confirm
          </button>
        </div>
      </form>
    </section>
  );
};

export default ChangePassword;
