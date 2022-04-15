import Axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import styles from "./UpdateProfile.module.css";
import logo from "../../assets/images/logo192.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { isAuthenticated } from "../Auth";
import { viewProfileApi } from "../Profile/apiProfile";
import { updateProfileApi } from "./apiUpdateProfile";
import { defaultAvatarUrl } from "../../constants";
import {
  validateFullname,
  validateEmail,
  validatePhoneNumber,
} from "../../constants";

const UpdateProfile = () => {
  const avatarImageRef = useRef();
  const fullnameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneNumberInputRef = useRef();
  const roleTextRef = useRef();
  const [isUpdated, setIsUpdated] = useState(false);
  const [imageString, setImageString] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const cleanInputText = () => {
    fullnameInputRef.current.value = "";
    emailInputRef.current.value = "";
    phoneNumberInputRef.current.value = "";
  };

  const updateInfomationFields = async () => {
    // Lấy userId từ localStorage
    const userId = isAuthenticated() ? isAuthenticated().user._id : "";

    // Call API
    const data = await viewProfileApi({ _id: userId });

    // Xử lí kết quả trả về từ API
    if (data._id) {
      // Cập nhật avatar và nội dung sẵn cho các trường
      avatarImageRef.current.src = data.pic || defaultAvatarUrl;
      fullnameInputRef.current.value = data.name;
      emailInputRef.current.value = data.email;
      phoneNumberInputRef.current.value = data.phone_number;
      roleTextRef.current.innerText =
        data.role == 0 ? "Student (*)" : "Teacher (*)";

      // Cập nhật avatarUrl
      setAvatarUrl(data.pic);
    }
  };

  const handleValidateFields = () => {
    const isValidFullname = validateFullname(
      fullnameInputRef.current.value.trim()
    );
    const isValidEmail = validateEmail(emailInputRef.current.value.trim());
    const isValidPhoneNumber = validatePhoneNumber(
      phoneNumberInputRef.current.value.trim()
    );

    if (!isValidFullname.isValid) {
      return { message: isValidFullname.error };
    }
    if (!isValidEmail.isValid) {
      return { message: isValidEmail.error };
    }
    if (!isValidPhoneNumber.isValid) {
      return { message: isValidPhoneNumber.error };
    }

    return { message: "success" };
  };

  const postImage = () => {
    const data = new FormData();
    data.append("file", imageString);
    data.append("upload_preset", "ecommerce");
    data.append("cloud_name", "dhzbsq7fj");

    Axios.post("https://api.cloudinary.com/v1_1/dhzbsq7fj/image/upload", data)
      .then((res) => setAvatarUrl(res.data.url))
      .catch((err) => console.log(err));
  };

  const handleChooseImage = async (e) => {
    setImageString(e.target.files[0]);
  };

  const handleUpdateProfile = async () => {
    // Lấy userId từ localStorage
    const userId = isAuthenticated() ? isAuthenticated().user._id : "";

    // Validate input fields
    const validateMessage = handleValidateFields().message;

    // Nếu nhập hợp lệ
    if (validateMessage == "success") {
      // Call API
      const payloadData = {
        _id: userId,
        name: fullnameInputRef.current.value.trim(),
        email: emailInputRef.current.value.trim(),
        phone_number: phoneNumberInputRef.current.value.trim(),
      };
      if (avatarUrl != "") payloadData["pic"] = avatarUrl;
      const data = await updateProfileApi(payloadData);

      // Xử lí kết quả trả về từ API
      switch (data.message) {
        case "success":
          cleanInputText();
          await updateInfomationFields();
          setIsUpdated(!isUpdated);
          toast.success("Update profile success");
          break;
        case "failed":
          toast.error("Update profile failed");
          break;
      }
    } else {
      toast.error(validateMessage);
    }
  };

  useEffect(() => {
    if (imageString != "") postImage();
  }, [imageString]);

  useEffect(() => {
    if (avatarUrl != "") avatarImageRef.current.src = avatarUrl;
  }, [avatarUrl]);

  useEffect(async () => {
    window.scrollTo(0, 0);
    await updateInfomationFields();
  }, []);

  return (
    <section>
      <Link to="/">
        <div>
          <img alt="" src={logo} className={styles.logoWebsite}></img>
        </div>
      </Link>
      <img
        src="./images/profile_background.png"
        alt=""
        className={styles.profileBackground}
      />
      <img
        src=""
        alt=""
        className={styles.profileAvatarDesign}
        ref={avatarImageRef}
      />
      <input
        type="file"
        name="photo"
        className={styles.chooseAvatarButton}
        onChange={(e) => handleChooseImage(e)}
      />
      <h1 className={`${styles.headerString} d-flex`}>Update Profile</h1>

      <div className={styles.listFieldInfo}>
        <div className={styles.listFieldInfoPart}>
          <li className={styles.itemFieldInfo}>
            <span className={styles.itemFieldName}>Fullname: </span>
            <input
              type="text"
              className={styles.itemInputField}
              ref={fullnameInputRef}
            />
          </li>
          <li className={styles.itemFieldInfo}>
            <span className={styles.itemFieldName}>Email: </span>
            <input
              type="text"
              className={styles.itemInputField}
              ref={emailInputRef}
            />
          </li>
          <li className={styles.itemFieldInfo}>
            <span
              className={
                styles.itemFieldName + " " + styles.itemFieldNamePhoneNumber
              }
            >
              Phone number:{" "}
            </span>
            <input
              type="text"
              className={styles.itemInputField}
              ref={phoneNumberInputRef}
            />
          </li>
          <li className={styles.itemFieldInfo}>
            <span className={styles.itemFieldName}>Role: </span>
            <span className={styles.itemFieldNameRole} ref={roleTextRef}></span>
          </li>
        </div>
      </div>

      <div className={styles.buttonForm}>
        <button className={styles.buttonUpdate} onClick={handleUpdateProfile}>
          Update
        </button>
      </div>
    </section>
  );
};

export default UpdateProfile;
