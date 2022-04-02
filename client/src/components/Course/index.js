import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import styles from "./Course.module.css";
import Header from "../Header";
import { read } from "./aipCourse";
import { addItem } from "../Cart/helperCart";
import onl1 from "../../assets/icons/onl1.png";
import onl2 from "../../assets/icons/onl2.png";
import onl3 from "../../assets/icons/onl3.png";
import bluetick from "../../assets/icons/bluetick.png";
import oddstar from "../../assets/icons/oddstar.png";
import staremptypng from "../../assets/icons/staremptypng.png";
import detailcourse1 from "../../assets/icons/detailcourse1.png";
const Course = () => {
  const { courseId } = useParams();
  const navigate = useNavigate()

  const [course, setCourse] = useState({});
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false)
  const { description, name, rate } = course;

  useEffect(() => {
    loadSingleProduct(courseId);
  }, []);

  const loadSingleProduct = (courseId) => {
    read(courseId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCourse(data);
      }
    });
  };

  const addToCart = () => {
    addItem(course, () => {
      setRedirect(true)
    })
  };

  const shouldRedirect = (redirect) => {
    if(redirect) {
      return navigate('/cart')
    }
  }

  const showRegister = () => {
    
    if(course) {
      return (
        <button
          onClick={addToCart}
          className={`btn btn-info ${styles.btnRegister}`}
        >
          Add to Cart
        </button>
      );
    }
  };

  return (
    <section>
      <Header />
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
              <p>{description && description.goal}</p>
              {description &&
                description.achievement.map((a, i) => (
                  <div key={i} className={` d-flex ${styles.courseDetailItem}`}>
                    <img src={bluetick}></img>
                    <p>{a}</p>
                  </div>
                ))}
            </div>
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
