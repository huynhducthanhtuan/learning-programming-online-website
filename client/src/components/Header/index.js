import React, { useRef, useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { isAuthenticated } from "../Auth/index";
import { itemTotal } from "../Cart/helperCart";
import { toast } from "react-toastify";
import { viewProfileApi } from "../Profile/apiProfile";
import Modal from "../model/Modal";
import Search from "../Header/Search";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo192.png";
import cartIcon from "../../assets/icons/shopping-cart.png";
const defaultAvatarUrl =
  "https://res.cloudinary.com/dhzbsq7fj/image/upload/v1643101647/avatardefault_92824_aifry9.png";

const Header = ({ showSearchPart = true }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { state, dispatch } = useContext(UserContext);
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

  const openMyCourses = () => {
    return navigate("/mycourses");
  };

  const signOutAction = () => {
    toast.success("Sign Out Success");
    localStorage.removeItem("jwt");
    dispatch({ type: "CLEAR" });
    navigate("/");
    setModalOpen(false);
  };

  const renderList = () => {
    if (isAuthenticated()) {
      return (
        <div className="d-flex">
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
            <Link to="/profile">
              <img
                src=""
                alt=""
                className={styles.avatarImage}
                ref={avatarImageRef}
              />
            </Link>
          </div>

          <div className={`${styles.headerButton} ml-4`}>
            <button
              className="btn btn-info openModalBtn"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Sign Out
            </button>
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

  useEffect(() => {
    updateAvatarImage();
  }, []);

  return (
    <div>
      {modalOpen && (
        <Modal
          body="Are you sure you want to sign out?"
          setOpenModal={setModalOpen}
          action={signOutAction}
        />
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
