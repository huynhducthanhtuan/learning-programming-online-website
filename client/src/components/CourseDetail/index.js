import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./CourseDetail.module.css";
import { useState } from "react";
import {
  addIcon,
  dropIcon,
  penIcon,
  trashIcon,
  avatarImage,
  sendIcon,
  playIcon,
} from "./exportImage";
import { read } from "../Course/aipCourse";
import { readLesson } from "./apiCourseDetail";
import LessonDetail from "./LessonDetail";
import VideoCourse from "./VideoCourse";
import Comment from "./Comment";
import CommentContent from "./CommentContent";
import { useRef } from "react";
const CourseDetail = () => {
  const [toggle, setToggle] = useState("parts");
  // function lessonsList(lessonsId, buttonId) {
  //   if (
  //     document.getElementById(lessonsId).style.display == "none" ||
  //     document.getElementById(lessonsId).style.display == ""
  //   ) {
  //     document.getElementById(lessonsId).style.display = "block";
  //     document.getElementById(buttonId).style.transform = "rotate(180deg)";
  //   } else {
  //     document.getElementById(lessonsId).style.display = "none";
  //     document.getElementById(buttonId).style.display = "rotate(360deg)";
  //   }
  // }
  const [course, setCourse] = useState();
  const [error, setError] = useState();
  const [status, setStatus] = useState();
  const [lessonCourse, setLessonCourse] = useState();
  const [idLesson, setIdLesson] = useState();
  const { courseId } = useParams();
  const { lessonId } = useParams();
  
  const loadCourseDetail = (courseId) => {
    read(courseId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else setCourse(data);
    });
  };
  console.log(course);
  console.log(courseId);
  useEffect(() => {
    loadCourseDetail(courseId);
    // loadLesson(idLesson);
  }, []);

  const loadLesson = (idLesson) => {
    readLesson(idLesson).then((data) => {
      console.log(data);
    });
  };

  
  const renderListPart = () => {
    return (
      <div className={styles.courseParts}>
        <section>
          <div className={styles.courseHeader}>
            <p>{course && course.name}</p>
          </div>
          {course &&
            course.parts.map((part, i) => {
              return (
                <div className={styles.courseAllParts} key={i}>
                  <div className={styles.coursePart}>
                    <div className={styles.coursePartHeader}>
                      <p>Part 1: {part.topic}</p>

                      <img
                        id="dropIcon1"
                        className={styles.courseDropDownIcon}
                        src={dropIcon}
                        alt=""
                      />
                    </div>
                    {part.lessons.map((lessonId, i) => {
                      return (
                        <LessonDetail lessonId={lessonId} courseId={courseId} />
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </section>
      </div>
    );
  };
  return (
    <section>
      <Header />

      <div className={styles.course}>
        <div className={styles.courseVideoAndNotes}>
          <VideoCourse lessonId={lessonId} />

          <div className={styles.courseTabs}>
            <div
              className={
                toggle === "parts"
                  ? `${styles.tabItem} ${styles.active}`
                  : `${styles.tabItem}`
              }
              onClick={() => setToggle("parts")}
            >
              <h6>
                <button>
                  <span>Parts</span>
                </button>
              </h6>
            </div>

            <div
              className={
                toggle === "comments"
                  ? `${styles.tabItem} ${styles.active}`
                  : `${styles.tabItem}`
              }
              onClick={() => setToggle("comments")}
            >
              <h6>
                <button>
                  <span>Comments</span>
                </button>
              </h6>
            </div>
          </div>

          <div></div>

          <div className="tabContents">
            <div
              className={
                toggle === "parts"
                  ? `${styles.tabContent} ${styles.active}`
                  : `${styles.tabContent}`
              }
            >
              <div className={styles.courseCreateNote}>
                <button className={styles.courseNewNoteButton}>
                  <span>
                    Create new note at
                    <span>0:00</span>
                  </span>

                  <img src={addIcon} />
                </button>

                <div className={styles.courseFilter}>
                  <div className={styles.courseFilterAllParts}>
                    <button className={styles.courseFilterAllPartsButton}>
                      <span>All Parts</span>
                      <img src={dropIcon} />
                    </button>
                  </div>

                  <div className={styles.courseFilterCurrentPart}>
                    <button className={styles.courseFilterCurrentPartButton}>
                      <span>Current Part</span>
                    </button>
                  </div>
                </div>

                <div className={styles.courseNoNote}>
                  Click the "Create new note" box, the "+" button to make your
                  first note
                </div>

                <div className={styles.courseNote}>
                  <div className={styles.courseNoteTimes}>
                    <span>0:00</span>
                  </div>

                  <div className={styles.courseNoteDetail}>
                    <div className={styles.courseNoteTitle}>
                      <div className={styles.courseNoteTitleName}>
                        <div>Part 1: Get started</div>
                        <div>1. What is HTML, CSS?</div>
                      </div>

                      <div className={styles.courseSpacer}></div>

                      <button className={styles.courseNoteButton}>
                        <img src={penIcon} />
                      </button>

                      <button className={styles.courseNoteButton}>
                        <img src={trashIcon} />
                      </button>
                    </div>

                    <div className={styles.courseNoteParam}>
                      <div>
                        <p>attribute: là các thuộc tính trong thẻ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                toggle === "comments"
                  ? `${styles.tabContent} ${styles.active}`
                  : `${styles.tabContent}`
              }
            >
              {/* <CommentContent lessonId={lessonId} /> */}
              {/* <Comment lessonId={lessonId} /> */}
            </div>
          </div>
        </div>
        {renderListPart()}
      </div>
      <div className={styles.courseFooter}>
        <Footer />
      </div>
    </section>
  );
};

export default CourseDetail;
