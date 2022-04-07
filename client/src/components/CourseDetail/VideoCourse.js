import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { readLesson } from "./apiCourseDetail";
import styles from "./CourseDetail.module.css";

const VideoCourse = ({ lessonId }) => {
  const [lesson, setLesson] = useState();
  useEffect(() => {
    readLesson(lessonId).then((data) => {
      //   console.log(data);
      setLesson(data);
    });
  }, [lessonId]);

  return (
    <iframe
      className={styles.courseVideo}
      src={lesson && lesson.videoId}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      allowFullScreen
    ></iframe>
  );
};
export default VideoCourse;
