import React, {useState, useEffect}from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Slider from "react-slick";
import Footer from "../Footer";
import CardCourse from "../CardCourse";
import { getCourses } from "./apiCore";
import ResultSearch from './ResultSearch'
import styles from "./Home.module.css";
import { isAuth,isAuthenticated } from "../Auth";
import "./HomeSlick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    {/* {ResultSearch()} */}
      <section className={`container ${styles.homeSlider}`}>
        <h2>New arrivals</h2>
        <Slider {...settings}>
          {courseByArrival.map((course, i) => (
            <div key={i} className={styles.listCourse}>
              <div className="row">
                <article className={`col listCourse__item`}>
                  <Link to={`/course/${course._id}`}>
                    <img className={styles.itemImage} src={course.image} alt="" />
                    <h6 className="mt-2">{course.name}</h6>
                  </Link>
                  <div className={styles.itemCourseText}>
                      <span>vo trung hieu</span>
                      <div className={styles.listCourseItemStar}>
                        <p>(295,007)</p>
                      </div>
                      <span className={styles.money}>${course.price}</span>
                    </div>
                </article>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <section className={`container ${styles.homeSlider}`}>
        <h2>Best Sellers</h2>
        <div className={styles.homeListItem}>
          <Slider {...settings}>
            {courseBySell.map((course, i) => (
              <div key={i} className={styles.listCourse}>
                <div className="row">
                  <article className={`col listCourse__item`}>
                  <Link to={`/course/${course._id}`}>
                    <img className={styles.itemImage} src={course.image} alt="" />
                    <h6 className="mt-2">{course.name}</h6>
                  </Link>
                    <div className={styles.itemCourseText}>
                      <span>vo trung hieu</span>
                      <div className={styles.listCourseItemStar}>
                        <p>(295,007)</p>
                      </div>
                      <span className={styles.money}>${course.price}</span>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <Footer />
    </body>
  );
};

export default Home;
