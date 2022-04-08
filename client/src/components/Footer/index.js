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
            <a
              href="https://www.facebook.com/hdttuan/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={fbIcon}></img>
            </a>
            <a
              href="https://www.instagram.com/hdttuan/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={instarIcon}></img>
            </a>
            <a
              href="https://twitter.com/hdttuann"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={twIcon}></img>
            </a>
          </div>
        </div>
        <div className="col ">
          <p>Liên hệ qua email</p>
          <a
            href="mailto:tuan40655@gmail.com?subject=Feedback to your Website"
            className={styles.footerTextA}
          >
            <span>tuan40655@gmail.com</span>
          </a>
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
