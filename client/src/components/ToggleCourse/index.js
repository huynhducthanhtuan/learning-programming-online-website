import React, { useState } from "react";
import styles from "./Toggle.module.css";
import { getLessonsByPartId } from "../Teacher/apiTeacher";
import { Link } from "react-router-dom";
const ToggleCourse = ({
  course,
  showFormAddLesson = () => {},
  addLessonBtn = () => {},
}) => {
  function handleToggle(lessonsId) {
    if (document.getElementById(lessonsId).style.display == "none") {
      document.getElementById(lessonsId).style.display = "block";
    } else {
      document.getElementById(lessonsId).style.display = "none";
    }
  }
  const loadLessonsByPartId = (partId) => {
    getLessonsByPartId(partId).then((lessons) => {
      console.log(lessons);
    });
  };
  return (
    <nav className={styles.courseContent}>
      <div className={styles.courseContentBox}>
        {course &&
          course.parts &&
          course.parts.map((part, index) => {
            return (
              <div key={part._id}>
                <div
                  className={styles.partItem}
                  onClick={() => handleToggle(part._id)}
                >
                  <span>
                    {index + 1}. {part.topic}
                  </span>
                </div>

                <ul id={part._id}>
                  {part.lessons.map((lesson, index) => (
                    <Link
                      to={`/learning/${course._id}?lessonId=${lesson._id}`}
                      key={lesson._id}
                    >
                      <li>
                        {index + 1}. {lesson.title}
                      </li>
                    </Link>
                  ))}
                  {addLessonBtn(part)}
                  {/* {part.isSelect && showFormAddLesson(part)} */}
                </ul>
              </div>
            );
          })}
      </div>
    </nav>
  );
};

export default ToggleCourse;
