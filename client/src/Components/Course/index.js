import React from "react";
import { Link } from "react-router-dom";
import styles from "./Course.module.css";
import Header from "../Header";

const Course = () => {
  return (
    <section>
      <Header />
      <body className={`container ${styles.detailInformation}`}>
        <h1>HTML, CSS From Zero To Hero</h1>
        <section className={`row ${styles.courseDetailBox}`}>
          <div className={`col-3 ${styles.courseInteract}`}>
            <div className={styles.courseOnl}>
              <img src="./icons/greendot.png"></img>
              <p>Online 10 users(s)</p>
            </div>
            <div className={styles.courseOnlPeople}>
              <div className="d-flex">
                <img src="./icons/onl1.png"></img>
                <p>Thuan Le: Hi moi nguoi!</p>
              </div>
              <div className="d-flex ">
                <img src="./icons/onl2.png"></img>
                <p>Hieu Huynh: Hello cac ban...</p>
              </div>
              <div className="d-flex pb-3 ">
                <img src="./icons/onl3.png"></img>
                <p>Thanh Tuan: Hi anh em</p>
              </div>
              <input
                type="text"
                name="binhluan"
                placeholder="Comment ..."
              ></input>
              <button>Send</button>
            </div>
          </div>
          <div className={`col-6 ${styles.courseDescription}`}>
            <p className={styles.courseDesP}>Description</p>
            <div className={styles.courseDesBox}>
              <p>
                In this course, we will build together the interface of 2
                websites, The Band & Shopee. What will you learn?
              </p>
              <div className={` d-flex ${styles.courseDetailItem}`}>
                <img src="./icons/bluetick.png"></img>
                <p>Know how to name CSS classes according to BEM . standards</p>
              </div>
              <div className={` d-flex ${styles.courseDetailItem}`}>
                <img src="./icons/bluetick.png"></img>
                <p>Master Flexbox when building website layouts</p>
              </div>
              <div className={` d-flex ${styles.courseDetailItem}`}>
                <img src="./icons/bluetick.png"></img>
                <p>Know how to motivate yourself</p>
              </div>
              <div className={` d-flex ${styles.courseDetailItem}`}>
                <img src="./icons/bluetick.png"></img>
                <p>Know how to analyze the website interface</p>
              </div>
              <div className={` d-flex ${styles.courseDetailItem}`}>
                <img src="./icons/bluetick.png"></img>
                <p>Own 2 web interfaces when completing the course</p>
              </div>
            </div>
            <div className={styles.courseDetailRate}>
              <p>Rating and Review</p>
            </div>
            <div className={`d-flex mt-2 ${styles.courseDetailStar}`}>
              <img src="./icons/oddstar.png"></img>
              <img src="./icons/oddstar.png"></img>
              <img src="./icons/oddstar.png"></img>
              <img src="./icons/oddstar.png"></img>
              <img src="./icons/staremptypng.png"></img>
            </div>
          </div>
          <div className={`col-3 ${styles.courseImage}`}>
            <img src="./icons/detailcourse1.png"></img>
            <p>Register</p>
          </div>
        </section>
      </body>
    </section>
  );
};

export default Course;