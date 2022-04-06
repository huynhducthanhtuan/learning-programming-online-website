import React from "react";
import { useState } from "react";
import styles from "./CourseDetail.module.css";
import { playIcon } from "./exportImage";
import { readLesson } from "./apiCourseDetail";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LessonDetail = ({ lessonId, courseId }) => {
  const [lesson, setLesson] = useState();

  // setLesson()
  useEffect(() => {
    readLesson(lessonId).then((data) => {
      setLesson(data);
    });
  }, []);

  return (
    <div id="allLessons1" className={styles.courseAllLessons}>
      <div className={styles.courseLesson}>
        <Link to={`/courseDetail/${courseId}/${lessonId}`}>
          <p>1.{lesson && lesson.title} ?</p>
          <div className={styles.courseVideoTimes}>
            <img src={playIcon} />
            <p>1:10</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LessonDetail;
