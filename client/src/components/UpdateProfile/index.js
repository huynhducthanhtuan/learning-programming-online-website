import Axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./UpdateProfile.module.css";
import { toast } from "react-toastify";
import { isAuthenticated } from "../Auth";
import { viewProfileApi, updateProfileApi } from "./apiUpdateProfile";
import logo from "../../assets/images/logo192.png";
const defaultAvatarUrl =
  "https://res.cloudinary.com/dhzbsq7fj/image/upload/v1643101647/avatardefault_92824_aifry9.png";

const Profile = () => {
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
    }
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

  const handleClickUpdateProfile = async () => {
    // Lấy userId từ localStorage
    const userId = isAuthenticated() ? isAuthenticated().user._id : "";

    // Call API
    const data = await updateProfileApi({
      _id: userId,
      pic: avatarUrl != "" ? avatarUrl : defaultAvatarUrl,
      name: fullnameInputRef.current.value.trim(),
      email: emailInputRef.current.value.trim(),
      phone_number: phoneNumberInputRef.current.value.trim(),
    });

    // Xử lí kết quả trả về từ API
    switch (data.message) {
      case "success":
        cleanInputText();
        updateInfomationFields();
        setIsUpdated(!isUpdated);
        toast.success("Update profile success");
        break;
      case "failed":
        toast.error("Update profile failed");
        break;
    }
  };

  useEffect(() => {
    if (imageString != "") postImage();
  }, [imageString]);

  useEffect(() => {
    updateInfomationFields();
    if (avatarUrl != "") avatarImageRef.current.src = avatarUrl;
  }, [avatarUrl]);

  useEffect(() => {
    window.scrollTo(0, 0);
    updateInfomationFields();
  }, []);

  return (
    <section>
      <Link to="/">
        <div className={styles.logoWebsite}>
          <img alt="" src={logo}></img>
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
        <button
          className={styles.buttonUpdate}
          onClick={handleClickUpdateProfile}
        >
          Update
        </button>
      </div>
    </section>
  );
};

export default Profile;
