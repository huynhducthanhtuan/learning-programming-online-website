import React, { useRef, useEffect } from "react";
import styles from "./Profile.module.css";
import logo from "../../assets/images/logo192.png";
import { useNavigate, Link } from "react-router-dom";
import { isAuthenticated } from "../Auth";
import { viewProfileApi } from "./apiProfile";

const Profile = () => {
  const navigate = useNavigate();
  const avatarImageRef = useRef();
  const fullnameTextRef = useRef();
  const emailTextRef = useRef();
  const phoneNumberTextRef = useRef();
  const roleTextRef = useRef();

  const updateInfomationFields = async () => {
    // Lấy userId từ localStorage
    const userId = isAuthenticated() ? isAuthenticated().user._id : "";

    // Call API
    const data = await viewProfileApi({ _id: userId });

    // Xử lí kết quả trả về từ API
    if (data._id) {
      // Cập nhật avatar và nội dung cho các trường
      avatarImageRef.current.src =
        data.pic || "./icons/profile_avatar_design.png";
      fullnameTextRef.current.innerText = data.name;
      emailTextRef.current.innerText = data.email;
      phoneNumberTextRef.current.innerText = data.phone_number;
      roleTextRef.current.innerText = data.role == 0 ? "Student" : "Teacher";
    }
  };

  const handleClickUpdateProfile = () => {
    navigate("/update-profile");
  };

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
      <h1 className={`${styles.headerString} d-flex`}>Profile</h1>

      <div className={styles.listFieldInfo}>
        <div className={styles.listFieldInfoPart}>
          <li className={styles.itemFieldInfo}>
            <span className={styles.itemFieldName}>Fullname: </span>
            <span ref={fullnameTextRef}></span>
          </li>
          <li className={styles.itemFieldInfo}>
            <span className={styles.itemFieldName}>Email: </span>
            <span ref={emailTextRef}></span>
          </li>
          <li className={styles.itemFieldInfo}>
            <span className={styles.itemFieldName}>Phone number: </span>
            <span ref={phoneNumberTextRef}></span>
          </li>
          <li className={styles.itemFieldInfo}>
            <span className={styles.itemFieldName}>Role: </span>
            <span ref={roleTextRef}></span>
          </li>
        </div>
      </div>

      <div className={styles.buttonForm}>
        <button
          className={styles.buttonUpdateProfile}
          onClick={handleClickUpdateProfile}
        >
          Update Profile
        </button>
      </div>
    </section>
  );
};

export default Profile;
