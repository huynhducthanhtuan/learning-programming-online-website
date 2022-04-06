import React from "react";
import styles from "./Carted.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { updateItem, removeItem } from "../Cart/helperCart";
import Course from "../Course";

const Carted = ({ course, cartUpdate = false, showRemoveCourse = false }) => {
  console.log("course ",course);

  const showRemoveProductButton = (showRemoveCourse) => {
    return (
      showRemoveCourse && (
        <button
          onClick={() => {
            removeItem(course._id);
            window.location.reload();
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove
        </button>
      )
    );
  };

  return (
    <div class={`${styles.courseItem} mt-4`}>
      <div className={styles.imageCourseCart}>
        <Link to={`/course/${course._id}`}>
          {" "}
          <img class={styles.courseItemImage} src={course.image} alt="" />{" "}
          {/* <Course isMyCourse={true} />{" "} */}
        </Link>
      </div>
      <div class={styles.courseItemText}>
        <Link to={`/course/${course._id}`}>
          <h6>{course.name}</h6>
          <p>
            Learn<b> {course.category.name}</b>
            {course.description.goal}
            <b>{course.category.name}</b>
          </p>
          {/* <Course isMyCourse={true} /> */}
        </Link>
        <div class={styles.courseItemRate}>
          <span>4.6</span>
          {/* {showStart()} */}
          <span>(64,668)</span>
        </div>
        <ul>
          35 total hours
          <li>177 lectures</li>
          <li>All Levels</li>
        </ul>
        {showRemoveProductButton(showRemoveCourse)}
      </div>
      <div class={styles.courseItemCost}>
        <p>${course.price}</p>
      </div>
    </div>
  );
};
export default Carted;
