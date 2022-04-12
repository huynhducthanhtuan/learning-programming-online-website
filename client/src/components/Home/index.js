import React, { useState, useEffect, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../Header";
import DashBoardTeacher from "../DashboardTeacher";
import Footer from "../Footer";
import { toast } from "react-toastify";
import { enableScrollBehavior, getUserRole } from "../../constants";
import "./HomeSlick.css";
import { getCourses } from "./apiCore";
import ResultSearch from "./ResultSearch";
import styles from "./Home.module.css";
import { isAuth, isAuthenticated } from "../Auth";
import { addItem } from "../Cart/helperCart";

const Home = () => {
  const [courseBySell, setCourseBySell] = useState([]);
  const [courseByArrival, setCourseByArrival] = useState([]);
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  const [resultSearchedCourses, setResultSearchedCourses] = useState();

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

  const addToCart = (courseToAdd) => {
    if (isAuthenticated()) {
      addItem(courseToAdd, () => {
        setRedirect(true);
        toast.success("ADD TO CART SUCCESS");
      });
    } else {
      toast.info("YOU MUST BE SIGN IN");
      navigate("/signin");
    }
  };

  const handleSearchResult = (resultSearch) => {
    setResultSearchedCourses(resultSearch);
  };

  const renderHome = () => {
    return (
      <div className={styles.home}>
        <Header
          handleSearchResult={(resultSearch) =>
            handleSearchResult(resultSearch)
          }
        />
        <section className={`container_fluid ${styles.homeBanner}`}>
          <img src="./icons/banner.png" alt=""></img>
        </section>
        <section className={styles.homeCourseText}>
          <h1>Course</h1>
          <div className={styles.homeCourseTextP}>
            <p>
              <b>Learning Programming Online Website</b> where you can find low
              cost online programming courses. We are committed to the quality
              of each course.
            </p>
          </div>
        </section>
        {/* {ResultSearch()} */}
        <section className={`container ${styles.homeSlider}`}>
          {resultSearchedCourses && (
            <ResultSearch resultSearch={resultSearchedCourses} />
          )}
          <h2>New courses</h2>
          <div className="d-flex justify-content-between">
            {courseByArrival.map((course, i) => (
              <div key={i} className={`row ${styles.listCourse}`}>
                <article className={`col ${styles.listCourse__item}`}>
                  <Link to={`/course/${course._id}`}>
                    <img
                      className={styles.itemImage}
                      src={course.image}
                      alt=""
                    />
                    <h6 className="mt-2">{course.name}</h6>
                  </Link>
                  <div className={styles.itemCourseText}>
                    <span>Sơn Đặng</span>
                    <div className={styles.listCourseItemStar}>
                      <p>(295,007)</p>
                    </div>
                    <span className={styles.money}>${course.price}</span>
                  </div>
                  <button
                    className="btn btn-outline-info mt-2 mb-2"
                    onClick={() => addToCart(course)}
                  >
                    Add to cart
                  </button>
                </article>
              </div>
            ))}
          </div>
        </section>
        <section className={`container ${styles.homeSlider}`}>
          <h2>Best sellers</h2>
          <div className="d-flex justify-content-between">
            {courseBySell.map((course, i) => (
              <div key={i} className={`row ${styles.listCourse}`}>
                <article className={`col ${styles.listCourse__item}`}>
                  <Link to={`/course/${course._id}`}>
                    <img
                      className={styles.itemImage}
                      src={course.image}
                      alt=""
                    />
                    <h6 className="mt-2">{course.name}</h6>
                  </Link>
                  <div className={styles.itemCourseText}>
                    <span>Sơn Đặng</span>
                    <div className={styles.listCourseItemStar}>
                      <p>(295,007)</p>
                    </div>
                    <span className={styles.money}>${course.price}</span>
                  </div>
                  <button
                    className="btn btn-outline-info mt-2 mb-2"
                    onClick={() => addToCart(course)}
                  >
                    Add to cart
                  </button>
                </article>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    loadCourseBySell();
    loadCourseByArrival();

    // Kích hoạt hành vi cuộn (scroll)
    enableScrollBehavior(true);
  }, []);

  return getUserRole() == 1 ? <DashBoardTeacher /> : renderHome();
};

export default Home;
