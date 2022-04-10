import React, { useRef, useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../Auth/index";
import { viewProfileApi } from "../Profile/apiProfile";
import { ProfileModal, SignoutModal } from "../Modal";
import styles from "./HeaderTeacher.module.css";
import logo from "../../assets/images/logo192.png";
const defaultAvatarUrl =
  "https://res.cloudinary.com/dhzbsq7fj/image/upload/v1643101647/avatardefault_92824_aifry9.png";

const HeaderTeacher = () => {
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const avatarImageRef = useRef();
  const navigate = useNavigate();

  const updateAvatarImage = async () => {
    // Lấy userId từ localStorage
    const userId = isAuthenticated() ? isAuthenticated().user._id : "";

    // Call API
    const data = await viewProfileApi({ _id: userId });

    // Xử lí kết quả trả về từ API
    if (data._id) {
      avatarImageRef.current.src = data.pic;
    } else {
      avatarImageRef.current.src = defaultAvatarUrl;
    }
  };

  const handleClickAvatarImage = () => {
    // Toggle kích hoạt hoặc ngăn chặn hành vi cuộn (scroll)
    document.body.style.overflow = openProfileModal ? "visible" : "hidden";

    setOpenProfileModal(!openProfileModal);
  };

  const renderList = () => {
    return (
      <div className={`${styles.headerRightFrame} d-flex`}>
        <div className={`${styles.headerButton} ml-4`}>
          <button
            className={`btn btn-outline-primary`}
            style={{ marginRight: "30px" }}
            onClick={() => navigate("/create-category")}
          >
            Create Category
          </button>
        </div>
        <div className={`${styles.headerButton} ml-4`}>
          <button
            className={`btn btn-outline-primary`}
            style={{ marginRight: "30px" }}
            onClick={() => navigate("/create-course")}
          >
            Create Course
          </button>
        </div>
        <div className={`${styles.headerButton} ml-4`}>
          <button
            className={`btn btn-outline-primary`}
            style={{ marginRight: "30px" }}
            onClick={() => navigate("/manage-courses")}
          >
            Manage Courses
          </button>
        </div>
        <div className={`${styles.headerButton} ml-4`}>
          <div onClick={handleClickAvatarImage}>
            <img
              src=""
              alt=""
              className={styles.avatarImage}
              ref={avatarImageRef}
            />
          </div>
        </div>
      </div>
    );
  };

  useEffect(async () => {
    await updateAvatarImage();
  }, []);

  return (
    <div>
      {openProfileModal && (
        <ProfileModal setOpenProfileModal={setOpenProfileModal} />
      )}
      <header className={`container ${styles.header}`}>
        <Link to="/">
          <div className={styles.headerLogo}>
            <img alt="" src={logo}></img>
          </div>
        </Link>

        {renderList()}
      </header>
    </div>
  );
};

export default HeaderTeacher;
