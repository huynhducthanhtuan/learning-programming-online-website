import React, {useEffect} from "react";
import styles from "./CourseDetail.module.css";
import { useRef } from "react";
import { isAuthenticated } from "../Auth";
import { useState } from "react";
import {readLesson} from './apiCourseDetail'

const Comment = ({ lessonId }) => {
  const { user, token } = isAuthenticated();
  const inputComment = useRef();
  const [lessonDetail, setLessonDetail] = useState()

  console.log(lessonDetail);
  console.log(lessonId);
  useEffect(() => {
    readLesson(lessonId)
    .then(data => {
      setLessonDetail(data)
    })
  }, [lessonId])

  const makeComment = (text, lessonId) => {
    fetch(`/lesson/comment/${user._id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        text,
        lessonId,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // const newData = data.map(item => {
        //     if(item._id === result._id) {
        //         return result
        //     } else {
        //         return item
        //     }
        // })
        setLessonDetail(result)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmitComment = (e, lessonId) => {
    e.preventDefault();
    // console.log(e.target[0].value, lessonId);
    makeComment(e.target[0].value, lessonId);
    e.target[0].value = ""
  };
  return (
    <div>
    {lessonDetail && lessonDetail.comments.map((record, index) => {
        return (
          <div className={styles.courseAllComments}>
            <form className={styles.courseAComment}>
              <img src={user && user.pic} className={styles.courseAvatar} />
              <div className={styles.courseCommentContent}>
                <h5 className={styles.courseCommentName}>{record.commentedBy.name}</h5>
                <div>
                  <p>{record.text}</p>
                </div>
              </div>
            </form>
          </div>
        );
      })}

      <form
        className={styles.courseComment}
        onSubmit={(e) => {
          handleSubmitComment(e, lessonId);
        }}
      >
        <input type="text" placeholder="Add a comment" ref={inputComment} />
      </form>
    </div>
  );
};
export default Comment;
