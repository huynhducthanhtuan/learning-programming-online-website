import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { read } from "./aipCourse";
import { addItem } from "../Cart/helperCart";
import { isAuthenticated } from "../Auth";
import { getUserHasCourses } from "../MyCourses/apiMyCourses";
import { toast } from "react-toastify";
import styles from "./Course.module.css";
import Header from "../Header";
import onl1 from "../../assets/icons/onl1.png";
import onl2 from "../../assets/icons/onl2.png";
import onl3 from "../../assets/icons/onl3.png";
import ToggleCourse from "../ToggleCourse";
import detailcourse1 from "../../assets/icons/detailcourse1.png";

const Course = ({ isMyCourse = false }) => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const { description, name, rate } = course;
  const [userHasCourses, setUserHasCourses] = useState();
  const { token, user } = isAuthenticated();

  useEffect(() => {
    loadSingleProduct(courseId);

    if (user) {
      getUserHasCourses(user._id, token).then((user) => {
        if (user.error) {
          toast.error(user.error);
        } else {
          setUserHasCourses(user);
        }
      });
    }
  }, []);

  const containeCourse = () => {
    const filterCourse =
      userHasCourses &&
      userHasCourses.coursesId.filter((element) => element._id == courseId);
    if (filterCourse && filterCourse.length > 0) return true;
    return false;
  };

  const loadSingleProduct = (courseId) => {
    read(courseId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCourse(data);
      }
    });
  };

  const goToCourseDetail = () => {
    if (course && course.parts) {
      return navigate(
        `/learning/${courseId}?lessonId=${course.parts[0].lessons[0]._id}`
      );
    }
  };

  const addToCart = (course) => {
    if (user) {
      addItem(course, () => {
        setRedirect(true);
      });
    } else {
      toast.info("YOU MUST BE SIGN IN");
      navigate("/signin");
    }
  };

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return navigate("/cart");
    }
  };

  const showRegister = () => {
    if (course && !containeCourse()) {
      return (
        <button
          onClick={() => addToCart(course)}
          className={`btn btn-info ${styles.btnRegister}`}
        >
          Add to cart
        </button>
      );
    } else
      return (
        <button
          onClick={goToCourseDetail}
          className={`btn btn-info ${styles.btnRegister}`}
        >
          Start
        </button>
      );
  };

  return (
    <section>
      <Header role={0} />
      {shouldRedirect(redirect)}
      <body className={`container ${styles.detailInformation}`}>
        <h1>{name}</h1>
        <section className={`row ${styles.courseDetailBox}`}>
          <div className={`col-3 ${styles.courseInteract}`}>
            <div className={styles.courseOnl}>
              <p>Online 10 users(s)</p>
            </div>
            <div className={styles.courseOnlPeople}>
              <div className="d-flex">
                <img src={onl1}></img>
                <p>Thuan Le: Hi moi nguoi!</p>
              </div>
              <div className="d-flex ">
                <img src={onl2}></img>
                <p>Hieu Huynh: Hello cac ban...</p>
              </div>
              <div className="d-flex pb-3 ">
                <img src={onl3}></img>
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
              <p>{description}</p>
            </div>
            {course && <ToggleCourse course={course} />}
            <div className={styles.courseDetailRate}>
              <p>Rating and Review</p>
            </div>
            <div className={`d-flex mt-2 ${styles.courseDetailStar}`}>
              {/* <img src={staremptypng}></img> */}
            </div>
          </div>
          <div className={`col-3 ${styles.courseImage}`}>
            <img src={detailcourse1} style={{ width: "100%" }}></img>
            {showRegister()}
          </div>
        </section>
      </body>
    </section>
  );
};

export default Course;
