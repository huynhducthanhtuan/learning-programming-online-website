import React, { useRef, useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../Auth/index";
import { itemTotal } from "../Cart/helperCart";
import { ProfileModal } from "../Modal";
import Search from "../Header/Search";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo192.png";
import cartIcon from "../../assets/icons/shopping-cart.png";
import { AvatarImageContext } from "../../contexts";
import { defaultAvatarUrl } from "../../constants";

const Header = ({ showSearchPart = true }) => {
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const { avatarImage } = useContext(AvatarImageContext);
  const avatarImageRef = useRef();
  const navigate = useNavigate();

  const openMyCourses = () => {
    return navigate("/mycourses");
  };

  const handleClickAvatarImage = () => {
    // Toggle kích hoạt hoặc ngăn chặn hành vi cuộn (scroll)
    document.body.style.overflow = openProfileModal ? "visible" : "hidden";

    setOpenProfileModal(!openProfileModal);
  };

  const renderList = () => {
    if (isAuthenticated()) {
      return (
        <div className={`${styles.headerRightFrame} d-flex`}>
          <div className={`${styles.headerButton} ml-4`}>
            <button
              className={`btn btn-outline-primary`}
              style={{ marginRight: "55px" }}
              onClick={openMyCourses}
            >
              My Courses
            </button>
          </div>
          <div className={`${styles.headerButton}`}>
            <Link to="/cart">
              <div className={styles.cartIcon}>
                <img className={styles.imageIcon} src={cartIcon} alt="" />
                <sup className={styles.quantityCart}>
                  <small className={styles.cartBadge}>{itemTotal()}</small>
                </sup>
              </div>
            </Link>
          </div>
          <div className={`${styles.headerButton} ml-4`}>
            <div onClick={handleClickAvatarImage}>
              <img
                src={avatarImage || defaultAvatarUrl}
                alt=""
                className={styles.avatarImage}
                ref={avatarImageRef}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.headerButton}>
          <Link to="/signup">
            <button className="btn btn-secondary">Sign Up</button>
          </Link>
          <Link to="/signin ">
            <button className="btn btn-secondary ml-4 mr-4">Sign In</button>
          </Link>
        </div>
      );
    }
  };

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

        {/* Nếu prop showSearchPart = true thì sẽ render <Search /> */}
        {/* và ngược lại */}
        {showSearchPart && <Search />}
        {renderList()}
      </header>
    </div>
  );
};

export default Header;
