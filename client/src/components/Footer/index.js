import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import fbIcon from "../../assets/icons/fb.png";
import instarIcon from "../../assets/icons/insta.png";
import twIcon from "../../assets/icons/tw.png";

const Footer = () => {
  
  return (
    <footer className={`container_fluid ${styles.footer}`}>
      <div className="row">
        <div className="col ">
          <p>Thông tin về chúng tôi</p>
          <div className={styles.footerImage}>
            <Link to="/">
              <img src={fbIcon}></img>
            </Link>
            <Link to="/">
              <img src={instarIcon}></img>
            </Link>
            <Link to="/">
              <img src={twIcon}></img>
            </Link>
          </div>
        </div>
        <div className="col ">
          <p>Liên hệ qua email</p>
          <Link to="/" className={styles.footerTextA}>
            <span>thuancr7@gmail.com</span>
          </Link>
        </div>
        <div className="col ">
          <p>Chính sách</p>
          <span>
            Chính sách nội dung<br></br>
          </span>

          <span>Chính sách quyền riêng tư</span>
        </div>
        <div className="col ">
          <span>Copyright © 2022</span>
          <br />
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
