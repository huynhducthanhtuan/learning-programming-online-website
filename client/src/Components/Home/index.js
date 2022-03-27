import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import Header from "../Header";
import Slider from "react-slick";
import Footer from "../Footer";
import { getCourses } from "./apiCore";

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

  const [courseBySell, setCourseBySell] = useState([]);
  const [courseByArrival, setCourseByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadCourseBySell = () => {
    getCourses("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCourseBySell(data);
      }
    });
  };
  const loadCourseByArrival = () => {
    getCourses("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCourseByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadCourseBySell();
    loadCourseByArrival();
  }, []);

  console.log("loadCourseBySell", courseBySell);
  console.log("loadCourseByArrival", courseByArrival);

  return (
    <body className={styles.home}>
      <Header />
      <section className={`container_fluid ${styles.homeBanner}`}>
        <img src="./icons/banner.png" alt=""></img>
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
        <h2>New arrivals</h2>
        <Slider {...settings}>
        {courseByArrival.map((course, i) => (
              <Link to="/" className={styles.homeSliderItemA}>
                <div className={styles.homeSliderItem}>
                  <img src={course.image} alt=""></img>
                  <img src="./icons/star.png" alt=""></img>
                  <p>{course.name}</p>
                </div>
              </Link>
            ))}
        </Slider>
      </section>
      <section className={`container ${styles.homeSlider}`}>
        <h2>Best Sellers</h2>
        <div className={styles.homeListItem}>
          <Slider {...settings}>
            {courseBySell.map((course, i) => (
              <Link to="/" className={styles.homeSliderItemA}>
                <div className={styles.homeSliderItem}>
                  <img src={course.image} alt=""></img>
                  <img src="./icons/star.png" alt=""></img>
                  <p>{course.name}</p>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </section>

      <Footer />
    </body>
  );
};

export default Home;
