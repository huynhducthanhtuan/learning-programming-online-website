import React from "react";
import { useEffect } from "react";
import styles from "./CourseDetail.module.css";
import { readLesson } from "./apiCourseDetail";
import { useState } from "react";
const CommentContent = ({ lessonDetail }) => {
  // const [lesson, setLesson] = useState();

  // useEffect(() => {
  //   readLesson(lessonId).then((data) => {
  //     setLesson(data);
  //   });
  // }, [lessonId]);
  // console.log(lesson);
  return (
    <div>
      {/* {lesson && lesson.comments.map((record, index) => {
        return (
          <div className={styles.courseAllComments}>
            <form className={styles.courseAComment}>
              <img src="" className={styles.courseAvatar} />
              <div className={styles.courseCommentContent}>
                <h5 className={styles.courseCommentName}>{record.commentedBy.name}</h5>
                <div>
                  <p>{record.text}</p>
                </div>
              </div>
            </form>
          </div>
        );
      })} */}
    </div>
  );
};
export default CommentContent;
