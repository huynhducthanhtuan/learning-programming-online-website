import React, { useEffect } from "react";
import styles from "./CardCourse.module.css";

const CardCourse = ({ course }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return course.map((course, i) => (
    <div className={styles.listCourse}>
      <div className="row">
        <article className={`col listCourse__item`}>
          <img className={styles.itemImage} src={course.image} alt="" />
          <h6 className="mt-2">{course.name}</h6>
          <span>vo trung hieu</span>
          <div className={styles.listCourseItemStar}>
            <p>4.7</p>
            <img src="./images/oddstar.png" alt="" />
            <img src="./images/oddstar.png" alt="" />
            <img src="./images/oddstar.png" alt="" />
            <img src="./images/oddstar.png" alt="" />
            <img src="./images/oddstar.png" alt="" />
            <p>(295,007)</p>
          </div>
          <span className={styles.money}>${course.price}</span>
        </article>
      </div>
    </div>
  ));
};

export default CardCourse;
