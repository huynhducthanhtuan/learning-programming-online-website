import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import Header from "../Header";
import Slider from "react-slick";
import Footer from "../Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homeSlick.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <body className={styles.home}>
      <Header />
      <section className={`container_fluid ${styles.homeBanner}`}>
        <img src="./icons/banner.png"></img>
      </section>
      <section className={styles.homeCourseText}>
        <h1>Course</h1>
        <div className={styles.homeCourseTextP}>
          <p>
            <b>Learning Programming Online Website</b> where you can find low
            cost online programming courses. We are committed to the quality of
            each course.
          </p>
        </div>
      </section>
      <section className={`container ${styles.homeSlider}`}>
        <h2>Recent new course</h2>
        <Slider {...settings}>
          <Link to="/course" className={styles.homeSliderItemA}>
            <div className={styles.homeSliderItem}>
              <img src="./icons/php&mysql.png"></img>
              <p>Lập trình web bằng PHP & Mysql</p>
            </div>
          </Link>
          <Link to="/course" className={styles.homeSliderItemA}>
            <div className={styles.homeSliderItem}>
              <img src="./icons/quytrinh.png"></img>
              <p>Quy trình xử lý front-end</p>
            </div>
          </Link>
          <Link to="/course" className={styles.homeSliderItemA}>
            <div className={styles.homeSliderItem}>
              <img src="./icons/khoahoc.png"></img>
              <p>Khoá học html/css cơ bản</p>
            </div>
          </Link>
          <Link to="/course" className={styles.homeSliderItemA}>
            <div className={styles.homeSliderItem}>
              <img src="./icons/jscoban.png"></img>
              <p>Khoá học javascript cơ bản</p>
            </div>
          </Link>
          <Link to="/course" className={styles.homeSliderItemA}>
            <div className={styles.homeSliderItem}>
              <img src="./icons/jscoban.png"></img>
              <p>Khoá học javascript cơ bản</p>
            </div>
          </Link>
        </Slider>
      </section>
      <section className={`container ${styles.homeSlider}`}>
        <h2>Front-end</h2>
        <div className={styles.homeListItem}>
          <Slider {...settings}>
            <Link to="/course" className={styles.homeSliderItemA}>
              <div className={styles.homeSliderItem}>
                <img src="./icons/php&mysql.png"></img>
                <img src="./icons/star.png"></img>
                <p>Quy trình xử lý front-end</p>
              </div>
            </Link>
            <Link to="/course" className={styles.homeSliderItemA}>
              <div className={styles.homeSliderItem}>
                <img src="./icons/quytrinh.png"></img>
                <img src="./icons/star.png"></img>
                <p>Khoá học html/css cơ bản</p>
              </div>
            </Link>
            <Link to="/course" className={styles.homeSliderItemA}>
              <div className={styles.homeSliderItem}>
                <img src="./icons/khoahoc.png"></img>
                <img src="./icons/star.png"></img>
                <p>Khoá học javascript cơ bản</p>
              </div>
            </Link>
            <Link to="/course" className={styles.homeSliderItemA}>
              <div className={styles.homeSliderItem}>
                <img src="./icons/jscoban.png"></img>
                <img src="./icons/star.png"></img>
                <p>Khoá học javascript nâng cao</p>
              </div>
            </Link>
            <Link to="/course" className={styles.homeSliderItemA}>
              <div className={styles.homeSliderItem}>
                <img src="./icons/jscoban.png"></img>
                <img src="./icons/star.png"></img>
                <p>Khoá học javascript cơ bản</p>
              </div>
            </Link>
          </Slider>
        </div>
      </section>
      <section className={`container ${styles.homeSlider}`}>
        <h2>Back-end</h2>
        <div className={styles.homeListItem}>
          <Slider {...settings}>
            <Link to="/course" className={styles.homeSliderItemA}>
              <div className={styles.homeSliderItem}>
                <img src="./icons/express.png"></img>
                <img src="./icons/star.png"></img>
                <p>Khoá học express JS</p>
              </div>
            </Link>
            <Link to="/course" className={styles.homeSliderItemA}>
              <div className={styles.homeSliderItem}>
                <img src="./icons/quytrinh.png"></img>
                <img src="./icons/star.png"></img>
                <p>Khoá học html/css cơ bản</p>
              </div>
            </Link>
            <Link to="/course" className={styles.homeSliderItemA}>
              <div className={styles.homeSliderItem}>
                <img src="./icons/khoahoc.png"></img>
                <img src="./icons/star.png"></img>
                <p>Khoá học javascript cơ bản</p>
              </div>
            </Link>
            <Link to="/course" className={styles.homeSliderItemA}>
              <div className={styles.homeSliderItem}>
                <img src="./icons/jscoban.png"></img>
                <img src="./icons/star.png"></img>
                <p>Khoá học javascript nâng cao</p>
              </div>
            </Link>
            <Link to="/course" className={styles.homeSliderItemA}>
              <div className={styles.homeSliderItem}>
                <img src="./icons/jscoban.png"></img>
                <img src="./icons/star.png"></img>
                <p>Khoá học javascript cơ bản</p>
              </div>
            </Link>
          </Slider>
        </div>
      </section>
      <Footer />
    </body>
  );
};

export default Home;
